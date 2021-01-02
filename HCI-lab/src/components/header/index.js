import React, { useContext } from "react"
import { Link } from "gatsby"

import Navigation from "../navigation"
import BurgerMenu from "../burgerMenu"

import Image from "../image"

import { navigationTabs, images } from "../../constants"
import { navigationContext } from "../../constants/contexts";

import styles from "./style.module.css"

const Header = () => {
    var { setActiveTab } = useContext(navigationContext);
    const navTabsWithLogo = () => {
        const [home] = navigationTabs.filter(tab => tab.name === 'Home');
        const limiter = (navigationTabs.length / 2) + navigationTabs.length % 2;

        return [
            ...navigationTabs.slice(0, limiter),
            {
                isComponent: true,
                component: <Link onClick={() => setActiveTab(home.name)} key={'Logo'} className={styles.logoContainer} to={home.linkTo}>
                    <Image name={images.logo} />
                </Link>
            },
            ...navigationTabs.slice(limiter, navigationTabs.length)
        ];
    }

    return (
        <div className={styles.headerContainer}>
            <Navigation navigationTabs={navTabsWithLogo()} />
            <div className={styles.menuContainer}>
                <BurgerMenu />
            </div>
        </div>
    )
}

export default Header
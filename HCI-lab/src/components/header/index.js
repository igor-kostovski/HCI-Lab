import React from "react"
import { Link } from "gatsby"

import Navigation from "../navigation"
import BurgerMenu from "../burgerMenu"

import Image from "../image"

import { navigationTabs, images } from "../../constants"

import styles from "./style.module.css"
import { navigationContext } from "../../constants/contexts";

const Header = () => {

    const navTabsWithLogo = () => {
        const [home] = navigationTabs.filter(tab => tab.name === 'Home');
        const limiter = (navigationTabs.length / 2) + navigationTabs.length % 2;

        return [
            ...navigationTabs.slice(0, limiter),
            {
                isComponent: true,
                component: <Link className={styles.logoContainer} to={home.linkTo}>
                    <Image name={images.logo} />
                </Link>
            },
            ...navigationTabs.slice(limiter, navigationTabs.length)
        ];
    }

    return (
        <div className={styles.headerContainer}>
            {/* Someone needs to update activeTab value inside this context */}
            <navigationContext.Consumer>
                {value => <Navigation activeTab={value} navigationTabs={navTabsWithLogo()} />}
            </navigationContext.Consumer>
            <div className={styles.menuContainer}>
                <BurgerMenu />
            </div>
        </div>
    )
}

export default Header
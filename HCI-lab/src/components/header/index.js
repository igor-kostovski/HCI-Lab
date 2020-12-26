import React, { useState } from "react"
import { Link } from "gatsby"

import Navigation from "../navigation"
import BurgerMenu from "../burgerMenu"

import Image from "../image"

import { navigationTabs, images } from "../../constants"

import styles from "./style.module.css"
import { navigationContext } from "../../constants/contexts";

const Header = () => {
    const [activeTab, setActiveTab] = useState(navigationTabs[0].name);

    const navTabsWithLogo = () => {
        const [home] = navigationTabs.filter(tab => tab.name === 'Home');
        const limiter = (navigationTabs.length / 2) + navigationTabs.length % 2;

        return [
            ...navigationTabs.slice(0, limiter),
            {
                isComponent: true,
                component: <Link key={'Logo'} className={styles.logoContainer} to={home.linkTo}>
                    <Image name={images.logo} />
                </Link>
            },
            ...navigationTabs.slice(limiter, navigationTabs.length)
        ];
    }

    return (
        <div className={styles.headerContainer}>
            <navigationContext.Provider value={{ activeTab, setActiveTab }}>
                <Navigation navigationTabs={navTabsWithLogo()} />
            </navigationContext.Provider>
            <div className={styles.menuContainer}>
                <BurgerMenu />
            </div>
        </div>
    )
}

export default Header
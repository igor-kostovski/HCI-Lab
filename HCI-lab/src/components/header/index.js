import React from "react"
import { Link } from "gatsby"

import Navigation from "../navigation"
import BurgerMenu from "../burgerMenu"

import Image from "../image"

import { navigationTabs, images } from "../../constants"

import styles from "./style.module.css"

const Header = () => {
    const [home] = navigationTabs.filter(tab => tab.name === 'Home');
    const limiter = (navigationTabs.length / 2) + navigationTabs.length % 2;
    const firstHalf = navigationTabs.slice(0, limiter);
    const secondHalf = navigationTabs.slice(limiter, navigationTabs.length);

    return (
        <div className={styles.headerContainer}>
            <Navigation navigationTabs={firstHalf} />
            <Link className={styles.logoContainer} to={home.linkTo}>
                <Image name={images.logo} />
            </Link>
            <Navigation navigationTabs={secondHalf} />
            <div className={styles.menuContainer}>
                <BurgerMenu />
            </div>
        </div>
    )
}

export default Header
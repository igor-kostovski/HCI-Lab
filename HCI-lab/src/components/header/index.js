import React from "react"
import { Link } from "gatsby"

import Navigation from "../navigation"
import BurgerMenu from "../burgerMenu"

import Logo from "../images/logo"

import { headerNavigationTabsLeft, headerNavigationTabsRight } from "../../constants"

import styles from "./style.module.css"

const Header = () => (
    <div className={styles.headerContainer}>
        <Navigation navigationTabs={headerNavigationTabsLeft}/>
        <Link className={styles.logoContainer} to={headerNavigationTabsLeft[0].linkTo}>
            <Logo/>
        </Link>
        <Navigation navigationTabs={headerNavigationTabsRight}/>
        <div className={styles.menuContainer}>
            <BurgerMenu/>
        </div>
    </div>
)

export default Header
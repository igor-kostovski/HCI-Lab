import React from "react"
import { Link } from "gatsby"

import Navigation from "../navigation"
import BurgerMenu from "../burgerMenu"

import Logo from "../images/logo"

import { navigationTabs } from "../../constants"

import styles from "./style.module.css"

const home = navigationTabs.filter(tab => tab.name == 'Home')[0]

const Header = () => (
    <div className={styles.headerContainer}>
        <Navigation navigationTabs={navigationTabs.slice(0,3)}/>
        <Link className={styles.logoContainer} to={home.linkTo}>
            <Logo/>
        </Link>
        <Navigation navigationTabs={navigationTabs.slice(3,6)}/>
        <div className={styles.menuContainer}>
            <BurgerMenu/>
        </div>
    </div>
)

export default Header
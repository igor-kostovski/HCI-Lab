import React from "react"
import { Link } from "gatsby"

import Navigation from "../navigation"
import BurgerMenu from "../burgerMenu"

import Logo from "../images/logo"
import Facebook from "../images/facebook"
import Instagram from "../images/instagram"
import Youtube from "../images/youtube"
import Eu from "../images/eu"

import { navigationTabs } from "../../constants"

import styles from "./style.module.css"

const Footer = () => {
    const [home] = navigationTabs.filter(tab => tab.name === 'Home');

    return (
        <div className={styles.footerContainer}>
            <Link className={styles.logoContainer} to={home.linkTo}>
                <Logo />
            </Link>
            <div className={styles.navigationWrapper}>
                <Navigation navigationTabs={navigationTabs} />
            </div>
            <div className={styles.footerImagesContainer}>
                <div className={styles.socialMediaContainer}>
                    <div className={styles.socialMediaIcon}>
                        <Facebook />
                    </div>
                    <div className={styles.socialMediaIcon}>
                        <Instagram />
                    </div>
                    <div className={styles.socialMediaIcon}>
                        <Youtube />
                    </div>
                </div>
                <div className={styles.euContainer}>
                    <Eu />
                </div>
            </div>
        </div>
    )
}

export default Footer
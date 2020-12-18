import React from "react"
import { Link } from "gatsby"

import Navigation from "../navigation"

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
                    <div>
                        <span>FIND US ON:</span>
                    </div>
                    <div className={styles.socialMediaImages}>
                        <div className={styles.socialMediaIcon}>
                            <Facebook />
                        </div>
                        <div className={styles.socialMediaIcon}>
                            <Youtube />
                        </div>
                        <div className={styles.socialMediaIcon}>
                            <Instagram />
                        </div>
                    </div>
                </div>
                <div className={styles.contactContainer}>
                    <div>
                        <span>CONTACT INFO:</span>
                    </div>
                    <div className={styles.contactText}>
                        <span>MAIL: INFO@DELPHINUS-YACHTS.COM</span><br/>
                        <span>TELEPHONE: +385 98 448 518</span><br/>
                        <span>ADRESS: PUT RADOŠEVCA 9, SPLIT 21000 CROATIA</span>
                    </div>
                </div>
                <div className={styles.euContainer}>
                    <div>
                        <span>IN COOPERATION WITH:</span>
                    </div>
                    <Eu />
                </div>
            </div>
        </div>
    )
}

export default Footer
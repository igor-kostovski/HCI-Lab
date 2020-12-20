import React from "react"
import { Link } from "gatsby"

import Navigation from "../navigation"

import Image from "../image"

import { navigationTabs, images, footerTitles, contactInfo } from "../../constants"

import styles from "./style.module.css"

const Footer = () => {
    const [home] = navigationTabs.filter(tab => tab.name === 'Home');

    return (
        <div className={styles.footerContainer}>
            <Link className={styles.logoContainer} to={home.linkTo}>
                <Image name={images.logo} />
            </Link>
            <div className={styles.navigationWrapper}>
                <Navigation navigationTabs={navigationTabs} />
            </div>
            <div className={styles.footerImagesContainer}>
                <div className={styles.socialMediaContainer}>
                    <div>
                        <span>{footerTitles.socialMedia}</span>
                    </div>
                    <div className={styles.socialMediaImages}>
                        <div className={styles.socialMediaIcon}>
                            <Image name={images.facebook} />
                        </div>
                        <div className={styles.socialMediaIcon}>
                            <Image name={images.youtube} />
                        </div>
                        <div className={styles.socialMediaIcon}>
                            <Image name={images.instagram} />
                        </div>
                    </div>
                </div>
                <div className={styles.contactContainer}>
                    <div>
                        <span>{footerTitles.contact}</span>
                    </div>
                    <div className={styles.contactText}>
                        <span>{contactInfo.email}</span><br/>
                        <span>{contactInfo.telephone}</span><br/>
                        <span>{contactInfo.address}</span>
                    </div>
                </div>
                <div className={styles.euContainer}>
                    <div>
                        <span>{footerTitles.eu}</span>
                    </div>
                    <Image name={images.eu} />
                </div>
            </div>
        </div>
    )
}

export default Footer
import React from "react"
import { Link } from "gatsby"

import styles from "./style.module.css"

const Navigation = ({ navigationTabs, activeTab }) => (
    <div className={styles.navigationContainer}>
        {navigationTabs.map(({ name, linkTo, isComponent, component }) => {
            if (isComponent)
                return component;
            else
                return (
                    <Link className={styles.navigationTabContainer} to={linkTo} key={name}>
                        <div className={styles.navigationTabText}>
                            {
                                name === activeTab ? <u>{name.toUpperCase()}</u> : name.toUpperCase()
                            }
                        </div>
                    </Link>
                )
        })}
    </div>
)

export default Navigation
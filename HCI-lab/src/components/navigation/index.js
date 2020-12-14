import React from "react"
import { Link } from "gatsby"

import styles from "./style.module.css"

const Navigation = ({navigationTabs}) => (
    <div className={styles.navigationContainer}>
        {navigationTabs.map(({name, linkTo}) => (
            <Link className={styles.navigationTabContainer} to={linkTo} key={name}>
                <div className={styles.navigationTabText}>{name.toUpperCase()}</div>
            </Link>
        ))}
    </div>
)

export default Navigation
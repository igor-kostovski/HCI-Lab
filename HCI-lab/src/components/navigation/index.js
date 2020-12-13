import React from "react"
import { Link } from "gatsby"

import styles from "./style.module.css"

const Navigation = ({navigationTabs}) => (
    <div className={styles.navigationContainer}>
        {navigationTabs.map(({navigationTab, linkTo}) => (
            <Link className={styles.navigationTabContainer} to={linkTo} key={navigationTab}>
                <div>{navigationTab.toUpperCase()}</div>
            </Link>
        ))}
    </div>
)

export default Navigation
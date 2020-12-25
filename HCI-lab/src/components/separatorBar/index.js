import React from "react"

import styles from "./style.module.css"

const SeparatorBar = ({text}) => {
    return (
        <div className={styles.separatorContainer}>
            <div className={styles.separatorLine}></div>
            <div className={styles.separatorText}>{text}</div>
            <div className={styles.separatorLine}></div>
        </div>
    )
}

export default SeparatorBar
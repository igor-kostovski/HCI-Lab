import React from "react"

import styles from "./gallery.module.css"

const GalleryPage = () => (
  <>
    <div className={styles.galleryContainer}>
        <div className={styles.outerCircleLine}>
        </div>
        <div className={styles.centerCircle}>
        </div>
        <div className={styles.topImageCircle}>
        </div>
        <div className={styles.bottomImageCircle}>
        </div>
        <div className={styles.rightImageCircle}>
        </div>
        <div className={styles.leftImageCircle}>
        </div>
        <div className={styles.topRightImageCircle}>
        </div>
        <div className={styles.topLeftImageCircle}>
        </div>
        <div className={styles.bottomRightImageCircle}>
        </div>
        <div className={styles.bottomLeftImageCircle}>
        </div>
        <div className={styles.rightArrowEnabled}/>
        <div className={styles.leftArrowDisabled}/>
    </div>
  </>
)

export default GalleryPage
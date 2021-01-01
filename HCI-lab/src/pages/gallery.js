import React from "react"

import styles from "./gallery.module.css"

const GalleryPage = () => (
  <>
    <div className={styles.galleryContainer}>
      <div className={styles.galleryLeftSlide}>
        <div className={styles.outerCircleLine}>
        </div>
        <div className={styles.centerCircle}>EXTERIOR</div>
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
      <div className={styles.galleryMainSlide}>
        <div className={styles.outerCircleLine}>
        </div>
        <div className={styles.centerCircle}>INTERIOR</div>
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
        <div className={styles.leftArrowEnabled}/>
      </div>
      <div className={styles.galleryRightSlide}>
        <div className={styles.outerCircleLine}>
        </div>
        <div className={styles.centerCircle}>MAIN DECK</div>
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
        <div className={styles.rightArrowDisabled}/>
        <div className={styles.leftArrowEnabled}/>
      </div>
    </div>
  </>
)

export default GalleryPage
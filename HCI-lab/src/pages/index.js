import React from "react"

import Layout from "../layouts"
import Image from "../components/image"

import {homePageTexts, images} from "../constants"

import styles from "./index.module.css"

const IndexPage = () => (
  <>
      <div className={styles.titleContainer}>
        <div className={styles.titleImage}>
          <Image name={images.titleImage} isBackground={true}/>
        </div>
        <div className={styles.titleText}>
          {homePageTexts.titleText}
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.contentText1}>
          {homePageTexts.offerText}
        </div>
        <div className={styles.contentText2}>
          {homePageTexts.locationText}
        </div>
        <div className={styles.contentText3}>
          {homePageTexts.motivationText}
        </div>
        <div className={styles.contentImage1}>
          <Image name={images.nightImage} isBackground={false}/>
        </div>
        <div className={styles.contentImage2}>
          <Image name={images.groundPlan} isBackground={false}/>
        </div>
      </div>
      <div className={styles.bannerContainer}>
        <div className={styles.bannerBackground}> 
          <div className={styles.bannerImage1}>
            <Image name={images.krknjasi} isBackground={true}/>
          </div>
          <div className={styles.bannerImage2}>
            <Image name={images.zlatniRat} isBackground={true}/>
          </div>
          <div className={styles.bannerImage3}>
            <Image name={images.sakarun} isBackground={true}/>
          </div>
          <div className={styles.bannerImage4}>
            <Image name={images.palmizana} isBackground={true}/>
          </div>
        </div>
        <div className={styles.bannerText}>
          {homePageTexts.bannerText}
        </div>
      </div>
  </>
)

export default IndexPage

import React from "react"

import Layout from "../layouts"
import Image from "../components/image"

import {homePageTexts, images} from "../constants"

import styles from "./index.module.css"

const IndexPage = () => (
  <>
    <Layout>
      <div className={styles.titleContainer}>
        <div className={styles.titleText}>
          {homePageTexts.titleText}
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.contentText1}>
          {homePageTexts.contentText1}
        </div>
        <div className={styles.contentText2}>
          {homePageTexts.contentText2}
        </div>
        <div className={styles.contentText3}>
          {homePageTexts.contentText3}
        </div>
        <div className={styles.contentImage1}>
          <Image name={images.exterior2} />
        </div>
        <div className={styles.contentImage2}>
          <Image name={images.exterior3} />
        </div>
      </div>
    </Layout>
  </>
)

export default IndexPage

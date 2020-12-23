import React from "react"

import Layout from "../layouts"

import {homePageTexts} from "../constants"

import styles from "./index.module.css"

const IndexPage = () => (
  <>
    <Layout>
      <div className={styles.titleContainer}>
        <div className={styles.titleText}>
          {homePageTexts.titleText}
        </div>
      </div>
    </Layout>
  </>
)

export default IndexPage

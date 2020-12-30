import React from "react"

import Card from '../components/testCard';
import { cardType, images } from "../constants";
import styles from './specs.module.css'

const SpecsPage = () => (
  <div className={styles.container}>
    <div className={styles.gridItem1}>
      <Card header='Technical info'
        image={images.cog} />
    </div>
    <div className={styles.gridItem2}>
      <Card header='Deck & Fly bridge'
        image={images.deck} />
    </div>
    <div className={styles.gridItem3}>
      <Card header='Accomodation'
        image={images.bed} />
    </div>
    <div className={styles.gridItem4}>
      <Card header='Onboard entertainment'
        image={images.entertainment} />
    </div>
    <div className={styles.gridItem5}>
      <Card header='Water sports'
        image={images.jetSki} />
    </div>
  </div>
)

export default SpecsPage
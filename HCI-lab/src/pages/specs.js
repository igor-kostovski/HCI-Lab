import React from "react"

import Card from '../components/card';
import { cardType, images } from "../constants";
import styles from './specs.module.css'

const SpecsPage = () => (
  <div className={styles.container}>
    <div className={styles.gridItem1}>
      <Card header='Technical info'
        image={images.logo}
        cardType={cardType.specs}
        text='test' />
    </div>
    <div className={styles.gridItem2}>
      <Card header='Deck & Fly brigde'
        image={images.logo}
        cardType={cardType.specs}
        text='test' />
    </div>
    <div className={styles.gridItem3}>
      <Card header='Accomodation'
        image={images.logo}
        cardType={cardType.specs}
        text='test' />
    </div>
    <div className={styles.gridItem4}>
      <Card header='Onboard entertainment'
        image={images.logo}
        cardType={cardType.specs}
        text='test' />
    </div>
    <div className={styles.gridItem5}>
      <Card header='Water sports'
        image={images.logo}
        cardType={cardType.specs}
        text='test' />
    </div>
  </div>
)

export default SpecsPage
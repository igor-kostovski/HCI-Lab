import React from "react"

import Card from '../components/card';
import { images, faq } from "../constants";
import styles from './specs.module.css'

const SpecsPage = () => (
  <div className={styles.container}>
    <div className={styles.techInfo}>
      <Card image={images.cog} header='Technical info'>
        {/* TODO: umisto faq napisi tekst iz onog manuala sa trenutne stranice */}
        {faq.answers.answer1}
      </Card>
    </div>
    <div className={styles.deckAndFlyBridge}>
      <Card image={images.deck} header='Deck & Fly bridge'>
        {faq.answers.answer2}
      </Card>
    </div>
    <div className={styles.accomodation}>
      <Card image={images.bed} header='Accomodation'>
        {faq.answers.answer3}
      </Card>
    </div>
    <div className={styles.entertainment}>
      <Card image={images.entertainment} header='Onboard entertainment'>
        {faq.answers.answer4}
      </Card>
    </div>
    <div className={styles.waterSports}>
      <Card image={images.jetSki} header='Water sports'>
        {faq.answers.answer5}
      </Card>
    </div>
  </div>
);

export default SpecsPage
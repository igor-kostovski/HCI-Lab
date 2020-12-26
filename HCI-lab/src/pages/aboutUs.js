import React from "react"
import Card from '../components/card'
import SeparatorBar from "../components/separatorBar"
import { images, cardType, aboutUsSections } from "../constants";
import styles from './style.module.css'
import Layout from "../layouts"


const AboutUsPage = () => (
  <Layout>
    <SeparatorBar text={aboutUsSections.companyInfo} />
    <SeparatorBar text={aboutUsSections.crewMembers} />
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '50%'
    }}>
      <Card image={images.logo}
        header={"Blog Card"}
        cardType={cardType.blog}
        text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}
      />
      <Card header={"Specs Card"}
        image={images.logo}
        cardType={cardType.specs}
        text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
      />
      <Card image={images.logo}
        header={"Crew Card"}
        text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}
      />
      <Card image={images.logo}
        cardType={cardType.info}
        text={"INFO CARD is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}
      />

      <div className={`${styles.blogCard} ${styles.springFever}`}>
        <div className={styles.titleContent}>
          <h3><p>10 inspiring photos</p></h3>
          <div className={styles.intro}> <p>Inspiration</p> </div>
        </div>
        <div className={styles.cardInfo}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim...
      <p>Read Article<span className={`${styles.licon} ${styles.iconArr} ${styles.iconBlack}`}></span></p>
        </div>
        <div className={styles.utilityInfo}>
          <ul className={styles.utilityList}>
            <li><span className={`${styles.licon} ${styles.iconDat}`}></span>03 jun 2017</li>
            <li><span className={`${styles.licon} ${styles.iconTag}`}></span>Photos, Nice</li>
          </ul>
        </div>
        <div className={styles.gradientOverlay}></div>
        <div className={styles.colorOverlay}></div>
      </div>
    </div>
  </Layout>
)

export default AboutUsPage
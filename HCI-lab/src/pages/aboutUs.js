import React from "react"
import Card from '../components/card'
import SeparatorBar from "../components/separatorBar"
import { images, cardType, aboutUsSections, crewPositions, crewInfo } from "../constants";
import styles from './aboutUs.module.css'
import Layout from "../layouts"

const AboutUsPage = () => (
  <Layout>
    <SeparatorBar text={aboutUsSections.companyInfo} />
      <div className={styles.companyInfoContainer}>
        <Card image={images.sailsImage}
            cardType={cardType.info}
            text={"INFO CARD is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}
        />
      </div>
    <SeparatorBar text={aboutUsSections.crewMembers} />
    <div className={styles.crewMembersContainer}>
      <div className={styles.crewMember1}>
        <div className={styles.crewPosition}>
          {crewPositions.captain}
        </div>
        <Card image={crewInfo.captain.foto}
              cardType={cardType.crew}
              header={crewInfo.captain.name}
              shortBio={crewInfo.captain.shortInfo}
              text={crewInfo.captain.longInfo}
        />
      </div>
      <div className={styles.crewMember2}>
        <div className={styles.crewPosition}>
          {crewPositions.motorman}
        </div>
        <Card image={crewInfo.motorman.foto}
              cardType={cardType.crew}
              header={crewInfo.motorman.name}
              shortBio={crewInfo.motorman.shortInfo}
              text={crewInfo.motorman.longInfo}        
        />
      </div>
      <div className={styles.crewMember3}>
        <div className={styles.crewPosition}>
          {crewPositions.chiefStewardess}
        </div>
        <Card image={crewInfo.chiefStewardess.foto}
              cardType={cardType.crew}
              header={crewInfo.chiefStewardess.name}
              shortBio={crewInfo.chiefStewardess.shortInfo}
              text={crewInfo.chiefStewardess.longInfo}        
        />
      </div>
      <div className={styles.crewMember4}>
        <div className={styles.crewPosition}>
         {crewPositions.chefDeCuisine}
        </div>
        <Card image={crewInfo.chefDeCuisine.foto}
              cardType={cardType.crew}
              header={crewInfo.chefDeCuisine.name}
              shortBio={crewInfo.chefDeCuisine.shortInfo}
              text={crewInfo.chefDeCuisine.longInfo}        
        />
      </div>
      <div className={styles.crewMember5}>
        <div className={styles.crewPosition}>
          {crewPositions.sailor}
        </div>
        <Card image={crewInfo.sailor.foto}
              cardType={cardType.crew}
              header={crewInfo.sailor.name}
              shortBio={crewInfo.sailor.shortInfo}
              text={crewInfo.sailor.longInfo}        
        />
      </div>
      <div className={styles.crewMember6}>
        <div className={styles.crewPosition}>
          {crewPositions.stewardess}
        </div>
        <Card image={crewInfo.stewardess.foto}
              cardType={cardType.crew}
              header={crewInfo.stewardess.name}
              shortBio={crewInfo.stewardess.shortInfo}
              text={crewInfo.stewardess.longInfo}        
        />
      </div>
    </div>
  </Layout>
)

export default AboutUsPage
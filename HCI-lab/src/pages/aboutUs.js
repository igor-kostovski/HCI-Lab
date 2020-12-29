import React from "react"
import Card from '../components/card'
import SeparatorBar from "../components/separatorBar"
import { images, cardType, aboutUsSections, crewPositions, crewInfo, aboutUsTexts } from "../constants";
import styles from './aboutUs.module.css'

const AboutUsPage = () => (
  <>
    <SeparatorBar text={aboutUsSections.companyInfo} />
      <div className={styles.companyInfoContainer}>
        <Card image={images.sailsImage}
            cardType={cardType.info}
            text={aboutUsTexts.companyInfo}
        />
      </div>
    <SeparatorBar text={aboutUsSections.crewMembers} />
    <div className={styles.crewMembersContainer}>
      <div className={styles.crewMember1}>
        <div className={styles.crewPosition1}>
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
        <div className={styles.crewPosition2}>
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
        <div className={styles.crewPosition3}>
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
        <div className={styles.crewPosition4}>
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
        <div className={styles.crewPosition5}>
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
        <div className={styles.crewPosition6}>
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
  </>
)

export default AboutUsPage
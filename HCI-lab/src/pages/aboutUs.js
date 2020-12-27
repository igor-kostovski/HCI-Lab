import React from "react"
import Card from '../components/card'
import SeparatorBar from "../components/separatorBar"
import { images, cardType, aboutUsSections } from "../constants";
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
          CAPTAIN
        </div>
        <Card image={images.logo}
              cardType={cardType.crew}
              header={"Crew Card"}
              text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}
        />
      </div>
      <div className={styles.crewMember2}>
        <div className={styles.crewPosition}>
          MOTORMAN
        </div>
        <Card image={images.logo}
              cardType={cardType.crew}
              header={"Crew Card"}
              text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}
        />
      </div>
      <div className={styles.crewMember3}>
        <div className={styles.crewPosition}>
          CHIEF STEWARDESS
        </div>
        <Card image={images.logo}
              cardType={cardType.crew}
              header={"Crew Card"}
              text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}
        />
      </div>
      <div className={styles.crewMember4}>
        <div className={styles.crewPosition}>
          CHEF DE CUISINE
        </div>
        <Card image={images.logo}
              cardType={cardType.crew}
              header={"Crew Card"}
              text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}
        />
      </div>
      <div className={styles.crewMember5}>
        <div className={styles.crewPosition}>
          SAILOR
        </div>
        <Card image={images.logo}
              cardType={cardType.crew}
              header={"Crew Card"}
              text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}
        />
      </div>
      <div className={styles.crewMember6}>
        <div className={styles.crewPosition}>
          STEWARDESS
        </div>
        <Card image={images.logo}
              cardType={cardType.crew}
              header={"Crew Card"}
              text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}
        />
      </div>
    </div>
  </Layout>
)

export default AboutUsPage
import React from "react"
import Card from '../components/card'
import SeparatorBar from "../components/separatorBar"
import { images, cardType, aboutUsSections, crewPositions, crewInfo, aboutUsTexts } from "../constants";
import styles from './aboutUs.module.css'
import InfoCard from "../components/infoCard";

const AboutUsPage = () => (
  <>
    <SeparatorBar text={aboutUsSections.companyInfo} />
    <div className={styles.companyInfoContainer}>
      <InfoCard image={images.sailsImage}
        text={aboutUsTexts.companyInfo}
      />
    </div>
    <SeparatorBar text={aboutUsSections.crewMembers} />
    <div className={styles.crewMembersContainer}>
      <div className={styles.crewMember1}>
        <Card image={crewInfo.captain.foto}
          cardType={cardType.crew}
          header={crewPositions.captain}
          shortBio={crewInfo.captain.shortInfo}>
          {<>
            <div className={styles.label}>Languages:</div> 
            <div className={styles.text}>{crewInfo.captain.shortInfo.languages}</div> 
            <div className={styles.label}>Experience:</div>
            <div className={styles.text}>{crewInfo.captain.shortInfo.experience}</div>
           </>
          }
        </Card>
      </div>
      <div className={styles.crewMember2}>
        <Card image={crewInfo.motorman.foto}
          cardType={cardType.crew}
          header={crewPositions.motorman}
          shortBio={crewInfo.motorman.shortInfo}>
          {<>
            <div className={styles.label}>Languages:</div> 
            <div className={styles.text}>{crewInfo.motorman.shortInfo.languages}</div> 
            <div className={styles.label}>Experience:</div>
            <div className={styles.text}>{crewInfo.motorman.shortInfo.experience}</div>
           </>
          }
        </Card>
      </div>
      <div className={styles.crewMember3}>
        <Card image={crewInfo.chiefStewardess.foto}
          cardType={cardType.crew}
          header={crewPositions.chiefStewardess}
          shortBio={crewInfo.chiefStewardess.shortInfo}>
          {<>
            <div className={styles.label}>Languages:</div> 
            <div className={styles.text}>{crewInfo.chiefStewardess.shortInfo.languages}</div> 
            <div className={styles.label}>Experience:</div>
            <div className={styles.text}>{crewInfo.chiefStewardess.shortInfo.experience}</div>
           </>
          }
        </Card>
      </div>
      <div className={styles.crewMember4}>
        <Card image={crewInfo.chefDeCuisine.foto}
          cardType={cardType.crew}
          header={crewPositions.chefDeCuisine}
          shortBio={crewInfo.chefDeCuisine.shortInfo}>
          {<>
            <div className={styles.label}>Languages:</div> 
            <div className={styles.text}>{crewInfo.chefDeCuisine.shortInfo.languages}</div> 
            <div className={styles.label}>Experience:</div>
            <div className={styles.text}>{crewInfo.chefDeCuisine.shortInfo.experience}</div>
           </>
          }
        </Card>
      </div>
      <div className={styles.crewMember5}>
        <Card image={crewInfo.sailor.foto}
          cardType={cardType.crew}
          header={crewPositions.sailor}
          shortBio={crewInfo.sailor.shortInfo}>
          {<>
            <div className={styles.label}>Languages:</div> 
            <div className={styles.text}>{crewInfo.sailor.shortInfo.languages}</div> 
            <div className={styles.label}>Experience:</div>
            <div className={styles.text}>{crewInfo.sailor.shortInfo.experience}</div>
           </>
          }
        </Card>
      </div>
      <div className={styles.crewMember6}>
        <Card image={crewInfo.stewardess.foto}
          cardType={cardType.crew}
          header={crewPositions.stewardess}
          shortBio={crewInfo.stewardess.shortInfo}>
          {<>
            <div className={styles.label}>Languages:</div> 
            <div className={styles.text}>{crewInfo.stewardess.shortInfo.languages}</div> 
            <div className={styles.label}>Experience:</div>
            <div className={styles.text}>{crewInfo.stewardess.shortInfo.experience}</div>
           </>
          }
        </Card>
      </div>
    </div>
  </>
)

export default AboutUsPage
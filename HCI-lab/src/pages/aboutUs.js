import React from "react"
import Card from '../components/card'
import { images, cardType } from "../constants";

const AboutUsPage = () => (
  <>
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
    </div>
  </>
)

export default AboutUsPage
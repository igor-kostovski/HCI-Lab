import React from "react"
import Card from '../components/card'
import { images, cardStyles } from "../constants";

const AboutUsPage = () => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    height: '50%'
  }}>
    <Card image={images.logo} header={"Ime Prezime"} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."} />
    <Card image={images.logo} cardType={cardType.info} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."} />
    <Card header={"Full of life"} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."} />
  </div>
)

export default AboutUsPage
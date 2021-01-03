import React, {useState, useRef} from "react"

import Slider from "react-slick";
import Rodal from 'rodal/lib/rodal'

import TagBar from "../components/searchTagBar"
import Image from "../components/image"

import { galleryTabs, galleryTabsForTagBar, exteriorImages } from "../constants"

import styles from "./gallery.module.css"
import 'rodal/lib/rodal.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const GalleryPage = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [activeTabName, setActiveTabName] = useState(galleryTabs[0])
  const [rodalOpened, setRodalOpened] = useState(false);
  const [rodalImage, setRodalImage] = useState(0)
  const gallerySlider = useRef(null);

  const updateActiveTabState = (newIndex) => {
    setActiveTabIndex(newIndex);
    setActiveTabName(galleryTabs[newIndex]);
  }

  const galleryTagChange = (clickedTag) => {
    let newIndex = galleryTabsForTagBar.findIndex(tab => tab.title === clickedTag)
    gallerySlider.current.slickGoTo(newIndex)
  }

  const rodalClickHandler = (rodalImage) => {
    setRodalOpened(true);
    setRodalImage(rodalImage);
  }

  const rodalPreviousImage = () => {
    if(rodalImage > 0) {
      setRodalImage(rodalImage - 1)
    }
  }

  const rodalNextImage = () => {
    if(rodalImage < 7) {
      setRodalImage(rodalImage + 1)
    }
  }

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => {updateActiveTabState(newIndex)}
  }

  const rodalStyle = {
    width: "70vw",
    maxWidth: "70vw",
    height: "fit-content",
    maxHeight: "80vh"
  }

  return(
    <>
    <TagBar tags={galleryTabsForTagBar} onTagAction={galleryTagChange} activeTag={activeTabName}/>
    <div className={styles.galleryContainer}>
      <Slider ref={gallerySlider} {...carouselSettings }>
        {galleryTabs.map((galleryTab, index) => (
          <div key={index} className={styles.gallerySlide}>
            <div className={styles.circleLayout}>
              <div className={styles.centerCircle}>{galleryTab}</div>
              <div className={styles.outerCircleLine}></div>
              <div className={styles.topImageCircle} onClick={() => {rodalClickHandler(0)}}>
                <Image name={exteriorImages[0]} isBackground={true} />
              </div>
              <div className={styles.bottomImageCircle} onClick={() => {rodalClickHandler(1)}}>
                <Image name={exteriorImages[1]} isBackground={true} />
              </div>
              <div className={styles.rightImageCircle} onClick={() => {rodalClickHandler(2)}}>
                <Image name={exteriorImages[2]} isBackground={true} />
              </div>
              <div className={styles.leftImageCircle} onClick={() => {rodalClickHandler(3)}}>
                <Image name={exteriorImages[3]} isBackground={true} />
              </div>
              <div className={styles.topRightImageCircle} onClick={() => {rodalClickHandler(4)}}>
                <Image name={exteriorImages[4]} isBackground={true} />
              </div>
              <div className={styles.topLeftImageCircle} onClick={() => {rodalClickHandler(5)}}>
                <Image name={exteriorImages[5]} isBackground={true} />
              </div>
              <div className={styles.bottomRightImageCircle} onClick={() => {rodalClickHandler(6)}}>
                <Image name={exteriorImages[6]} isBackground={true} />
              </div>
              <div className={styles.bottomLeftImageCircle} onClick={() => {rodalClickHandler(7)}}>
                <Image name={exteriorImages[7]} isBackground={true} />
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <Rodal visible={rodalOpened} onClose={() => {setRodalOpened(false)}} customStyles={rodalStyle}>
        <div className={styles.rodalContainer}>
          <div className={rodalImage === 0 ? styles.rodalLeftArrowDisabled : styles.rodalLeftArrowEnabled} onClick={() => {rodalPreviousImage()}} />
          <Image name={exteriorImages[rodalImage]} />
          <div className={rodalImage === 7 ? styles.rodalRightArrowDisabled : styles.rodalRightArrowEnabled} onClick={() => {rodalNextImage()}} />
        </div>
      </Rodal>
    </div>
    </>
  )
}

export default GalleryPage
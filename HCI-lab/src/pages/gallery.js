import React, { useState, useRef } from "react"

import Slider from "react-slick";
import Rodal from 'rodal/lib/rodal'

import TagBar from "../components/searchTagBar"
import Image from "../components/image"

import { galleryTabs, galleryImages, galleryConstants } from "../constants"

import styles from "./gallery.module.css"
import 'rodal/lib/rodal.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const GalleryPage = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(galleryConstants.minImageIndex);
  const [tabs, setTabs] = useState(galleryTabs)
  const [rodalOpened, setRodalOpened] = useState(false);
  const [rodalImage, setRodalImage] = useState(galleryConstants.minImageIndex)
  const gallerySlider = useRef(null);

  const updateActiveTabState = (newIndex) => {
    setActiveTabIndex(newIndex);
    tabs.forEach((tab, index) => tab.isActive = newIndex === index);
    setTabs([...tabs]);
  }

  const galleryTagChange = (clickedTag) => {
    if (clickedTag.isActive === false)
      return;
    let newIndex = galleryTabs.findIndex(tab => tab.title === clickedTag.title);
    gallerySlider.current.slickGoTo(newIndex);
  }

  const rodalClickHandler = (rodalImage) => {
    setRodalOpened(true);
    setRodalImage(rodalImage);
  }

  const rodalPreviousImage = () => {
    if (rodalImage > 0) {
      setRodalImage(rodalImage - 1)
    }
  }

  const rodalNextImage = () => {
    if (rodalImage < 7) {
      setRodalImage(rodalImage + 1)
    }
  }

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => { updateActiveTabState(newIndex) }
  }

  const rodalStyle = {
    width: "70vw",
    maxWidth: "70vw",
    height: "fit-content",
    maxHeight: "80vh"
  }

  const imagePositions = ['topImageCircle', 'bottomImageCircle', 'rightImageCircle', 'leftImageCircle', 'topRightImageCircle',
    'topLeftImageCircle', 'bottomRightImageCircle', 'bottomLeftImageCircle'];

  return (
    <>
      <TagBar tags={tabs} onTagAction={galleryTagChange} />
      <div className={styles.galleryContainer}>
        <Slider ref={gallerySlider} {...carouselSettings}>
          {tabs.map((galleryTab, index) => (
            <div key={index} className={styles.gallerySlide}>
              <div className={styles.circleLayout}>
                <div className={styles.centerCircle}>{galleryTab.title}</div>
                <div className={styles.outerCircleLine}></div>
                {
                  imagePositions.map((name, secondaryIndex) => (

                    <div className={styles[name]} onClick={() => rodalClickHandler(secondaryIndex)}>
                      <Image name={galleryImages[index % 3][secondaryIndex]} isBackground={true} />
                    </div>
                  ))
                }
              </div>
            </div>
          ))}
        </Slider>
        <Rodal visible={rodalOpened} onClose={() => setRodalOpened(false)} customStyles={rodalStyle}>
          <div className={styles.rodalContainer}>
            <div className={rodalImage === galleryConstants.minImageIndex ? styles.rodalLeftArrowDisabled : styles.rodalLeftArrowEnabled} onClick={() => rodalPreviousImage()} />
            <Image name={galleryImages[activeTabIndex % 3][rodalImage]} />
            <div className={rodalImage === galleryConstants.maxImageIndex ? styles.rodalRightArrowDisabled : styles.rodalRightArrowEnabled} onClick={() => rodalNextImage()} />
          </div>
        </Rodal>
      </div>
    </>
  )
}

export default GalleryPage
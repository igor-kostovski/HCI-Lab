import React, {useState, useRef} from "react"

import Slider from "react-slick";

import TagBar from "../components/searchTagBar"

import { galleryTabs, galleryTabsForTagBar } from "../constants"

import styles from "./gallery.module.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GalleryPage = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const gallerySlider = useRef(null);

  const galleryTagChange = (clickedTag) => {
    let newIndex = galleryTabsForTagBar.findIndex(tab => tab.title === clickedTag)
    gallerySlider.current.slickGoTo(newIndex)
  }

  var carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => setActiveTabIndex(newIndex)
  }

  return(
    <>
    <TagBar tags={galleryTabsForTagBar} onTagAction={galleryTagChange}/>
    <div className={styles.galleryContainer}>
      <Slider ref={gallerySlider} {...carouselSettings }>
        {galleryTabs.map((galleryTab, index) => (
          <div key={index} className={styles.gallerySlide}>
            <div className={styles.circleLayout}>
              <div className={styles.centerCircle}>{galleryTab}</div>
              <div className={styles.outerCircleLine}>
              </div>
              <div className={styles.topImageCircle}>
              </div>
              <div className={styles.bottomImageCircle}>
              </div>
              <div className={styles.rightImageCircle}>
              </div>
              <div className={styles.leftImageCircle}>
              </div>
              <div className={styles.topRightImageCircle}>
              </div>
              <div className={styles.topLeftImageCircle}>
              </div>
              <div className={styles.bottomRightImageCircle}>
              </div>
              <div className={styles.bottomLeftImageCircle}>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </>
  )
}

export default GalleryPage
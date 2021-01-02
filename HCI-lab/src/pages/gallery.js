import React, {useState, useRef} from "react"

import Slider from "react-slick";

import TagBar from "../components/searchTagBar"
import Image from "../components/image"

import { galleryTabs, galleryTabsForTagBar, exteriorImages } from "../constants"

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
              <div className={styles.outerCircleLine}></div>
              <div className={styles.topImageCircle}>
                <Image name={exteriorImages[0]} isBackground={true} />
              </div>
              <div className={styles.bottomImageCircle}>
                <Image name={exteriorImages[1]} isBackground={true} />
              </div>
              <div className={styles.rightImageCircle}>
                <Image name={exteriorImages[2]} isBackground={true} />
              </div>
              <div className={styles.leftImageCircle}>
                <Image name={exteriorImages[3]} isBackground={true} />
              </div>
              <div className={styles.topRightImageCircle}>
                <Image name={exteriorImages[4]} isBackground={true} />
              </div>
              <div className={styles.topLeftImageCircle}>
                <Image name={exteriorImages[5]} isBackground={true} />
              </div>
              <div className={styles.bottomRightImageCircle}>
                <Image name={exteriorImages[6]} isBackground={true} />
              </div>
              <div className={styles.bottomLeftImageCircle}>
                <Image name={exteriorImages[7]} isBackground={true} />
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
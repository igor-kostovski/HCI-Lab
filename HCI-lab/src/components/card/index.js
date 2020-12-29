import React, { useState } from 'react';
import PropTypes from 'prop-types';

import blogStyle from "./blog.module.css"
import crewStyle from "./crew.module.css"
import infoStyle from "./info.module.css"
import specsStyle from "./specs.module.css"
import Image from '../image';
import { cardType as cardTypes, crewInfo, buttonTexts } from '../../constants';

const getStylesFor = (card) => {
    switch (card) {
        case cardTypes.blog:
            return blogStyle;

        case cardTypes.crew:
            return crewStyle;

        case cardTypes.info:
            return infoStyle;

        case cardTypes.specs:
            return specsStyle;

        default:
            return crewStyle;
    }
}

const Card = ({ header, text, image, cardType, shortBio }) => {
    const [isExpanded, setIsExpanded] = useState(false)

    const onClickMoreInfo = () => {
        setIsExpanded(!isExpanded);
    }

    const styles = getStylesFor(cardType);

    return (
        <div className={styles.card}>
            {cardType!==cardTypes.crew && <>
                                            {image && <Image className={styles.image} name={image} />}
                                            <div className={styles.container}>
                                                <h4 className={styles.header}>
                                                    {header}
                                                </h4>
                                                <p className={styles.text}>{text}</p>
                                            </div>
                                          </>
            }
            {cardType===cardTypes.crew && <> 
                                            <div className={styles.contentContainer}>
                                                <div className={isExpanded ? styles.imageTitleTextMoved : styles.imageTitleText}>
                                                    {image && <Image className={styles.image} name={image} />}
                                                    <div className={styles.container}>
                                                        <h4 className={styles.header}>
                                                            {header}
                                                        </h4>
                                                        <ul className={styles.shortBio}>
                                                            <li>{crewInfo.labels.dateOfBirth} {shortBio.dateOfBirth}</li>
                                                            <li>{crewInfo.labels.languages} {shortBio.languages}</li>
                                                            <li>{crewInfo.labels.experience} {shortBio.experience}</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className={isExpanded ? styles.moreInfoContainerShown : styles.moreInfoContainerHidden}>
                                                    <div className={styles.moreInfoTitle}>
                                                        {header}
                                                    </div> 
                                                    <div className={styles.moreInfoText}>
                                                        {text}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles.moreInfoButton}>
                                                <div className={isExpanded ? styles.hideInfoButtonText : styles.moreInfoButtonText} onClick={() => onClickMoreInfo()}>
                                                    {isExpanded ? buttonTexts.hide : buttonTexts.show}
                                                </div>
                                            </div>
                                          </>
            }
        </div>
    );
}

Card.propTypes = {
    header: PropTypes.string,
    text: PropTypes.string.isRequired,
    image: PropTypes.string,
    cardType: PropTypes.number,
    shortBio: PropTypes.object
}

export default Card;
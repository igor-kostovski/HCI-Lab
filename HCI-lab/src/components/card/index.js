import React, { useState } from 'react';
import PropTypes from 'prop-types';

import blogStyle from "./blog.module.css"
import crewStyle from "./crew.module.css"
import infoStyle from "./info.module.css"
import specsStyle from "./specs.module.css"
import Image from '../image';
import { cardType as cardTypes } from '../../constants';

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

const Card = ({ header, text, image, cardType }) => {
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
                                                        <p className={styles.text}>{text}</p>
                                                    </div>
                                                </div>
                                                <div className={isExpanded ? styles.moreInfoContainerShown : styles.moreInfoContainerHidden}>
                                                    <div className={styles.moreInfoTitle}>
                                                        LUKA PODRUG
                                                    </div> 
                                                    <div className={styles.moreInfoText}>
                                                        LOREM IPSUM DOLOREM SIT AMET LOREM IPSUM DOLEROA AFGSDFWE
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles.moreInfoButton}>
                                                <div className={isExpanded ? styles.hideInfoButtonText : styles.moreInfoButtonText} onClick={() => onClickMoreInfo()}>
                                                    {isExpanded ? "HIDE INFO" : "MORE INFO"}
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
    cardType: PropTypes.number
}

export default Card;
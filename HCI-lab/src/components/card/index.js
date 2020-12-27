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
        console.log(this)
        setIsExpanded(!isExpanded);
    }

    const styles = getStylesFor(cardType);

    return (
        <div className={styles.card}>
            {image && <Image className={styles.image} name={image} />}
            <div className={styles.container}>
                <h4 className={styles.header}>
                    {header}
                </h4>
                <p className={styles.text}>{text}</p>
            </div>
            {cardType===cardTypes.crew && <div className={styles.moreInfoContainer}>
                            <div className={styles.expandContainer}>
                                <div className={isExpanded ? styles.moreInfoTextExpanded : styles.moreInfoText}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                </div>
                            </div>
                            <div className={styles.moreInfoButton}>
                                <div className={styles.moreInfoButtonText} onClick={() => onClickMoreInfo()}>
                                    MORE INFO
                                </div>
                            </div>
                          </div>}
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
import React from 'react';
import PropTypes from 'prop-types';

import blogStyle from "./blog.module.css"
import crewStyle from "./crew.module.css"
import infoStyle from "./info.module.css"
import specsStyle from "./specs.module.css"
import Image from '../image';
import { cardType } from '../../constants';

const getStylesFor = (card) => {
    switch (card) {
        case cardType.blog:
            return blogStyle;

        case cardType.crew:
            return crewStyle;

        case cardType.info:
            return infoStyle;

        case cardType.specs:
            return specsStyle;

        default:
            return crewStyle;
    }
}

const Card = ({ header, text, image, cardType }) => {
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
import React from 'react';
import PropTypes from 'prop-types';

import blogStyle from "./blog.module.css"
import crewStyle from "./crew.module.css"
import infoStyle from "./info.module.css"
import specsStyle from "./specs.module.css"
import Image from '../image';
import { cardStyles } from '../../constants';

const Card = ({ header, text, image, cardStyle }) => {
    let styles;

    switch (cardStyle) {
        case cardStyles.blog: styles = blogStyle; break;
        case cardStyles.crew: styles = crewStyle; break;
        case cardStyles.info: styles = infoStyle; break;
        case cardStyles.specs: styles = specsStyle; break;
        default: styles = crewStyle;
    }

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
    image: PropTypes.string
}

export default Card;
import React from 'react';
import PropTypes from 'prop-types';

import styles from "./style.module.css"
import Image from '../image';

const Card = ({ header, text, image }) => {
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
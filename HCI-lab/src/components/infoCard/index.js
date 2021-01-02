import React from 'react';
import PropTypes from 'prop-types';

import Image from '../image';

import styles from './style.module.css';

const InfoCard = ({ image, text }) => {
    return (
        <div className={styles.card}>
            <div className={styles.container}>
                <p className={styles.text}>{text}</p>
            </div>
            <Image className={styles.image} name={image} />
        </div>
    );
}

InfoCard.propTypes = {
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default InfoCard;
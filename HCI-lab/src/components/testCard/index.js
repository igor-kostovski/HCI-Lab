import React from 'react';
import PropTypes from 'prop-types';

import Image from '../image';
import styles from './style.module.css';

const Card = ({ header, image }) => {

    return (
        <div className={styles.card}>
            {image && <Image className={styles.image} name={image} />}
            <h4 className={styles.header}>
                {header}
            </h4>
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
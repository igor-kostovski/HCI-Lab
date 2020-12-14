import React from 'react';
import PropTypes from 'prop-types';

import styles from "./style.module.css"

const Card = ({ header, text, children: image }) => {
    return (
        <div className={styles.card}>
            <div style={{ width: '200px', transition: 'transform 0.2s' }}>
                {image}
            </div>
            <div className={styles.container}>
                <h4><b>{header}</b></h4>
                <p>{text}</p>
            </div>
        </div>
    );
}

Card.propTypes = {
    header: PropTypes.string,
    text: PropTypes.string.isRequired
}

export default Card;
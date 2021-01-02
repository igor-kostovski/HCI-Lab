import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Image from '../image';
import styles from './style.module.css';

const Card = ({ header, image, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.card} onClick={() => setIsOpen(!isOpen)}>
            <div className={styles.info}>
                {image && <Image className={styles.image} name={image} />}
                <h4 className={styles.header}>
                    {header}
                </h4>
                {children}
            </div>
        </div>
    );
}

Card.propTypes = {
    header: PropTypes.string,
    image: PropTypes.string
}

export default Card;
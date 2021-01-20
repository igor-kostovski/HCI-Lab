import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './style.module.css';
import Image from '../image';

const Card = ({ header, children, image, shortBio }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className={styles.card} onClick={() => setIsExpanded(!isExpanded)}>
            <div className={styles.contentContainer}>
                <div className={isExpanded ? styles.imageTitleTextMoved : styles.imageTitleText}>
                    <Image className={shortBio ? styles.roundedImage : styles.image} name={image} />
                    <div className={styles.container}>
                        <h4 className={styles.header}>
                            {header}
                        </h4>
                    </div>
                </div>
                <div className={isExpanded ? styles.moreInfoContainerShown : styles.moreInfoContainerHidden}>
                    <div className={styles.moreInfoTitle}>
                        {header}
                    </div>
                    <div className={styles.moreInfoText}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

Card.propTypes = {
    header: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    shortBio: PropTypes.object
}

export default Card;
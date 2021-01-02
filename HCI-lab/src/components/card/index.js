import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './style.module.css';
import Image from '../image';
import { crewInfo, buttonTexts } from '../../constants';

const Card = ({ header, text, image, shortBio }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className={styles.card}>
            <div className={styles.contentContainer}>
                <div className={isExpanded ? styles.imageTitleTextMoved : styles.imageTitleText}>
                    <Image className={styles.image} name={image} />
                    <div className={styles.container}>
                        <h4 className={styles.header}>
                            {header}
                        </h4>
                        {shortBio && <ul className={styles.shortBio}>
                            <li>{crewInfo.labels.dateOfBirth} {shortBio.dateOfBirth}</li>
                            <li>{crewInfo.labels.languages} {shortBio.languages}</li>
                            <li>{crewInfo.labels.experience} {shortBio.experience}</li>
                        </ul>
                        }
                    </div>
                </div>
                <div className={isExpanded ? styles.moreInfoContainerShown : styles.moreInfoContainerHidden}>
                    <div className={styles.moreInfoTitle}>
                        {header}
                    </div>
                    <div className={styles.moreInfoText}>
                        {text}
                    </div>
                </div>
            </div>
            <div className={styles.moreInfoButton}>
                <div className={isExpanded ? styles.hideInfoButtonText : styles.moreInfoButtonText} onClick={() => setIsExpanded(!isExpanded)}>
                    {isExpanded ? buttonTexts.hide : buttonTexts.show}
                </div>
            </div>
        </div>
    );
}

Card.propTypes = {
    header: PropTypes.string,
    text: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    shortBio: PropTypes.object
}

export default Card;
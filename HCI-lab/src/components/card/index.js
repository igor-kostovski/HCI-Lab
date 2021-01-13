import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './style.module.css';
import Image from '../image';
import { crewInfo, buttonTexts } from '../../constants';

const Card = ({ header, children, image, shortBio }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className={styles.card}>
            <div className={styles.contentContainer}>
                <div className={isExpanded ? styles.imageTitleTextMoved : styles.imageTitleText}>
                    <Image className={shortBio ? styles.roundedImage : styles.image} name={image} />
                    <div className={styles.container}>
                        <h4 className={styles.header}>
                            {header}
                        </h4>
                        {shortBio && <ul className={styles.shortBio}>
                            <li className={styles.dateOfBirthLabel}>{crewInfo.labels.dateOfBirth}</li>
                            <li className={styles.dateOfBirthValue}>{shortBio.dateOfBirth}</li>
                            <li className={styles.languagesLabel}>{crewInfo.labels.languages}</li>
                            <li className={styles.languagesValue}>{shortBio.languages}</li>
                            <li className={styles.experienceLabel}>{crewInfo.labels.experience}</li>
                            <li className={styles.experienceValue}>{shortBio.experience}</li>
                        </ul>
                        }
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
            <div className={styles.moreInfoButton}>
                <div className={isExpanded ? styles.hideInfoButtonText : styles.moreInfoButtonText} onClick={() => setIsExpanded(!isExpanded)}>
                    {isExpanded ? buttonTexts.hide : buttonTexts.show}
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
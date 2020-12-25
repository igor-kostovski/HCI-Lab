import React, { useState } from 'react';

import styles from './style.module.css'

const Tag = ({ title, action }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleOnClick = () => {
        setIsClicked(!isClicked);
        action();
    }

    const getStyle = () => {
        let style = `${styles.btn}`;

        if (isClicked) {
            style += ` ${styles.clicked}`;
        } else {
            style += ` ${styles.effect}`;
        }

        return style;
    }

    return (
        <button onClick={handleOnClick} className={getStyle()}>
            {title}
        </button>
    );
}

export default Tag;
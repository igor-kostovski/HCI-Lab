import React, { useState, useEffect } from 'react';

import styles from './style.module.css'

const Tag = ({ title, action, activeTag }) => {
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        if(activeTag === title) {
            setIsClicked(true);
        } 
        else {
            setIsClicked(false);
        }
    })

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
        <button onClick={() => action(title)} className={getStyle()}>
            {title}
        </button>
    );
}

export default Tag;
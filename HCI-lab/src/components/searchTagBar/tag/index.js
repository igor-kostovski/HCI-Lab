import React from 'react';

import styles from './style.module.css'

const Tag = ({ title, action, isActive }) => {

    const getStyle = () => {
        let style = `${styles.btn}`;

        if (isActive) {
            style += ` ${styles.clicked}`;
        } else {
            style += ` ${styles.effect}`;
        }

        return style;
    }

    return (
        <button onClick={() => action({ title, isActive: !isActive })} className={getStyle()}>
            {title}
        </button>
    );
}

export default Tag;
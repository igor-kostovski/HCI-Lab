import React from 'react';

import styles from './style.module.css'

// tags, date, title, text, subtitle, link
const BlogCard = ({ post }) => {
    console.log(post);
    return (
        <div className={`${styles.blogCard} ${styles.springFever}`}>
            <div className={styles.titleContent}>
                <h3>{post.title}</h3>
                <div className={styles.intro}>
                    <p>{post.subtitle}</p>
                </div>
            </div>
            <div className={styles.cardInfo}>
                {post.text}
                <p>
                    Read Article
                    <span className={`${styles.licon} ${styles.iconArr} ${styles.iconBlack}`}></span>
                </p>
            </div>
            <div className={styles.utilityInfo}>
                <ul className={styles.utilityList}>
                    <li><span className={`${styles.licon} ${styles.iconDat}`}></span>{post.date}</li>
                    <li><span className={`${styles.licon} ${styles.iconTag}`}></span>{post.tags.join(', ')}</li>
                </ul>
            </div>
            <div className={styles.gradientOverlay}></div>
            <div className={styles.colorOverlay}></div>
        </div>
    );
}

export default BlogCard;
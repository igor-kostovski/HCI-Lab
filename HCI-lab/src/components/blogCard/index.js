import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.module.css'
import Image from '../image';

const BlogCard = ({ post, imageName }) => {
    return (
        <div className={`${styles.blogCard} ${styles.springFever}`}>
            <Image isBackground={true} name={imageName} />
            <div className={styles.titleContent}>
                <h3>{post.title}</h3>
            </div>
            <div className={styles.cardInfo}>
                {post.text}
                <a href={post.link} target='blank'>
                    More Info
                    <span className={`${styles.licon} ${styles.iconArr} ${styles.iconBlack}`}></span>
                </a>
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

BlogCard.propTypes = {
    post: PropTypes.object.isRequired
}

export default BlogCard;
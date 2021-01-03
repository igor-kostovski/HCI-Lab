import React from 'react';
import Tag from './tag';
import SearchBar from './search';

import styles from './style.module.css';

const SearchTagBar = ({ tags, onTagAction, onSearchAction, activeTag }) => {

    return (
        <div className={styles.container}>
            <div className={styles.tags}>
                {tags.map((tag, index) => (<Tag key={`${index}.tag`} title={tag.title} action={onTagAction} activeTag={activeTag} />))}
            </div>
            {onSearchAction && 
                <div className={styles.search}>
                    <SearchBar action={onSearchAction} />
                </div>
            }
        </div>
    )
}

export default SearchTagBar;
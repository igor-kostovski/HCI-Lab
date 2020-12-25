import React from 'react';
import Tag from '../tag';
import SearchBar from '../searchBar';

import styles from './style.module.css';

const SearchTagBar = ({ tags, onTagAction, onSearchAction }) => {

    return (
        <div className={styles.container}>
            <div className={styles.tags}>
                {tags.map(tag => (<Tag title={tag.title} action={onTagAction} />))}
            </div>
            <div className={styles.search}>
                <SearchBar action={onSearchAction} />
            </div>
        </div>
    )
}

export default SearchTagBar;
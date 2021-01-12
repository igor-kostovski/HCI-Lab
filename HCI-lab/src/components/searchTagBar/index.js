import React from 'react';
import Tag from './tag';
import SearchBar from './search';

import styles from './style.module.css';

const SearchTagBar = ({ tags, onTagAction, onSearchAction, onClearAction }) => {

    return (
        <div className={styles.container}>
            <div className={styles.tags}>
                {
                    tags.map((tag, index) => (
                        <Tag key={`${index}.tag`}
                            title={tag.title}
                            action={onTagAction}
                            isActive={tag.isActive} />
                    ))
                }
            </div>
            {onSearchAction &&
                <div className={styles.search}>
                    <SearchBar action={onSearchAction} />
                </div>
            }
            {
                onClearAction &&
                <div className={styles.clear}>
                    <button className={styles.clearBtn} onClick={onClearAction}>X</button>
                </div>
            }
        </div>
    )
}

export default SearchTagBar;
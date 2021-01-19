import React, { useState } from 'react';
import Tag from './tag';
import SearchBar from './search';

import styles from './style.module.css';

const SearchTagBar = ({ tags, onTagAction, onSearchAction, onClearAction }) => {
    const [activeSearchTags, setActiveSearchTags] = useState(false)

    const updateSearchTagsActivity = (value) => {
        setActiveSearchTags(value)
    }

    return (
        <div className={styles.container}>
            <div className={styles.tags}>
                {
                    tags.map((tag, index) => {
                        if(tag.isActive === true && activeSearchTags === false) {
                            setActiveSearchTags(true)
                        } 
                        return (
                            <Tag key={`${index}.tag`}
                                title={tag.title}
                                action={onTagAction}
                                resetButtonAction={updateSearchTagsActivity}
                                isActive={tag.isActive} />
                        )
                    })
                }
            </div>
            {onSearchAction &&
                <div className={styles.search}>
                    <SearchBar action={onSearchAction} resetButtonAction={updateSearchTagsActivity} />
                </div>
            }
            {
                onClearAction && 
                    <div className={styles.clear}>
                        <button className={activeSearchTags ? styles.clearBtn : styles.clearBtnDisabled} onClick={() => {onClearAction(); setActiveSearchTags(false)}}>
                            Reset
                        </button>
                    </div>
            }
        </div>
    )
}

export default SearchTagBar;
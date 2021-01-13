import React from 'react';
import Tag from './tag';
import SearchBar from './search';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
                    <Button className={styles.clearBtn} variant="contained" color="secondary" className={styles.clearBtn} onClick={onClearAction}>
                        Remove
                    </Button>
                </div>
            }
        </div>
    )
}

export default SearchTagBar;
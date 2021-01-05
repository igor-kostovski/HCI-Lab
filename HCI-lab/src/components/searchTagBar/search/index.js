import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css'

const onEnter = ({ charCode, target: { value } }, searchAction) => {
    if (charCode === 13) {
        //maybe we can use debounce instead on char code and search immediately after user stops writing (setting optimal offset from last key stroke)
        searchAction(value);
    }
}

const SearchBar = ({ action }) => {
    return (
        <input className={styles.searchInput}
            type="text"
            placeholder="Search"
            onKeyPress={(event) => onEnter(event, action)} />
    );
}

SearchBar.propTypes = {
    action: PropTypes.func.isRequired
}

export default SearchBar;
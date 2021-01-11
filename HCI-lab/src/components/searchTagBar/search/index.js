import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

import _ from 'lodash';


const onEnter = ({ charCode, target: { value } }, searchAction) => {
    let wait = 350;
    if (charCode === 13) {
        wait = 0;
    }

    _.debounce(() => searchAction(value), wait)();
}

const SearchBar = ({ action }) => {
    return (
        <input className={styles.searchInput}
            type="text"
            placeholder="Search"
            onKeyUp={(event) => onEnter(event, action)} />
    );
}

SearchBar.propTypes = {
    action: PropTypes.func.isRequired
}

export default SearchBar;
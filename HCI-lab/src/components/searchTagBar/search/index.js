import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

import _ from 'lodash';

const onType = ({ charCode, target: { value } }, searchAction, resetButtonAction) => {
    let wait = 350;
    if (charCode === 13) {
        wait = 0;
    }

    if(value !== '') {
        resetButtonAction(true)
    }
    else {
        resetButtonAction(false)
    }

    _.debounce(() => searchAction(value), wait)();
}

const SearchBar = ({ action, resetButtonAction }) => {
    return (
        <input id="#hackyInput" className={styles.input} autoComplete="off" onKeyUp={(event) => onType(event, action, resetButtonAction)}/>
    );
}

SearchBar.propTypes = {
    action: PropTypes.func.isRequired
}

export default SearchBar;
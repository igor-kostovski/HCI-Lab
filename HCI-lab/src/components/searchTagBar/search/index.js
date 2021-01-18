import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

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
        <TextField id="#hackyInput" label="Search" type="text" variant="outlined" autocomplete="off" onKeyUp={(event) => onType(event, action, resetButtonAction)}/>
    );
}

SearchBar.propTypes = {
    action: PropTypes.func.isRequired
}

export default SearchBar;
import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import _ from 'lodash';

const onType = ({ charCode, target: { value } }, searchAction) => {
    let wait = 350;
    if (charCode === 13) {
        wait = 0;
    }

    _.debounce(() => searchAction(value), wait)();
}

const SearchBar = ({ action }) => {
    return (
        <TextField id="#hackyInput" label="Search" type="text" variant="outlined" autocomplete="off" onKeyUp={(event) => onType(event, action)}/>
    );
}

SearchBar.propTypes = {
    action: PropTypes.func.isRequired
}

export default SearchBar;
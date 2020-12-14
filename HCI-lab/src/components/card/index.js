import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {

    return (
        <div>
            <h1>{props.header}</h1>
            <p>{props.text}</p>
            <img alt={props.image} />
        </div>
    )
}

Card.propTypes = {
    header: PropTypes.string,
    text: PropTypes.string,
    image: PropTypes.string
}

export default Card;
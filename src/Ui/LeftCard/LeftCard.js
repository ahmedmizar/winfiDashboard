import React from 'react';
import PropTypes from 'prop-types';
import "./LeftCard.scss"
 
const leftCard = (props) => {
    return (
        <div className="left">
            {props.children}
        </div>
    );
}
 
leftCard.propTypes = {};
 
export default leftCard;
import React from 'react';
import PropTypes from 'prop-types';
import "./RightCard.scss" 
const rightCard = (props) => {
    return (
        <div className="right">
            {props.children}
        </div>
    );
}
 
rightCard.propTypes = {};
 
export default rightCard;
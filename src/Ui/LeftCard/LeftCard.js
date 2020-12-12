import React from 'react';
import { connect } from "react-redux"
import "./LeftCard.scss"

const leftCard = (props) => {
    return (
        <div className="left" style={{ backgroundColor: `${props.data.displayColor}` }}>
            <img src={require("../../assests/images/Costa_logo.png")} />
            <p>{props.data.displayDesc}</p>
        </div>
    );
}

const mapStateToProps = (state) => {

    return {
        data: state.brandData.brandData
    }
}

export default connect(mapStateToProps)(leftCard);
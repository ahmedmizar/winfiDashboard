import React, { Component } from "react";
import { Row, Col } from "antd";
import { connect } from "react-redux";

import Card from "../../Ui/Card/Card";
import "./Welcome.scss";
import { Link } from "react-router-dom";
class Welcome extends Component {
  render() {
    const { userName } = this.props;

    console.log(userName);
    return (
      <div className="welcome">
        <div className="container">
          <Row>
            <Col xs={24} xl={12}>
              <Card>
                <div className="content_container">
                  <h3>مرحبا، {userName}</h3>
                  <p>أجب على الاستبيان الاتي</p>
                </div>
                <div className="bottom_form">
                  <Link className="next-button" to="/questionnaireOne">
                    إبدأ الان
                  </Link>
                </div>
              </Card>
            </Col>
            <Col xs={24} xl={12} className="image_container">
              <img src={require("../../assests/images/signup_img_1.jpg")} />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    userName: state.register.studentData.user_name,
  };
};

export default connect(mapStateToProps)(Welcome);

import React, { Component } from "react";
import { Row, Col, Button } from "antd";
import { Link } from "react-router-dom";
import Card from "../../Ui/Card/Card";
import "./SocialRegistraion.scss";
class SocialRegistration extends Component {
  render() {
    return (
      <div className="social_egistration">
        <div className="container">
          <Row>
            <Col xs={24} xl={12}>
              <Card>
                <div className="content_container">
                  <img src={require("../../assests/Icons/2x/logo_nav.png")} />
                  <h3>قم بالتسجيل</h3>
                  <p>مع نخبة من المحاضرين المتخصصين</p>
                  <div className="social_btn">
                    <Button className="socialbtn">
                      <img
                        src={require("../../assests/Icons/2x/facebook.png")}
                      />
                    </Button>
                    <Button className="socialbtn">
                      <img
                        className="google-img"
                        src={require("../../assests/Icons/2x/google.png")}
                      />
                    </Button>
                  </div>
                  <p className="or">أو</p>
                  <Link to="/registeration" className="register-now">
                    سجل حساب جديد
                  </Link>
                  <Link to="/signIn" className="login-btn">
                    لديك حساب بالفعل, قم بـ <span>الدخول</span>
                  </Link>
                </div>
              </Card>
            </Col>
            <Col xs={24} xl={12} className="image_container">
              <img src={require("../../assests/images/signup_img_2.jpg")} />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default SocialRegistration;

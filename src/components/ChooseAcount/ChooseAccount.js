import React, { Component } from "react";
import { Row, Col, Radio } from "antd";
import { Link } from "react-router-dom";
import Card from "../../Ui/Card/Card";
import "./ChooseAccount.scss";

const active = {
  border: "2px solid #25B28F",
  color: "#25B28F",
};
class ChooseAccount extends Component {
  state = {
    value: "",
    active: null,
  };
  onChange = (e) => {
    console.log("radio checked", e.target.value);
    this.setState({
      value: e.target.value,
      active: active,
    });
  };

  render() {
    const { value, active } = this.state;

    return (
      <div className="choose_account">
        <div className="container">
          <Row>
            <Col xs={24} xl={12}>
              <Card>
                <div className="content_container">
                  <div className="top_card">
                    <h3>قم باختيار</h3>
                    <p>نوع حسابك لاستكمال البيانات</p>
                    <div className="redio-container">
                      <Radio.Group onChange={this.onChange} value={value}>
                        <Radio value={1} style={value == 1 ? active : null}>
                          محاضر
                        </Radio>

                        <Radio value={2} style={value == 2 ? active : null}>
                          طالب
                        </Radio>
                      </Radio.Group>
                    </div>
                  </div>
                  <div className="bottom_card">
                      <Link to="/" className="prev-button">عودة</Link>
                      <Link to={value == 2 ? '/SocialRegistraion' : "/chooseAccount"}  className="next-button">التالي</Link>
                  </div>
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

export default ChooseAccount;

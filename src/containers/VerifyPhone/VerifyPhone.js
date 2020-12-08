import React, { Component } from "react";
import { Row, Col, Button, Input, Form, Alert, Spin } from "antd";
import { connect } from "react-redux";
import { verifyPhone } from "../../appRedux/actions/VerifyPhone";
import { history } from "../../appRedux/store/index";
import { alertActions } from "../../appRedux/actions/AlertActions";
import Card from "../../Ui/Card/Card";
import "./VerifyPhone.scss";
class VerifyPhone extends Component {
  constructor(props) {
    super(props);
    history.listen((location, action) => {
      this.props.clearAlerts();
    });
    this.textInput1 = React.createRef();
    this.textInput2 = React.createRef();
    this.textInput3 = React.createRef();
    this.textInput4 = React.createRef();
    this.textInput5 = React.createRef();
    this.textInput6 = React.createRef();
    this.state = {
      verifyPhoneCode: [],
      finalCode: "",
    };
  }

  componentDidMount() {
    this.textInput1.current.focus();
  }
  handleSubmit = () => {
    const { verifyPhoneCode } = this.state;
    this.setState({ finalCode: verifyPhoneCode.join("") });
    this.props.verifyPhone(
      this.state.finalCode,
      this.props.location.state.phone_code_id,
      this.props.location.state.phone
    );

    if (this.props.verified) {
      this.props.history.push("/welcome");
    }
  };

  changeNumbers(index, val) {
    const { verifyPhoneCode } = this.state;
    let result = verifyPhoneCode;
    result[index] = val;
    console.log(index);

    if (index == 5 && val.length > 0) {
      this.textInput2.current.focus();
    }
    if (index == 4 && val.length > 0) {
      this.textInput3.current.focus();
    }
    if (index == 3 && val.length > 0) {
      this.textInput4.current.focus();
    }
    if (index == 2 && val.length > 0) {
      this.textInput5.current.focus();
    }
    if (index == 1 && val.length > 0) {
      this.textInput6.current.focus();
    }
    // let ref = () => this.textInput(index + 1);
    this.setState({ verifyPhoneCode: result });
  }

  render() {
    const { verifyPhoneCode } = this.state;
    const { alert, phoneStatus } = this.props;
    console.log(this.props.verified, "verifyDataverifyDataverifyData");
    return (
      <div className="verify_phone">
        {alert.message && (
          <Alert message={alert.message} type={alert.type} showIcon />
        )}
        <div className="container">
          <Row>
            <Col xs={24} xl={12}>
              <Card>
                <div className="content_container">
                  <h3>تأكيد رقم الجوال</h3>
                  <p>استخدم الرمز المعروض على جهازك</p>
                </div>
                <div className="form-container">
                  <Form onFinish={this.handleSubmit}>
                    <div className="top_form">
                      <Form.Item
                        rules={[
                          { minmax: 1, message: "Please input one number" },
                        ]}
                      >
                        <Input
                          onChange={(e) =>
                            this.changeNumbers(0, e.target.value)
                          }
                          value={verifyPhoneCode[0]}
                          ref={this.textInput6}
                        />
                      </Form.Item>
                      <Form.Item>
                        <Input
                          onChange={(e) =>
                            this.changeNumbers(1, e.target.value)
                          }
                          value={verifyPhoneCode[1]}
                          ref={this.textInput5}
                        />
                      </Form.Item>
                      <Form.Item
                        rules={[
                          {
                            required: true,
                            message: "Please input your username!",
                          },
                        ]}
                      >
                        <Input
                          onChange={(e) =>
                            this.changeNumbers(2, e.target.value)
                          }
                          value={verifyPhoneCode[2]}
                          ref={this.textInput4}
                        />
                      </Form.Item>
                      <Form.Item>
                        <Input
                          onChange={(e) =>
                            this.changeNumbers(3, e.target.value)
                          }
                          value={verifyPhoneCode[3]}
                          ref={this.textInput3}
                        />
                      </Form.Item>
                      <Form.Item>
                        <Input
                          onChange={(e) =>
                            this.changeNumbers(4, e.target.value)
                          }
                          value={verifyPhoneCode[4]}
                          ref={this.textInput2}
                        />
                      </Form.Item>
                      <Form.Item>
                        <Input
                          onChange={(e) =>
                            this.changeNumbers(5, e.target.value)
                          }
                          value={verifyPhoneCode[5]}
                          ref={this.textInput1}
                        />
                      </Form.Item>
                    </div>
                    <div className="bottom_form">
                      <Button className="next-button" htmlType="submit">
                        تسجيل
                      </Button>
                    </div>
                  </Form>
                </div>
              </Card>
            </Col>
            <Col xs={24} xl={12} className="image_container">
              <img src={require("../../assests/images/signup_img_5.jpg")} />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
const mapDispachToProps = (dispach) => {
  return {
    verifyPhone: (verify_phone_code, phone_code_id, phone) =>
      dispach(verifyPhone(verify_phone_code, phone_code_id, phone)),
    clearAlerts: () => dispach(alertActions.clear),
  };
};
const mapStateToProps = (state) => {
  console.log(state);
  return {
    alert: state.alert,
    verified: state.verifyData.verified,
  };
};

export default connect(mapStateToProps, mapDispachToProps)(VerifyPhone);

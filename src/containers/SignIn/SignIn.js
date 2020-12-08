import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../appRedux/actions/SignIn";
import { Form, Input, Button, Checkbox, Row, Col, Alert } from "antd";
import { history } from "../../appRedux/store/index";
import { Link } from "react-router-dom";
import Card from "../../Ui/Card/Card";
import "./SignIn.scss";
import { alertActions } from "../../appRedux/actions/AlertActions";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

class SignIn extends Component {
  constructor(props) {
    super(props);

    history.listen((location, action) => {
      this.props.clearAlerts();
    });
  }
  state = {
    email: "",
    password: "",
    isLogin: false,
  };

  onFinish = (values) => {
    console.log("Success:", values);
    this.props.signIn(values);
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    this.props.signIn(errorInfo);
  };
  componentDidUpdate() {
    if (this.props.token) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    const { alert } = this.props;

    return (
      <div className="signIn">
        {alert.message && (
          <Alert message={alert.message} type={alert.type} showIcon />
        )}
        <div className="container">
          <Row>
            <Col xs={24} xl={12}>
              <Card>
                <div className="content_container">
                  <h3>قم بتسجيل الدخول</h3>
                  <p>بحساب التواصل الاجتماعي</p>
                </div>
                <div className="social_btn">
                  <Button className="socialbtn">
                    <img src={require("../../assests/Icons/2x/facebook.png")} />
                  </Button>
                  <Button className="socialbtn">
                    <img
                      className="google-img"
                      src={require("../../assests/Icons/2x/google.png")}
                    />
                  </Button>
                </div>
                <p className="or">او سجل عن طريق البريد الإلكتروني</p>
                <Form
                  {...layout}
                  className="test"
                  name="basic"
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={this.onFinish}
                  onFinishFailed={this.onFinishFailed}
                >
                  <div className="top_card">
                    <Form.Item
                      name="email"
                      rules={[
                        {
                          type: "email",
                          message: "The input is not valid E-mail!",
                        },
                        {
                          required: true,
                          message: "Please input your email!",
                        },
                      ]}
                    >
                      <Input
                        onChange={(e) =>
                          this.setState({ email: e.target.value })
                        }
                        value={this.state.email}
                        placeholder="البريد الالكتروني"
                      />
                    </Form.Item>

                    <Form.Item
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your password!",
                        },
                      ]}
                    >
                      <Input
                        onChange={(e) =>
                          this.setState({ password: e.target.value })
                        }
                        value={this.state.password}
                        type="password"
                        placeholder="كلمة المرور"
                      />
                    </Form.Item>
                    <Form.Item className="forget-container">
                      <Link className="login-form-forgot" to="#">
                        هل نسيت كلمة المرور؟
                      </Link>
                    </Form.Item>
                  </div>
                  <div className="bottom_card">
                    <Form.Item>
                      <Button className="next-button" htmlType="submit">
                        تسجيل دخول
                      </Button>
                    </Form.Item>
                    <Link to="/" className="prev-button">
                      رجوع
                    </Link>
                  </div>
                </Form>
              </Card>
            </Col>
            <Col xs={24} xl={12} className="image_container">
              <img src={require("../../assests/images/signup_img_3.jpg")} />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
const mapDispachToProps = (dispach) => {
  return {
    signIn: (email, password) => dispach(signIn(email, password)),
    clearAlerts: () => dispach(alertActions.clear),
  };
};
const mapStateToProps = (state) => {
  console.log(state);
  return {
    token: state.signIn.token,
    error: state.signIn.error,
    alert: state.alert,
  };
};
export default connect(mapStateToProps, mapDispachToProps)(SignIn);

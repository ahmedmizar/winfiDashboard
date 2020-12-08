import React, { Component } from "react";
import { connect } from "react-redux";
import { auth } from "../../appRedux/actions/registrationAction";
import { Form, Input, Button, Checkbox, Row, Col, Alert } from "antd";
import { history } from "../../appRedux/store/index";
import { Link } from "react-router-dom";
import Card from "../../Ui/Card/Card";
import "./Registeration.scss";
import {alertActions} from "../../appRedux/actions/AlertActions";

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


class Registeration extends Component {
  constructor(props) {
    super(props);

    history.listen((location, action) => {
       
        this.props.clearAlerts();
    });
    
}
  state = {
    user_name: "",
    email: "",
    password: "",
    isLogin: false,
  };

  onFinish = (values) => {
    console.log("Success:", values);
    this.props.onAuth(values);
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    this.props.onAuth(errorInfo);
  };
  componentDidUpdate() {
    if (this.props.token) {
      this.props.history.push("/phoneNumber");
    }
   
  }

  render() {
    const { alert } = this.props;
    
    return (
      <div className="registration">
         {alert.message && <Alert message={alert.message} type={alert.type} showIcon /> }
        <div className="container">
          <Row>
            <Col xs={24} xl={12}>
              <Card>
                <div className="content_container">
                 
                  
                  <h3>قم بالتسجيل</h3>
                  <p>لوريم ايبسوم دولور ايبسوملوريم ايبسوم</p>
                </div>
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
                      name="user_name"
                      rules={[
                        {
                          required: true,
                          message: "Please input your username!",
                        },
                        {
                          min: 5,
                          message: "Username must be minimum 5 characters.",
                        },
                      ]}
                    >
                      <Input
                        onChange={(e) =>
                          this.setState({ user_name: e.target.value })
                        }
                        value={this.state.user_name}
                        placeholder="اسم المستخدم"
                      />
                    </Form.Item>
                    <Form.Item
                      name="email"
                      rules={[
                        {
                          type: "email",
                          message: "The input is not valid E-mail!",
                        },
                        {
                          required: true,
                          message: "Please input your E-mail!",
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
                    <Form.Item
                      name="agreement"
                      valuePropName="checked"
                      rules={[
                        {
                          validator: (_, value) =>
                            value
                              ? Promise.resolve()
                              : Promise.reject("Should accept agreement"),
                        },
                      ]}
                    >
                      <Checkbox>
                        بالتسجيل انت موافق على <span>الشروط و الاحكام</span>
                      </Checkbox>
                    </Form.Item>
                  </div>
                  <div className="bottom_card">
                    <Link to="/" className="prev-button">
                      عودة
                    </Link>

                    <Form.Item>
                      <Button className="next-button" htmlType="submit">
                        التالي
                      </Button>
                    </Form.Item>
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
    onAuth: (userName, email, password) =>
    dispach(auth(userName, email, password)),
    clearAlerts: () => dispach(alertActions.clear),
  };
};
const mapStateToProps = (state) => {
  console.log(state);
  return {
    token: state.register.token,
    error: state.register.error,
    alert: state.alert
  };
};
export default connect(mapStateToProps, mapDispachToProps)(Registeration);

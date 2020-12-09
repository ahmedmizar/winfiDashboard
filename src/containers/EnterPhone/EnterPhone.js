import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Input, Form, Select } from "antd";
import LeftCard from "../../Ui/LeftCard/LeftCard"
import RightCard from "../../Ui/RightCard/RightCard"
import "./EnterPhone.scss"
const { Option } = Select;
class EnterPhone extends Component {
  state = {
    phone: "",
  };
  render() {
    const prefixSelector = (
      <Form.Item name="prefix" noStyle>
        <Select

        >
          <Option value="86"><img src={require("../../assests/Icons/flag-400.png")} /> +20</Option>
          <Option value="87"><img src={require("../../assests/Icons/saudi_arabia.png")} />87</Option>
        </Select>
      </Form.Item>
    );
    return (
      <div className="enter_phone">
        <LeftCard>
          <img src={require("../../assests/images/Costa_logo.png")} />
          <p>Welcome to, Costa</p>
        </LeftCard>
        <RightCard>
          <h4>Connect to internet absolutely free</h4>
          <div className="powrd_by">
            <img src={require("../../assests/Icons/group@2x.png")} />
            <span>Powered by WinFi</span>

          </div>
          <div className="enter_your_mobile">
            <p>Enter your mobile Phone number</p>
            <div className="form-container">
              <Form onFinish={this.handleSubmit} initialValues={{
                prefix: '86',
              }}>

                <Form.Item
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone number!",
                    },
                  ]}
                >
                  <Input
                    addonBefore={prefixSelector}
                    onChange={(e) =>
                      this.setState({ phone: e.target.value })
                    }
                    placeholder="رقم الهاتف"
                    value={this.state.phone}
                  />
                </Form.Item>
                <p>We will send you an OTP code via SMS.</p>
                <Link className="next-button" htmlType="submit" to='/veryifyPhone'>
                  Continue
                </Link>

              </Form>

            </div>
            <p className="terms">By clicking “Continue” I agree to WinFi's <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.</p>
          </div>
        </RightCard>
      </div>
    )
  }
}

export default EnterPhone;

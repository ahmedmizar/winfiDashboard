import React, { Component } from "react";
import { Input, Form, Select } from "antd";
import LeftCard from "../../Ui/LeftCard/LeftCard"
import RightCard from "../../Ui/RightCard/RightCard"
import "./EnterPhone.scss"
const { Option } = Select;
class EnterPhone extends Component {

  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      selectedCountry: '+20',
      initialValues: {
        prefix: '86',
        phone: ''
      }
    };
  };

  componentDidMount() {
    this.checkPhoneNumber()
  }

  async checkPhoneNumber() {
    // const { location } = this.props;
    // if (location.state && location.state.phone) {
    //   await this.setState({
    //     phone: location.state.phone.toString(), initialValues: {
    //       ...this.state.initialValues,
    //       phone: location.state.phone.toString()
    //     }
    //   })
    // }
  }


  submit = () => {
    const { history } = this.props;
    const { phone, selectedCountry } = this.state;
    history.push('veryifyPhone', { phone: selectedCountry + phone })
  }


  render() {
    const { phone } = this.state;
    const prefixSelector = (
      <Form.Item name="prefix" noStyle>
        <Select onChange={(value) => { this.setState({ selectedCountry: value }) }}>
          <Option value="86"><img src={require("../../assests/Icons/flag-400.png")} /> +20</Option>
          <Option value="87"><img src={require("../../assests/Icons/saudi_arabia.png")} /> +966</Option>
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
              <Form onFinish={this.handleSubmit} initialValues={this.state.initialValues}>
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
                    onChange={(e) => this.setState({ phone: e.target.value })}
                    placeholder="رقم الهاتف"
                    value={phone}
                    defaultValue={phone}
                  />
                </Form.Item>
                <p>We will send you an OTP code via SMS.</p>
                <Form.Item>
                  <button className="next-button" htmlType="submit" onClick={() => { this.submit() }} disabled={phone.length < 6}>Continue</button>
                </Form.Item>
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

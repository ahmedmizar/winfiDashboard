import React, { Component } from "react";
import { Form, Select } from "antd";
import LeftCard from "../../Ui/LeftCard/LeftCard"
import RightCard from "../../Ui/RightCard/RightCard"
import "./EnterPhone.scss"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

class EnterPhone extends Component {

  constructor(props) {
    super(props);

    this.state = {
      phone: '',
      selectedCountry: '+20',
      initialValues: {
        prefix: '86',
      }
    };
  };

  componentDidMount() {
    this.checkPhoneNumber()
  }

  async checkPhoneNumber() {
    const { location } = this.props;
    if (location.state && location.state.phone) {
      await this.setState({
        phone: location.state.phone
      })
    }
  }


  submit = () => {
    const { history } = this.props;
    const { phone } = this.state;
    history.push('veryifyPhone', { phone })
  }

  setValue(e) {
    if (e != undefined) this.setState({ phone: e })
    else {
      this.setState({ phone: '' })
    }
  }

  render() {
    const { phone } = this.state;
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
                <PhoneInput
                  placeholder="Enter phone number"
                  value={phone}
                  onChange={(e) => { this.setValue(e) }}
                  defaultCountry={'EG'}
                />
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

import React, { Component } from "react";
import { Button, Input, Form, Select } from "antd";
import LeftCard from "../../Ui/LeftCard/LeftCard"
import RightCard from "../../Ui/RightCard/RightCard"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import "./VeryifyPhone.scss"
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const { Option } = Select;
class VeryifyPhone extends Component {
  constructor(props) {
    super(props);

    this.textInput1 = React.createRef();
    this.textInput2 = React.createRef();
    this.textInput3 = React.createRef();
    this.textInput4 = React.createRef();
    this.textInput5 = React.createRef();
    this.textInput6 = React.createRef();
    this.state = {
      verifyPhoneCode: [],
      finalCode: "",
      isEdit: false,
      counter: 60,
      phone: ''

    };
  }

  componentDidMount() {
    const { history } = this.props;
    if (history.location.state) {
      const { phone } = history.location.state;
      this.setState({ phone })
    }

    this.textInput1.current.focus();
    this.myInterval = setInterval(() => {
      this.setState(({ counter }) => ({
        counter: counter - 1
      }))
    }, 1000)

  }


  stopCounter() {
    if (this.state.counter == 0) {
      clearInterval(this.myInterval)
    }
  }

  changeNumbers(index, val) {
    const { verifyPhoneCode } = this.state;
    let result = verifyPhoneCode;
    result[index] = val;

    if (index == 4 && val.length > 0) {
      this.textInput6.current.focus();
    }
    if (index == 3 && val.length > 0) {
      this.textInput5.current.focus();
    }
    if (index == 2 && val.length > 0) {
      this.textInput4.current.focus();
    }
    if (index == 1 && val.length > 0) {
      this.textInput3.current.focus();
    }
    if (index == 0 && val.length > 0) {
      this.textInput2.current.focus();
    }
    this.setState({ verifyPhoneCode: result });
  }

  checkIfDisabled() {
    const { verifyPhoneCode, counter } = this.state;
    if (verifyPhoneCode.length >= 6 && counter != 0) {
      return false
    }
    else {
      return true
    }
  }




  render() {
    const { verifyPhoneCode, counter, phone } = this.state;
    const { history } = this.props;
    this.stopCounter();
    return (
      <div className="veryify_phone">
        <LeftCard>
          <img src={require("../../assests/images/Costa_logo.png")} />
          <p>Welcome to, Costa</p>
        </LeftCard>
        <RightCard>
          <h4>Phone number verification</h4>

          <div className="edit_your_mobile">
            <p>Please enter OTP code sent to <span>{phone}</span></p>
            <button className="edit-btn" onClick={(e) => { history.push('EnterPhone', { phone }) }}>
              Edit phone number
            </button>
          </div>
          <div className="form-verify">
            <Form onFinish={this.handleSubmit}>
              <Form.Item>
                <Input
                  onChange={(e) => this.changeNumbers(0, e.target.value)}
                  value={verifyPhoneCode[0]}
                  ref={this.textInput1}
                  maxlength={1}
                />
              </Form.Item>
              <Form.Item>
                <Input
                  onChange={(e) => this.changeNumbers(1, e.target.value)}
                  value={verifyPhoneCode[1]}
                  ref={this.textInput2}
                  maxlength={1}
                />
              </Form.Item>
              <Form.Item>
                <Input
                  onChange={(e) => this.changeNumbers(2, e.target.value)}
                  value={verifyPhoneCode[2]}
                  ref={this.textInput3}
                  maxlength={1}
                />
              </Form.Item>
              <Form.Item>
                <Input
                  onChange={(e) => this.changeNumbers(3, e.target.value)}
                  value={verifyPhoneCode[3]}
                  ref={this.textInput4}
                  maxlength={1}
                />
              </Form.Item>
              <Form.Item>
                <Input
                  onChange={(e) => this.changeNumbers(4, e.target.value)}
                  value={verifyPhoneCode[4]}
                  ref={this.textInput5}
                  maxlength={1}
                />
              </Form.Item>
              <Form.Item>
                <Input
                  onChange={(e) => this.changeNumbers(5, e.target.value)}
                  value={verifyPhoneCode[5]}
                  ref={this.textInput6}
                  maxlength={1}
                />
              </Form.Item>
              <Button className="verify-button" htmlType="submit" disabled={this.checkIfDisabled()}>Verify</Button>
            </Form>
          </div>
          <div className="resend">
            <p>Didn’t recieve OTP code?</p>
            <p>You can resend code in<span>0.{this.state.counter} sec</span></p>

            {counter == 0 &&
              <React.Fragment>
                <p >Resend Code</p>
                <a onClick={() => { this.setState({ counter: 60 }) }} onClick={() => { this.setState({ counter: 60 }) }} ><FontAwesomeIcon icon={faWhatsapp} /><span>Whatsapp</span></a>
                <a onClick={() => { this.setState({ counter: 60 }) }} className="call_me"><FontAwesomeIcon icon={faPhoneAlt} /><span>Call me</span></a>
              </React.Fragment>
            }
            <div className="powrd_by">
              <img src={require("../../assests/Icons/group@2x.png")} />
              <span>Powered by WinFi</span>
            </div>
          </div>
        </RightCard>
      </div>
    )
  }
}

export default VeryifyPhone;

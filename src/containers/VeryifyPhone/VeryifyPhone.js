import React, { Component } from "react";
import { Button, Input, Form, Select } from "antd";
import LeftCard from "../../Ui/LeftCard/LeftCard"
import RightCard from "../../Ui/RightCard/RightCard"
import "./VeryifyPhone.scss"
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
      phone: "(+20)01069578145",
      isEdit: false
    };
  }

  componentDidMount() {
    this.textInput1.current.focus();
  }
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

    return (
      <div className="veryify_phone">
        <LeftCard>
          <img src={require("../../assests/images/Costa_logo.png")} />
          <p>Welcome to, Costa</p>
        </LeftCard>
        <RightCard>
          <h4>Phone number verification</h4>

          <div className="edit_your_mobile">
            <p>Please enter OTP code sent to </p>
            <div className="form-edit">
              <form onFinish={this.handleSubmit} >

                <input value={this.state.phone}
                  disabled={!this.state.isEditing}
                  className={this.state.isEditing ? " " : "nonEditableField"}
                  required
                  onChange={(e) => { this.setState({ phone: e.target.value }) }} />

                <button className="edit-btn" onClick={(e) => {
                  e.preventDefault()
                  this.setState({ isEditing: !this.state.isEditing })
                }}>
                  Edit phone number
                 </button>

              </form>

            </div>

          </div>
          <div className="form-verify">
            <Form onFinish={this.handleSubmit}>
              
                <Form.Item

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
              

              <Button className="verify-button" htmlType="submit">
                تسجيل
              </Button>

            </Form>
          </div>
          <div className="resend">
            <p>Didn’t recieve OTP code?</p>
            <p>You can resend code in <span>0:59 sec</span></p>
            <p>Resend Code via</p>
            <div className="powrd_by">
            <img src={require("../../assests/Icons/group@2x.png")} />
            <span>Powered by WinFi</span>
            <a href="#"></a>
          </div>
          </div>
        </RightCard>
      </div>
    )
  }
}

export default VeryifyPhone;

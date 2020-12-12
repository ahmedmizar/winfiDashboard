import React, { Component } from "react";
import { connect } from 'react-redux';
import { Button, Input, Form, Radio, Checkbox } from "antd";
import LeftCard from "../../Ui/LeftCard/LeftCard"
import RightCard from "../../Ui/RightCard/RightCard"
import "./CreateAccount2.scss"


// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
class CreateAccount2 extends Component {
  state = {
    dateofBirth: "",
    day: "",
    month: "",
    year: "",
    gender: "",
    styleChecked: ""
  };

  NumberReg = /^[0-9\b]+$/;

  submit = () => {
    const { history } = this.props;
  }

  GoBack() {
    const { history } = this.props;
    history.push('createAccount')
  }




  render() {
    const { data } = this.props

    return (
      <div className="create_ccount2">
        <LeftCard>
        </LeftCard>
        <RightCard>
          <h4>Create your account</h4>
          <p>We need this info to send you our exclusive enjoyable offers</p>
          <p>Or create account with email</p>
          <div className="create_form2">

            <Form

              className="createform2"
              name="basic"
            >
              <p>Your birthday<br /><span>P.s. We will send you exclusive offers 🥳</span></p>
              {/* <Form.Item
                noStyle
                name="month"
                rules={[
                  {
                    required: true,
                    message: "Please select your month!",
                  },
                ]}
              >
                <Select
                  onChange={(value) =>
                    this.setState({ month: value })
                  }
                  placeholder="month"
                >
                  {months.map((month) => {
                    return (
                      <Option key={month} value={month}>
                        <span>{month}</span>
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item> */}
              <div className="dateof_birth">
                <Form.Item
                  name="month"
                  style={{ width: '30%' }}
                  rules={[
                    {
                      required: true,
                      message: "Field is required",
                    },
                    {
                      pattern: new RegExp(/^[0-9\b]+$/),
                      message: "Only Numbers!"
                    }
                  ]}
                >
                  <Input
                    onChange={(e) => { this.setState({ month: e.target.value }) }}
                    value={this.state.month}
                    maxLength={2}
                    placeholder="Month"
                  />
                </Form.Item>
                <Form.Item
                  name="day"
                  style={{ width: '30%' }}

                  rules={[
                    {
                      required: true,
                      message: "This field is required!",
                    },
                    {
                      pattern: new RegExp(/^[0-9\b]+$/),
                      message: "Only Numbers!"
                    }
                  ]}
                >
                  <Input
                    onChange={(e) =>
                      this.setState({ day: e.target.value })
                    }
                    value={this.state.day}
                    maxLength={2}
                    placeholder="Day"
                  />
                </Form.Item>

                <Form.Item
                  name="year"
                  rules={[
                    {
                      required: true,
                      message: "This field is required!",
                    },
                    {
                      pattern: new RegExp(/^[0-9\b]+$/),
                      message: "Only Numbers!"
                    }

                  ]}
                  style={{ width: '30%' }}
                >
                  <Input
                    onChange={(e) =>
                      this.setState({ year: e.target.value })
                    }
                    value={this.state.year}
                    maxLength={4}
                    placeholder="Year"
                  />
                </Form.Item>
              </div>

              <div className="select_gender">
                <p>Select Gender</p>
                <Form.Item
                  name="gender"
                >
                  <Radio.Group
                    onChange={(e) =>
                      this.setState({ gender: e.target.value })
                    }

                  >
                    <Radio value="male" onClick={(e) => this.setState({ styleChecked: e.target.value })} style={this.state.styleChecked == "male" ? { borderColor: `${data.displayColor}` } : null}>
                      <img src={require("../../assests/Icons/male@2x.png")} /> <span className="text">Male</span>
                    </Radio>
                    <Radio value="femal" onClick={(e) => this.setState({ styleChecked: e.target.value })} style={this.state.styleChecked == "femal" ? { borderColor: `${data.displayColor}` } : null}>
                      <img src={require("../../assests/Icons/female@2x.png")} /> <span className="text">Femal</span>
                    </Radio>

                  </Radio.Group>
                </Form.Item>
                <Form.Item >
                  <Checkbox onChange={(e) => { console.log(e.target.checked) }} >
                    Or “I prefer not to tell my gender”
                  </Checkbox>
                </Form.Item>
              </div>
              <Form.Item>
                <button className="back" onClick={() => { this.GoBack() }} style={{ color: `${data.displayColor}` }}>Go Back</button>
                <button className="submit" htmlType="submit" onClick={() => { this.submit() }} style={{ backgroundColor: `${data.displayColor}` }}>
                  Done!
                </button>
              </Form.Item>

            </Form>

          </div>
          <div className="wifi">
            <img src={require("../../assests/Icons/group-71@2x.png")} />
            <p>One Account.<br />Endless Wifi in +100 places</p>
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
const mapStateToProps = (state) => {

  return {
    data: state.brandData.brandData
  }
}

export default connect(mapStateToProps)(CreateAccount2);

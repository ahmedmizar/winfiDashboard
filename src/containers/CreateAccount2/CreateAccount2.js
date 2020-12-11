import React, { Component } from "react";
import { Button, Input, Form, Select, Radio, Checkbox } from "antd";
import LeftCard from "../../Ui/LeftCard/LeftCard"
import RightCard from "../../Ui/RightCard/RightCard"

import "./CreateAccount2.scss"
const { Option } = Select;
// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
class CreateAccount2 extends Component {
  state = {
    dateofBirth: "",
    day: "",
    month: "",
    year: "",
    gender: "",

  };


  submit = () => {
    const { history } = this.props;
  }


  render() {
    console.log(this.state.gender)
    return (
      <div className="create_ccount2">
        <LeftCard>
          <img src={require("../../assests/images/Costa_logo.png")} />
          <p>Welcome to, Costa</p>
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
                  rules={[
                    {
                      required: true,
                      message: "Please input your month!",
                    },

                  ]}
                >
                  <Input
                    onChange={(e) =>
                      this.setState({ month: e.target.value })
                    }
                    value={this.state.month}
                    maxLength={1}
                    placeholder="Month"
                  />
                </Form.Item>
                <Form.Item
                  name="day"
                  rules={[
                    {
                      required: true,
                      message: "Please input your day!",
                    },

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
                      message: "Please input your day!",
                    },

                  ]}
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
                    <Radio value="male">
                      <img src={require("../../assests/Icons/male@2x.png")} /> <span className="text">Male</span>
                    </Radio>
                    <Radio value="femal">
                      <img src={require("../../assests/Icons/female@2x.png")} /> <span className="text">Femal</span>
                    </Radio>

                  </Radio.Group>
                </Form.Item>
                <Form.Item >
                  <Checkbox onChange={(e) => { console.log(e.target.checked) }}>
                    Or “I prefer not to tell my gender”
                  </Checkbox>
                </Form.Item>
              </div>
              <Form.Item>
                <button className="back">Go Back</button>
                <button className="submit" htmlType="submit" onClick={() => { this.submit() }}>
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

export default CreateAccount2;

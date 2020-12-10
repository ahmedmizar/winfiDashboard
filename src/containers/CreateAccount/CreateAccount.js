import React, { Component } from "react";
import { Button, Input, Form, Select } from "antd";
import LeftCard from "../../Ui/LeftCard/LeftCard"
import RightCard from "../../Ui/RightCard/RightCard"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import "./CreateAccount.scss"
const { Option } = Select;
class CreateAccount extends Component {
  state = {
    user_name: "",
    email: "",
    password: "",
    isLogin: false,
  };
  render() {


    return (
      <div className="create_ccount">
        <LeftCard>
          <img src={require("../../assests/images/Costa_logo.png")} />
          <p>Welcome to, Costa</p>
        </LeftCard>
        <RightCard>
          <h4>Create your account</h4>
          <p>We need this info to send you our exclusive enjoyable offers</p>
          <p>Or create account with email</p>
          <div className="create_form">

            <Form

              className="createform"
              name="basic"
            >

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
                  placeholder="Email address"
                />
              </Form.Item>
              <Form.Item
                name="full_name"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },

                ]}
              >
                <Input
                  onChange={(e) =>
                    this.setState({ user_name: e.target.value })
                  }
                  value={this.state.user_name}
                  placeholder="Full Name"
                />
              </Form.Item>


              <Form.Item>
                <button className="next-button" htmlType="submit">
                  Next
                  </button>
              </Form.Item>

            </Form>
            <div className="wifi">
              <img src={require("../../assests/Icons/group-71@2x.png")} />
              <p>One Account.<br />Endless Wifi in +100 places</p>
              <div className="powrd_by">
                <img src={require("../../assests/Icons/group@2x.png")} />
                <span>Powered by WinFi</span>
              </div>
            </div>
          </div>

        </RightCard>
      </div>
    )
  }
}

export default CreateAccount;

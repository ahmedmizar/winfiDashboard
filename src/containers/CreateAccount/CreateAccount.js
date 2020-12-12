import React, { Component } from "react";
import {connect} from "react-redux";
import { Input, Form } from "antd";
import LeftCard from "../../Ui/LeftCard/LeftCard"
import RightCard from "../../Ui/RightCard/RightCard"
import "./CreateAccount.scss"
class CreateAccount extends Component {
  state = {
    user_name: "",
    email: "",
    isLogin: false,
  };

  submit = () => {
    const { history } = this.props;
    history.push('createAccount2')
  }


  render() {
    const { user_name, email } = this.state;
    const {data} = this.props
    return (
      <div className="create_ccount">
        <LeftCard>
        </LeftCard>
        <RightCard>
          <h4>Create your account</h4>
          <p>We need this info to send you our exclusive enjoyable offers</p>
          <p>Or create account with email</p>
          <div className="create_form">
            <Form className="createform" name="basic" onFinish={this.submit}>
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
                  onChange={(e) => this.setState({ email: e.target.value })}
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
                  onChange={(e) => this.setState({ user_name: e.target.value })}
                  value={this.state.user_name}
                  placeholder="Full Name"
                />
              </Form.Item>


              <Form.Item>
                <button className="next-button" htmlType="submit" disabled={user_name.length == 0 || email.length == 0} style={{ backgroundColor: `${data.displayColor}` }}>Next</button>
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
const mapStateToProps = (state) => {

  return {
      data: state.brandData.brandData
  }
}

export default connect(mapStateToProps)(CreateAccount);


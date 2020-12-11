import React, { Component } from "react";
import { Button, Input, Form, Select } from "antd";
import LeftCard from "../../Ui/LeftCard/LeftCard"
import RightCard from "../../Ui/RightCard/RightCard"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import "./Welcome.scss"
const { Option } = Select;
class Welcome extends Component {
  state = {
    user_name: "",
    email: "",
    password: "",
    isLogin: false,
  };


  submit = () => {
    const { history } = this.props;
  }


  render() {
    return (
      <div className="welcome">
        <LeftCard>
          <img src={require("../../assests/images/Costa_logo.png")} />
          <p>Welcome to, Costa</p>
        </LeftCard>
        <RightCard>
          <h4>Welocme back, Mina Naguib!</h4>
          <div className="connect">
            <button>Conect to Internet</button>
            <span>This is not me</span>
          </div>

          <div className="wifi">

            <div className="power">
              <img src={require("../../assests/Icons/group-71@2x.png")} />
              <div className="powrd_by">

                <img src={require("../../assests/Icons/group@2x.png")} />
                <span>Powered by WinFi</span>
              </div>
            </div>
            <div className="info">
              <p>Want to more about connected devices and internet speed?</p>
              <button>View acount info</button>
            </div>

          </div>


        </RightCard>
      </div>
    )
  }
}

export default Welcome;

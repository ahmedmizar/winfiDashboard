import React, { Component } from "react";
import { Row, Col, Button, Select, Input, Form } from "antd";
import { connect } from "react-redux";
import { fetchLocations } from "../../appRedux/actions/Locations";
import { phoneRegistraion } from "../../appRedux/actions/registerPhone";
import { alertActions } from "../../appRedux/actions/AlertActions";
import { history } from "../../appRedux/store/index";
import Card from "../../Ui/Card/Card";
import "./PhoneNumber.scss";
const { Option } = Select;
class PhoneNumber extends Component {
  constructor(props) {
    super(props);
    history.listen((location, action) => {
      this.props.clearAlerts();
    });
  }
  state = {
    phone: "",
    locations: [],
    phone_code_id: "",
    isVerfied: 0,
    moaz: false,
  };

  componentDidMount() {
    this.props.fetchLocations();
  }

 

  handleSubmit = () => {
    this.props.phoneRegistraion(
      this.state.phone,
      this.state.isVerfied,
      this.state.phone_code_id
    );
  };
  componentDidUpdate() {
    if (this.props.phoneStatus) {
      this.props.history.push("/verifyPhone", {
        phone: this.state.phone,
        isVerfied: this.state.isVerfied,
        phone_code_id: this.state.phone_code_id,
      });
    }
  }
  render() {
    // const {Phone} = this.props.
    console.log(this.props.locations);
    const prefixSelector = (
      <Form.Item noStyle>
        <Select onChange={(value) => this.setState({ phone_code_id: value })}>
          {this.props.locations.map((element) => {
            return (
              <Option key={element.id} value={element.id}>
                <img
                  src={element.flag}
                  style={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    marginLeft: "8px",
                  }}
                />
                <span>{element.code}</span>
              </Option>
            );
          })}
        </Select>
      </Form.Item>
    );

    return (
      <div className="phone_number">
        <div className="container">
          <Row>
            <Col xs={24} xl={12}>
              <Card>
                <div className="content_container">
                  <h3>أضف رقم الهاتف</h3>
                  <p>لوريم ايبسوم دولور ايبسوملوريم ايبسوم</p>
                </div>
                <div className="form-container">
                  <Form onFinish={this.handleSubmit}>
                    <div className="top_form">
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
                    </div>
                    <div className="bottom_form">
                      <Button className="next-button" htmlType="submit">
                        تسجيل
                      </Button>
                    </div>
                  </Form>
                </div>
              </Card>
            </Col>
            <Col xs={24} xl={12} className="image_container">
              <img src={require("../../assests/images/signup_img_4.jpg")} />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
const mapDispachToProps = (dispach) => {
  return {
    fetchLocations: () => dispach(fetchLocations()),
    phoneRegistraion: (phone, isVerfied, phone_code_id) =>
      dispach(phoneRegistraion(phone, isVerfied, phone_code_id)),
    clearAlerts: () => dispach(alertActions.clear),
  };
};
const mapStateToProps = (state) => {
  console.log(state);
  return {
    locations: state.locations.locations,
    alert: state.alert,
    phoneStatus: state.Phone.verifyPhonedata,
  };
};

export default connect(mapStateToProps, mapDispachToProps)(PhoneNumber);

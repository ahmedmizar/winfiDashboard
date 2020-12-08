import React, { Component } from "react";
import { connect } from "react-redux";
import { auth } from "../../appRedux/actions/registrationAction";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Row,
  Col,
  Alert,
  Progress,
  DatePicker,
  Select,
} from "antd";
import { history } from "../../appRedux/store/index";
import { Link } from "react-router-dom";
import { fetchGender } from "../../appRedux/actions/Gender";
import { fetchLocations } from "../../appRedux/actions/Locations";
import Card from "../../Ui/Card/Card";
import "./QuestionnaireOne.scss";
import { alertActions } from "../../appRedux/actions/AlertActions";
const { Option } = Select;
class QuestionnaireOne extends Component {
  state = {
    date_of_birth: "",
    gender: "",
    nationality_id: "",
  };
  componentDidMount() {
    this.props.fetchGender();
    this.props.fetchLocations();
  }
  handleSubmit = () => {
    this.setState({
      date_of_birth: this.state.date_of_birth,
      gender: this.state.gender,
      nationality_id: this.state.nationality_id,
    });
    console.log(this.state);
    if (this.state) {
      this.props.history.push("/questionnaireTwo", this.state);
    }
  };

  render() {
    const { gender, locations } = this.props;

    return (
      <div className="questionnaireOne">
        <div className="container">
          <Row>
            <Col xs={24} xl={12}>
              <Card>
                <div className="content_container">
                  <Progress
                    percent={0}
                    format={(percent) => `${percent} % مكتمل`}
                  />
                  <h3>البيانات الشخصية</h3>
                  <p>قم بإكمال بيانتك الشخصيه</p>
                </div>
                <Form
                  name="basic"
                  onFinish={this.handleSubmit}
                  // onFinishFailed={this.onFinish}
                >
                  <div className="top_card">
                    <Form.Item
                      name="date_of_birth"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Date of Birth",
                        },
                      ]}
                    >
                      <DatePicker
                        onChange={(date, dateString) => {
                          this.setState({ date_of_birth: dateString });
                        }}
                      />
                    </Form.Item>
                    <Form.Item
                      noStyle
                      name="gender"
                      rules={[
                        {
                          required: true,
                          message: "Please select your Gender!",
                        },
                      ]}
                    >
                      <Select
                        onChange={(value) =>
                          this.setState({ nationality_id: value })
                        }
                        placeholder="النوع"
                      >
                        {this.props.gender.map((element) => {
                          return (
                            <Option key={element.id} value={element.id}>
                              <span>{element.name}</span>
                            </Option>
                          );
                        })}
                      </Select>
                    </Form.Item>
                    <Form.Item
                      noStyle
                      name="nationality_id"
                      rules={[
                        {
                          required: true,
                          message: "Please select your Country!",
                        },
                      ]}
                    >
                      <Select
                        onChange={(value) => this.setState({ gender: value })}
                        placeholder="الدوله"
                      >
                        {locations.map((element) => {
                          return (
                            <Option key={element.id} value={element.id}>
                              <span>{element.name}</span>
                            </Option>
                          );
                        })}
                      </Select>
                    </Form.Item>
                  </div>
                  <div className="bottom_card">
                    <Form.Item>
                      <Button className="next-button" htmlType="submit">
                        التالي
                      </Button>
                    </Form.Item>
                  </div>
                </Form>
              </Card>
            </Col>
            <Col xs={24} xl={12} className="image_container">
              <img src={require("../../assests/images/signup_img_3.jpg")} />
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
    fetchGender: () => dispach(fetchGender()),
    clearAlerts: () => dispach(alertActions.clear),
  };
};
const mapStateToProps = (state) => {
  console.log(state);
  return {
    gender: state.gender.gender,
    locations: state.locations.locations,
    alert: state.alert,
  };
};
export default connect(mapStateToProps, mapDispachToProps)(QuestionnaireOne);

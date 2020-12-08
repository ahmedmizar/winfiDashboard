import React, { Component } from "react";
import { connect } from "react-redux";

import { Form, Radio, Button, Row, Col, Progress } from "antd";

import { Link } from "react-router-dom";
import { fetchArabicEducation } from "../../appRedux/actions/arabicEducation";

import Card from "../../Ui/Card/Card";
import "./QuestionnaireTwo.scss";

class QuestionnaireTwo extends Component {
  state = {
    arabic_education: "",
  };
  componentDidMount() {
    this.props.fetchArabicEducation();
  }
  handleSubmit = () => {
    this.setState({
      arabic_education: this.state.arabic_education,
    });
    console.log(this.state);
    if (this.state) {
      const nextState = { ...this.state, ...this.props.location.state };
      this.props.history.push("/questionnairethree", nextState);
    }
  };

  render() {
    const { arabicEducation } = this.props;
    console.log(this.props);
    return (
      <div className="questionnaireTwo">
        <div className="container">
          <Row>
            <Col xs={24} xl={12}>
              <Card>
                <div className="content_container">
                  <Progress
                    percent={10}
                    format={(percent) => `${percent} % مكتمل`}
                  />
                  <h3>المهارات الشخصية</h3>
                  <p>هل درست اللغة العربية ؟</p>
                </div>
                <Form name="basic" onFinish={this.handleSubmit}>
                  <div className="top_card">
                    <Form.Item
                      name="arabic_education"
                      rules={[
                        {
                          required: true,
                          message: "Please pick an item!",
                        },
                      ]}
                    >
                      <Radio.Group
                        onChange={(e) =>
                          this.setState({ arabic_education: e.target.value })
                        }
                      >
                        {arabicEducation.map((element) => {
                          return (
                            <Radio key={element.id} value={element.id}>
                              <span>{element.name}</span>
                            </Radio>
                          );
                        })}
                      </Radio.Group>
                    </Form.Item>
                  </div>
                  <div className="bottom_card">
                    <Link to="/QuestionnaireOne" className="prev-button">
                      عودة
                    </Link>
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
    fetchArabicEducation: () => dispach(fetchArabicEducation()),
  };
};
const mapStateToProps = (state) => {
  console.log(state);
  return {
    arabicEducation: state.arabicEducation.arabicEducation,
  };
};
export default connect(mapStateToProps, mapDispachToProps)(QuestionnaireTwo);

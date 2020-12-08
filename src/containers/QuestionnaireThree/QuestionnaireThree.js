import React, { Component } from "react";
import { connect } from "react-redux";

import { Form, Radio, Button, Row, Col, Progress, Select } from "antd";

import { Link } from "react-router-dom";
import { fetchQuranLevel } from "../../appRedux/actions/quranLevel";

import Card from "../../Ui/Card/Card";
import "./QuestionnaireThree.scss";

class QuestionnaireThree extends Component {
  state = {
    arabic_level: "",
  };
  componentDidMount() {
    this.props.fetchQuranLevel();
  }
  handleSubmit = () => {
    this.setState({
      arabic_level: this.state.arabic_level,
    });
    
    if (this.state) {
      const nextState = { ...this.state, ...this.props.location.state };
      this.props.history.push("/questionnaireFour", nextState);
    }
  };

  render() {
    const { level } = this.props;
    console.log(this.props, "tessssssssssss");
    return (
      <div className="questionnaireThree">
        <div className="container">
          <Row>
            <Col xs={24} xl={12}>
              <Card>
                <div className="content_container">
                  <Progress
                    percent={20}
                    format={(percent) => `${percent} % مكتمل`}
                  />
                  <h3>المهارات الشخصية</h3>
                  <p>ما هو مستواك في اللغة العربية ؟</p>
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
                          this.setState({ arabic_level: e.target.value })
                        }
                      >
                        {level.map((element) => {
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
                    <Link to="/questionnaireTwo" className="prev-button">
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
    fetchQuranLevel: () => dispach(fetchQuranLevel()),
  };
};
const mapStateToProps = (state) => {
  console.log(state);
  return {
    level: state.level.quranLevel,
  };
};
export default connect(mapStateToProps, mapDispachToProps)(QuestionnaireThree);

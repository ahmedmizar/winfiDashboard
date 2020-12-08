import React, { Component } from "react";
import { connect } from "react-redux";

import { Form, Radio, Button, Row, Col, Progress, Select } from "antd";

import { Link } from "react-router-dom";
import { fetchQuranLevel } from "../../appRedux/actions/quranLevel";

import Card from "../../Ui/Card/Card";
import "./QuestionnaireFive.scss";

class QuestionnaireFive extends Component {
  state = {
    quran_level: "",
  };
  componentDidMount() {
    this.props.fetchQuranLevel();
  }
  handleSubmit = () => {
    this.setState({
      quran_level: this.state.quran_level,
    });

    if (this.state) {
      const nextState = { ...this.state, ...this.props.location.state };
      this.props.history.push("/questionnairesix", nextState);
    }
  
  };

  render() {
    const { level } = this.props;
    console.log(this.props, "bbbbbbbbbbbbbbbbb");
    return (
      <div className="questionnaireFive">
        <div className="container">
          <Row>
            <Col xs={24} xl={12}>
              <Card>
                <div className="content_container">
                  <Progress
                    percent={40}
                    format={(percent) => `${percent} % مكتمل`}
                  />
                  <h3>المهارات الشخصية</h3>
                  <p>ما هو مستواك في حفظ القرآن ؟</p>
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
                          this.setState({ quran_level: e.target.value })
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
                    <Link to="/QuestionnaireFour" className="prev-button">
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
export default connect(mapStateToProps, mapDispachToProps)(QuestionnaireFive);

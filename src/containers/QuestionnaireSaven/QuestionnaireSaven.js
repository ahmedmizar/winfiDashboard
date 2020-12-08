import React, { Component } from "react";
import { connect } from "react-redux";

import { Form, Button, Row, Col, Progress, Checkbox } from "antd";

import { Link } from "react-router-dom";
import { fetchGolas } from "../../appRedux/actions/Goals";
import { questionair } from "../../appRedux/actions/personalData";
import Card from "../../Ui/Card/Card";
import "./QuestionnaireSaven.scss";

class QuestionnaireSaven extends Component {
  state = {
    goal_id: [],
  };
  componentDidMount() {
    this.props.fetchGolas();
  }
  handleSubmit = () => {
    this.setState({
      goal_id: this.state.goal_id,
    });
    if (this.state) {
      const nextState = { ...this.state, ...this.props.location.state };
      // this.props.history.push("/questionnaireFive", nextState);
      console.log(nextState, "nextStatenextState");
      this.props.questionair(nextState);
    }
  };
  render() {
    const { golas } = this.props;
    console.log(this.props, "ىىىىىىىى");
    return (
      <div className="questionnaireSaven">
        <div className="container">
          <Row>
            <Col xs={24} xl={12}>
              <Card>
                <div className="content_container">
                  <Progress
                    percent={60}
                    format={(percent) => `${percent} % مكتمل`}
                  />
                  <h3>بيانات إضافية</h3>
                  <p>ما الذي تريد أن تتعلمه ؟</p>
                </div>
                <Form name="basic" onFinish={this.handleSubmit}>
                  <div className="top_card">
                    <Form.Item
                      name="goals"
                      rules={[
                        {
                          required: true,
                          message: "Please pick an item!",
                        },
                      ]}
                    >
                      <Checkbox.Group
                        onChange={(checkedValues) =>
                          this.setState({ goal_id: checkedValues })
                        }
                      >
                        {this.props.golas.map((element) => {
                          return (
                            <Checkbox key={element.id} value={element.id}>
                              <span>{element.name}</span>
                            </Checkbox>
                          );
                        })}
                      </Checkbox.Group>
                    </Form.Item>
                  </div>
                  <div className="bottom_card">
                    <Link to="/questionnaireThree" className="prev-button">
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
    questionair: (
      date_of_birth,
      gender,
      nationality_id,
      arabic_education,
      arabic_level,
      quran_level,
      agzaa_count,
      learning_reason,
      language_id,
      goal_id
    ) =>
      dispach(
        questionair(
          date_of_birth,
          gender,
          nationality_id,
          arabic_education,
          arabic_level,
          quran_level,
          agzaa_count,
          learning_reason,
          language_id,
          goal_id
        )
      ),

    fetchGolas: () => dispach(fetchGolas()),
  };
};
const mapStateToProps = (state) => {
  console.log(state);
  return {
    golas: state.golas.goals,
    userData: state.userData,
  };
};
export default connect(mapStateToProps, mapDispachToProps)(QuestionnaireSaven);

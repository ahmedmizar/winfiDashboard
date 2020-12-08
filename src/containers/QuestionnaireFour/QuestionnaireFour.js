import React, { Component } from "react";
import { connect } from "react-redux";

import { Form, Button, Row, Col, Progress, Checkbox } from "antd";

import { Link } from "react-router-dom";
import { fetchLanguages } from "../../appRedux/actions/Languages";

import Card from "../../Ui/Card/Card";
import "./QuestionnaireFour.scss";

class QuestionnaireThree extends Component {
  state = {
    language_id: [],
  };
  componentDidMount() {
    this.props.fetchLanguages();
  }
  handleSubmit = () => {
    this.setState({
      language_id: this.state.language_id,
    });
    if (this.state) {
      const nextState = { ...this.state, ...this.props.location.state };
      this.props.history.push("/questionnaireFive", nextState);
    }
  };

  render() {
    const { languages } = this.props;
    console.log(this.props, "ttttttttttttttttt");
    return (
      <div className="questionnaireFour">
        <div className="container">
          <Row>
            <Col xs={24} xl={12}>
              <Card>
                <div className="content_container">
                  <Progress
                    percent={30}
                    format={(percent) => `${percent} % مكتمل`}
                  />
                  <h3>المهارات الشخصية</h3>
                  <p>ما هي اللغات التي تتقنها ؟</p>
                </div>
                <Form name="basic" onFinish={this.handleSubmit}>
                  <div className="top_card">
                    <Form.Item
                      name="language_id"
                      rules={[
                        {
                          required: true,
                          message: "Please pick an item!",
                        },
                      ]}
                    >
                      <Checkbox.Group
                        onChange={(checkedValues) =>
                          this.setState({ language_id: checkedValues })
                        }
                      >
                        {languages.map((element) => {
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
    fetchLanguages: () => dispach(fetchLanguages()),
  };
};
const mapStateToProps = (state) => {
  console.log(state);
  return {
    languages: state.languages.languages,
  };
};
export default connect(mapStateToProps, mapDispachToProps)(QuestionnaireThree);

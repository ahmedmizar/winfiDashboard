import React, { Component } from "react";
import { connect } from "react-redux";

import { Form, Radio, Button, Row, Col, Progress, Select } from "antd";

import { Link } from "react-router-dom";
import { fetchAgzaaCount } from "../../appRedux/actions/agzaaCount";

import Card from "../../Ui/Card/Card";
import "./QuestionnaireSix.scss";

class QuestionnaireSix extends Component {
  state = {
    agzaa_count: "",
  };
  componentDidMount() {
    this.props.fetchAgzaaCount();
  }
  handleSubmit = () => {
    this.setState({
      agzaa_count: this.state.agzaa_count,
    });
    if (this.state) {
      const nextState = { ...this.state, ...this.props.location.state };
      this.props.history.push("/questionnaireSaven", nextState);
    }
  };

  render() {
    const { agzaaCount } = this.props;
    console.log(agzaaCount);
    console.log(this.props, "ررررررر");
    return (
      <div className="questionnaireSix">
        <div className="container">
          <Row>
            <Col xs={24} xl={12}>
              <Card>
                <div className="content_container">
                  <Progress
                    percent={50}
                    format={(percent) => `${percent} % مكتمل`}
                  />
                  <h3>المهارات الشخصية</h3>
                  <p>ما هو مقدار حفظك لآيات القرآن ؟</p>
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
                          this.setState({ agzaa_count: e.target.value })
                        }
                      >
                        {agzaaCount.map((element) => {
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
    fetchAgzaaCount: () => dispach(fetchAgzaaCount()),
  };
};
const mapStateToProps = (state) => {
  console.log(state);
  return {
    agzaaCount: state.agzaaCount.agzaaCount,
  };
};
export default connect(mapStateToProps, mapDispachToProps)(QuestionnaireSix);

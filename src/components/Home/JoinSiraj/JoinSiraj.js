import React from "react";
import "./JoinSiraj.scss";
import { Row, Col } from "antd";

const joinSiraj = () => {
  return (
    <div className="join_container">
      <div className="container">
        <Row>
          <Col span={12}>
           
            <img src={require("../../../assests/images/joinus_imgold.png")} />
          </Col>
          <Col span={12}>
            <div className="join_card">
              <h3>انضم إلى مجتمع السراج</h3>
              <p>مع نخبة من المحاضرين المتخصصين</p>
              <div className="apps_buttons">
                <a href="#">
                  <img
                    src={require("../../../assests/Icons/2x/playstore.png")}
                  />
                </a>
                <a href="#">
                  <img
                    src={require("../../../assests/Icons/2x/appstore.png")}
                  />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};



export default joinSiraj;

import React from "react";
import { Row, Col } from "antd";

import { NavLink } from "react-router-dom";
import "./Footer.scss";

const footer = () => {
  return (
    <div className="index_footer">
      <div className="container">
        <Row>
          <Col
            span={16}
            xs={{ order: 6 }}
            sm={{ order: 6 }}
            md={{ order: 6 }}
            lg={{ order: 6 }}
          >
            <ul>
              <li className="logo_link">
                <NavLink to="/">
                  <img
                    className="logo_footer"
                    src={require("../../../assests/Icons/2x/logo_about.png")}
                  />
                </NavLink>
              </li>
              <li>
                <NavLink to="/" activeClassName="active">
                  الرئيسيه
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink to="/aboutus">عن سراج</NavLink>
              </li>
              <li>
                <NavLink to="/contact"> تواصل معنا</NavLink>
              </li>
              <li>
                <NavLink to="/help">مساعدة</NavLink>
              </li>
              <li>
                <NavLink to="/privacy_policy">سياسة الخصوصية</NavLink>
              </li>
              <li>
                <NavLink to="/terms_conditions">الشروط و الاحكام</NavLink>
              </li>
            </ul>
          </Col>
          <Col
            className="footer_icons"
            span={8}
            xs={{ order: 6 }}
            sm={{ order: 6 }}
            md={{ order: 6 }}
            lg={{ order: 6 }}
          >
            <a href="https://www.google.com/" target="_blank">
              <img
                src={require("../../../assests/Icons/2x/footer_youtube.png")}
              />
            </a>
            <a href="https://www.google.com/" target="_blank">
              <img
                src={require("../../../assests/Icons/2x/footer_twitter.png")}
              />
            </a>
            <a href="https://www.google.com/" target="_blank">
              <img
                src={require("../../../assests/Icons/2x/footer_linkedin.png")}
              />
            </a>
            <a href="https://www.google.com/" target="_blank">
              <img
                src={require("../../../assests/Icons/2x/footer_instgram.png")}
              />
            </a>
            <a href="https://www.google.com/" target="_blank">
              <img
                src={require("../../../assests/Icons/2x/footer_facebook.png")}
              />
            </a>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default footer;

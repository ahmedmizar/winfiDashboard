import React from "react";
import { Button, Row, Col } from "antd";
import "./Header.scss";
const header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header_container">
          <Row>
            <Col
              span={12}
              xs={{ order: 24 }}
              sm={{ order: 24 }}
              md={{ order: 12 }}
              lg={{ order: 12 }}
            >
              <h1>طريقك إلى القرآن</h1>
              <p className="first_p">
                تعلم مع نخبة من معلمين القرآن و التجويد و دروس اللغة العربية و
                العلوم الأسلامية في وقتك المناسب و بأفضل الأسعار
              </p>
              <Button className="join">انضم الان</Button>
              <p className="second_p">مع نخبة من المحاضرين المتخصصين</p>
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
            </Col>
            <Col
              span={12}
              xs={{ order: 24 }}
              sm={{ order: 24 }}
              md={{ order: 12 }}
              lg={{ order: 12 }}
              className="img_container"
            >
              <img src={require("../../../assests/images/header_img2.png")} />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default header;

import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Row, Col } from "antd";
import "./Index.scss";
let imgages = [
    require("../../../assests/images/mob_1.png"),
    require("../../../assests/images/mob_2.png"),
    require("../../../assests/images/mob_3.png"),
    require("../../../assests/images/mob_4.png"),
]
const activeCard = {
    border: "2px solid #25B28F",
    color: "#25B28F"
}
const iconstyle = {
  background: "#25B28F",
 
}
const headingstyle = {
  
  color: "#25B28F"
}

class AppExplanation extends Component {
    state = {
        imgage: imgages[0],
        active: [true, false, false, false],
    };

    changeImage = (id) => {
        this.setState({ imgage: imgages[id] });
        this.changeStyle(id);
        console.log(this.state)
    }
    changeStyle = (id) => {
      const { active } = this.state;
      let result= active;
      active.map((Item, index) => {        
          if (id == index) {
             return  result[index] = true;
          }
          else {
              return  result[index] = false;
          }
        
      })

      this.setState({ active: result }, () => console.log(this.state.active))
  }

    render() {
        const { active } = this.state;

        return (
            <div className="app_explantion">
                <div className="container">
                    <h3 className="header-section">مستعد لرحلة التعلم ؟</h3>
                    <p>وصف عن خطط الاشتراك بشكل عام و باختصار واضح</p>
                    <Row>
                        <Col span={8}>
                            <NavLink
                                to="#"
                                onClick={() => { this.changeImage(0) }}
                                >
                                <div className="card_container" style={active[0] ?  activeCard :null}  >
                                    <div className="card_header" >
                                        <span style={active[0] ?  iconstyle :null}>
                                            <img
                                                src={require("../../../assests/Icons/2x/download_feature.png")}
                                            />
                                        </span>

                                        <h3 style={active[0] ?  headingstyle :null}>حمل التطبيق</h3>
                                    </div>
                                    <p style={active[0] ?  headingstyle :null}>حمل تطبيق سراج من على متجر جوجل أو متجر أبل</p>
                                </div>
                            </NavLink>
                            <NavLink to="#" onClick={() => { this.changeImage(1) }} >
                                <div className="card_container"  style={active[1] ?  activeCard :null}>
                                    <div className="card_header">
                                        <span style={active[1] ?  iconstyle :null}>
                                            <img
                                                src={require("../../../assests/Icons/2x/classes_feature.png")}
                                            />
                                        </span>

                                        <h3 style={active[1] ?  headingstyle :null}>الملف الشخصي</h3>
                                    </div>
                                    <p style={active[1] ?  headingstyle :null}>أبدا في بناء ملفك الشخصي لتحديد أهدافك واختيار مسارك</p>
                                </div>
                            </NavLink>
                        </Col>
                        <Col span={8}>
                            <img src={this.state.imgage} />
                        </Col>
                        <Col span={8}>
                            <NavLink to="#" onClick={() => { this.changeImage(2) }} >
                                <div className="card_container"  style={active[2] ?  activeCard :null}>
                                    <div className="card_header">
                                        <span style={active[2] ?  iconstyle :null}> <img src={require("../../../assests/Icons/2x/category_feature.png")} /> </span>
                                        <h3 style={active[2] ?  headingstyle :null}>حمل التطبيق</h3>
                                    </div>
                                    <p style={active[2] ?  headingstyle :null}>تصفح الأقسام وتعرف على الدورات المختلفة</p>
                                </div>
                            </NavLink>
                            <NavLink to="#" onClick={() => { this.changeImage(3) }}  >
                                <div className="card_container" style={active[3] ?  activeCard :null}>
                                    <div className="card_header">
                                        <span style={active[3] ?  iconstyle :null}>
                                            <img src={require("../../../assests/Icons/2x/manage_feature.png")} />
                                        </span>
                                        <h3 style={active[3] ?  headingstyle :null}>حمل التطبيق</h3>
                                    </div>
                                    <p style={active[3] ?  headingstyle :null}>تابع دروسك بشكل دوري بالمواعيد و التاريخ</p>
                                </div>
                            </NavLink>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default AppExplanation;
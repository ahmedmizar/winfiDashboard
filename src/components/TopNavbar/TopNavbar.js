import React, { Component } from "react";
import { withRouter } from "react-router";
import { Drawer, Button, Menu, Row, Col } from "antd";
import LeftMenu from "../Navbar/LeftMenu";
import RightMenu from "../Navbar/RightMenu";
import { Link, NavLink } from "react-router-dom";
import "./TopNavbar.scss";
import { changeLang } from "../../i18n";
import { getlang } from "../../globals/globals";

class TopNavbar extends Component {
  listener = null;
  state = {
    nav: false,
    flag: null,
    joninbtn: {},
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  changestyle = () => {
    if ((this.props.location.pathname = "/")) {
      this.setState({
        joninbtn: {
          display: "inline-block",
        },
      });
    } else {
      this.setState({
        joninbtn: {
          display: "none",
        },
      });
    }
  };
  componentWillUnmount() {
    window.removeEventListener("scroll");
  }
  handleScroll = () => {
    if (window.pageYOffset > 140) {
      if (!this.state.nav) {
        this.setState({ nav: true });
      }
    } else {
      if (this.state.nav) {
        this.setState({ nav: false });
      }
    }
  };

  changeLangs = () => {
    const { pathname } = this.props;
    console.log(pathname);
    var lang = getlang();
    console.log(lang);
    localStorage.setItem("flag", false);
    if (lang === "en") {
      changeLang("ar");
      if (this.props.changeLan) {
        this.props.changeLan("ar");
      }
      var flag = localStorage.getItem("flag") === "true";
      this.setState({ flag });
    } else {
      changeLang("en");
      if (this.props.changeLan) {
        this.props.changeLan("en");
      }
      var flag = localStorage.getItem("flag") === "false";
      this.setState({ flag });
    }
    this.props.history.push(pathname);
  };

  render() {
    const { flag, joninbtn } = this.state;
    console.log(joninbtn);
    console.log(this.props.location.pathname);

    return (
      <div className={`top_navbar ${this.state.nav && "Nav__black"}`}>
        <div className="container">
          <Row>
            <Col
              span={16}
              xs={{ order: 6 }}
              sm={{ order: 6 }}
              md={{ order: 6 }}
              lg={{ order: 6 }}
            >
              <Menu mode="horizontal">
                <Menu.Item className="logo_linkcontainer">
                  <NavLink to="/" className="logo_link">
                    <img
                      className="logo_header"
                      src={require("../../assests/Icons/2x/logo_nav.png")}
                    />
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="home">
                  <NavLink to="/" activeClassName="active">
                    الرئيسيه
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="blog">
                  <NavLink to="/blog">المدونه</NavLink>
                </Menu.Item>

                <Menu.Item key="contact">
                  <NavLink to="/contact">اتصل بنا</NavLink>
                </Menu.Item>
              </Menu>
            </Col>

            <Col
              className="nav_buttons"
              span={8}
              xs={{ order: 6 }}
              sm={{ order: 6 }}
              md={{ order: 6 }}
              lg={{ order: 6 }}
            >
              {this.props.location.pathname == "/" ? (
                <Button
                  className="join"
                  onChange={this.changestyle}
                  style={this.state.joninbtn}
                >
                  <Link to="/chooseAccount">انضم الان</Link>
                </Button>
              ) : null}
              <Button
                className="switch_language"
                onClick={() => {
                  this.changeLangs();
                }}
              >
                <span>English</span>
                <img
                  src={
                    !flag
                      ? require("../../assests/Icons/2x/english.png")
                      : require("../../assests/Icons/2x/arabic.png")
                  }
                />
              </Button>
            </Col>
          </Row>

          <Button
            className="barsMenu"
            type="primary"
            onClick={this.props.showDrawer}
          >
            <span className="barsBtn"></span>
          </Button>
          <Drawer
            title="Basic Drawer"
            placement="right"
            closable={false}
            onClose={this.props.onClose}
            visible={this.props.visible}
          >
            <LeftMenu />
            <RightMenu />
          </Drawer>
        </div>
      </div>
    );
  }
}

export default withRouter(TopNavbar);

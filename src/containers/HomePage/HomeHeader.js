import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";
import { FormattedMessage } from "react-intl";
import { LANGUAGES } from "../../utils";
import { changeLanguageApp } from "../../store/actions";
import "./NavbarHeader.scss";
import * as actions from "../../store/actions";
import NavbarHeader from "./NavbarHeader";
import { withRouter } from "react-router";
import WOW from "wowjs";

class HomeHeader extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  handleChangeLanguage = (language) => {
    this.props.changeLanguageAppRedux(language);
    //fire redux event :actions
  };
  returnToHome = () => {
    if (this.props.history) {
      this.props.history.push("/home");
    }
  };
  render() {
    const { processLogout, userInfo } = this.props;
    let language = this.props.language;
    return (
      <>
        <div className="home-header-container ">
          <div className="home-header-content">
            <div className="left-content">
              <div className="box-logo">
                <div className="left" onClick={() => this.returnToHome()}>
                  <i class="fas fa-circle"></i>
                </div>
                <div className="right">
                  <h2>
                    <FormattedMessage id="home-header.ministry" />
                  </h2>
                  <p>
                    <FormattedMessage id="home-header.departmentOfTourism" />
                  </p>
                </div>
              </div>
            </div>
            <div className="center-content">
              <div className="child-content box1">
                <div className="search">
                  <input
                    className="input-search"
                    placeholder="Search..."
                  ></input>
                  <i className=" fas fa-search"></i>
                </div>
              </div>

              <div className="child-content">
                <div className="text-header ">
                  <a href="http://localhost:3000/login">
                    <button className="btn-register mx-2">
                      <FormattedMessage id="home-header.login" />
                    </button>
                  </a>

                  <a href="http://localhost:3000/register">
                    <button className="btn-register sign">
                      <FormattedMessage id="home-header.register" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="right-content">
              <i className="far fa-flag"></i>
              <div
                className={
                  language === LANGUAGES.VI
                    ? "language-vi active"
                    : "language-vi"
                }
              >
                <span onClick={() => this.handleChangeLanguage(LANGUAGES.VI)}>
                  VN
                </span>
              </div>
              <div
                className={
                  language === LANGUAGES.EN
                    ? "language-en active"
                    : "language-en"
                }
              >
                <span onClick={() => this.handleChangeLanguage(LANGUAGES.EN)}>
                  EN
                </span>
              </div>
              <div className="text-support">
                <i className=" fas fa-question-circle"></i>
                <FormattedMessage id="home-header.support" />
              </div>
              <span className="wellcom-admin mx-3">
                <FormattedMessage id="home-header.wellcom" />{" "}
                {userInfo && userInfo.firstName && userInfo.lastName
                  ? userInfo.firstName + " " + userInfo.lastName
                  : ""}
              </span>

              <div className="btn btn-logout mx-3" onClick={processLogout}>
                <i className="fas fa-sign-out-alt"></i>
              </div>
            </div>
          </div>
        </div>

        <NavbarHeader />
        {this.props.isShowBanner === true && (
          <div className="home-header-banner">
            <div className="background-gradient">
              {/* <h1 className="text1">
              <FormattedMessage id="banner-header.medical-background" />
            </h1>
            <h1 className="text2">
              <FormattedMessage id="banner-header.health-overview" />
            </h1>
            <div className="search">
              <i className=" fas fa-search"></i>
              <input className="input-search" placeholder="Search..."></input>
            </div> */}
              <div className="backg-down">
                <div className="option1">
                  <div
                    className="child-option wow slideInUp"
                    data-wow-offset="100"
                    data-wow-delay="0s"
                    // data-wow-duration="1s"
                  >
                    <div className="icon">
                      <i class="fas fa-umbrella-beach"></i>
                      <p>Vui ch??i</p>
                    </div>
                    <div className="text-box-down">
                      <FormattedMessage id="banner-header.xuyenViet" />
                    </div>
                  </div>
                  <div
                    className="child-option wow slideInUp"
                    data-wow-offset="100"
                    data-wow-delay="0.25s"
                    // data-wow-duration="1s"
                  >
                    <div className="icon">
                      <i className="fas fa-search"></i>
                      <p>T??m tour</p>
                    </div>
                    <div className="text-box-down">
                      <FormattedMessage id="banner-header.trongnuoc" />
                    </div>
                  </div>
                  <div
                    className="child-option wow slideInUp"
                    data-wow-offset="100"
                    data-wow-delay="0.5s"
                    // data-wow-duration="1s"
                  >
                    <div className="icon">
                      <i class="fas fa-plane-departure"></i>
                      <p>V?? m??y bay</p>
                    </div>
                    <div className="text-box-down">
                      <FormattedMessage id="banner-header.veMayBay" />
                    </div>
                  </div>
                  <div
                    className="child-option wow slideInUp"
                    data-wow-offset="100"
                    data-wow-delay="0.5s"
                    // data-wow-duration="1s"
                  >
                    <div className="icon">
                      <i class="fas fa-hotel"></i>
                      <p>Kh??ch s???n</p>
                    </div>
                    <div className="text-box-down">
                      <FormattedMessage id="banner-header.hotel" />
                    </div>
                  </div>
                  <div
                    className="child-option wow slideInUp"
                    data-wow-offset="100"
                    data-wow-delay="0.25s"
                    // data-wow-duration="1s"
                  >
                    <div className="icon">
                      <i class="fas fa-hotel"></i>
                      <p>Vui ch??i</p>
                    </div>
                    <div className="text-box-down">
                      <FormattedMessage id="banner-header.car" />
                    </div>
                  </div>
                  <div
                    className="child-option wow slideInUp"
                    data-wow-offset="100"
                    data-wow-delay="0s"
                    // data-wow-duration="1s"
                  >
                    <div className="icon">
                      <i className="fas fa-briefcase-medical"></i>
                      <p>T??m tour</p>
                    </div>
                    <div className="text-box-down">
                      <FormattedMessage id="banner-header.service" />
                    </div>
                  </div>
                </div>
                {/* ===========opption 2======== */}
                <div className="option">
                  <div
                    className="child-option wow animate__bounceIn"
                    data-wow-offset="100"
                    data-wow-delay="1.5s"
                    data-wow-duration="2s"
                  >
                    <div className="icon">
                      <i className="fas fa-hospital"></i>
                    </div>
                    <div className="text-box-down">
                      <FormattedMessage id="option2.xuyenViet" />
                    </div>
                  </div>
                  <div
                    className="child-option wow animate__bounceIn"
                    data-wow-offset="100"
                    data-wow-delay="1.75s"
                    data-wow-duration="2s"
                  >
                    <div className="icon">
                      <i className="fas fa-hospital"></i>
                    </div>
                    <div className="text-box-down">
                      <FormattedMessage id="option2.trongnuoc" />
                    </div>
                  </div>
                  <div
                    className="child-option wow animate__bounceIn"
                    data-wow-offset="100"
                    data-wow-delay="2s"
                    data-wow-duration="2s"
                  >
                    <div className="icon">
                      <i className="fas fa-hospital"></i>
                    </div>
                    <div className="text-box-down">
                      <FormattedMessage id="option2.service" />
                    </div>
                  </div>
                  <div
                    className="child-option wow animate__bounceIn"
                    data-wow-offset="100"
                    data-wow-delay="2.25s"
                    data-wow-duration="2s"
                  >
                    <div className="icon">
                      <i className="fas fa-hospital"></i>
                    </div>
                    <div className="text-box-down">
                      <FormattedMessage id="option2.veMayBay" />
                    </div>
                  </div>
                  <div
                    className="child-option wow animate__bounceIn"
                    data-wow-offset="100"
                    data-wow-delay="2.5s"
                    data-wow-duration="2s"
                  >
                    <div className="icon">
                      <i className="fas fa-hospital"></i>
                    </div>
                    <div className="text-box-down">
                      <FormattedMessage id="option2.booking" />
                    </div>
                  </div>
                  <div
                    className="child-option wow animate__bounceIn"
                    data-wow-offset="100"
                    data-wow-delay="2.75s"
                    data-wow-duration="2s"
                  >
                    <div className="icon">
                      <i className="fas fa-hospital"></i>
                    </div>
                    <div className="text-box-down">
                      <FormattedMessage id="option2.hotel" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
    userInfo: state.user.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language)),
    processLogout: () => dispatch(actions.processLogout()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomeHeader)
);

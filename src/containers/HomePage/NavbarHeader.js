import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

class NavbarHeader extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-green">
        <div className="container">
            <a className="navbar-brand" href="#">
                <img src="/img/logo.png" alt=""/>
            </a>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation"></button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="#"><FormattedMessage id="navbar-header.home" /> <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><FormattedMessage id="navbar-header.news" /></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><FormattedMessage id="navbar-header.travle" /></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><FormattedMessage id="navbar-header.holtel" /></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><FormattedMessage id="navbar-header.promotion" /></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Hotline: 1900 1839</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><FormattedMessage id="navbar-header.contact" /></a>
                    </li>
    
                </ul>
    
            </div>
        </div>
    </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarHeader);

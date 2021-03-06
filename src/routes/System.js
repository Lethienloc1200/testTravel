import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
// import UserManage from "../containers/System/UserManage";
import TourRedux from "../containers/System/Admin/TourRedux";
import TableManageBooking from "../containers/System/Admin/TableManageBooking";
import UserRedux from "../containers/System/Admin/UserRedux";

import Header from "../containers/Header/Header";
import HomePage from "../containers/HomePage/HomePage";

class System extends Component {
  render() {
    const { systemMenuPath, isLoggedIn } = this.props;
    return (
      <React.Fragment>
        {isLoggedIn && <Header />}
        <div className="system-container">
          <div className="system-list">
            <Switch>
              {/* <Route path="/system/user-manage" component={UserManage} /> */}
              <Route path="/system/tour-redux" component={TourRedux} />
              <Route path="/system/user-redux" component={UserRedux} />
              <Route
                path="/system/table-booking"
                component={TableManageBooking}
              />
              <Route path="/home" component={HomePage} />

              <Route
                component={() => {
                  return <Redirect to={systemMenuPath} />;
                }}
              />
            </Switch>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    systemMenuPath: state.app.systemMenuPath,
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(System);

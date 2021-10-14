import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

class Dropdowns extends Component {
  render() {
    return (
      <>
        <div className="section-share  dropdowns">
          <div className="section-container">
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-danger dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Địa điểm khởi hành
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Separated link
                </a>
              </div>
            </div>

            <div class="btn-group">
              <button
                type="button"
                class="btn btn-danger dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Action
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Separated link
                </a>
              </div>
            </div>

            {/* === */}
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-danger dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Action
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Separated link
                </a>
              </div>
            </div>
            {/* == */}
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-danger dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Action
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Separated link
                </a>
              </div>
            </div>
            {/* ===== */}
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-danger dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Action
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Separated link
                </a>
              </div>
            </div>
            {/* ===tìm kiếm */}
            <div class="btn-group">
              <button className="btn-register sign">Tìm kiếm</button>
            </div>
          </div>
        </div>
      </>
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

export default connect(mapStateToProps, mapDispatchToProps)(Dropdowns);

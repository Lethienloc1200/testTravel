import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import "./Footer.css";
import WOW from "wowjs";
class Footer extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
      <div className="footer">
        {/* <!--                  e--> */}
        <footer className="footer">
          <div className="container bottom_border">
            <div className="row">
              <div
                data-wow-offset="100"
                data-wow-duration="2s"
                className="wow animate__slideInUp col-sm-4  col-12"
              >
                <h5 className="headin5_amrc col_white_amrc pt2">
                  HỖ TRỢ KHÁCH HÀNG
                </h5>
                <p className="mb10  p__nhon">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
                <p className="p__nhon">
                  <i className="fa fa-location-arrow"></i> 02/54 An Dương Vương
                  - Quy Nhơn{" "}
                </p>
                <p className="p__nhon">
                  <i className="fa fa-phone"></i> + 0388502719{" "}
                </p>
                <p className="p__nhon">
                  <i className="fa fa fa-envelope"></i> Lethienloc1200@gmail.com{" "}
                </p>
              </div>

              <div
                data-wow-offset="100"
                data-wow-duration="2s"
                className="wow animate__slideInUp col-sm-4   col-6 col"
              >
                <h5 className="headin5_amrc col_white_amrc pt2">Giới thiệu</h5>
                {/* <!--==========================--> */}
                <ul className="footer_ul_amrc">
                  <li className="p__nhonnn">
                    <a href="http://facebook.com/lethienloc1200">
                      Giới thiệu Về TRAVEL TOUR
                    </a>
                  </li>
                  <li>
                    <a href="http://facebook.com/lethienloc1200">Tuyển dụng</a>
                  </li>
                  <li>
                    <a href="http://facebook.com/lethienloc1200">
                      Chính sách bảo mật
                    </a>
                  </li>
                  <li>
                    <a href="http://facebook.com/lethienloc1200">
                      Bán hàng doanh nghiệp
                    </a>
                  </li>
                  <li>
                    <a href="http://facebook.com/lethienloc1200">
                      Điều khoản sử dụng
                    </a>
                  </li>
                  <li>
                    <a href="http://facebook.com/lethienloc1200">
                      Chính sách giải quyết khiếu nại
                    </a>
                  </li>
                  <li>
                    <a href="http://facebook.com/lethienloc1200">
                      Chính sách thanh toán
                    </a>
                  </li>
                </ul>
                {/* <!--f===========================e--> */}
              </div>

              <div
                data-wow-offset="100"
                data-wow-duration="2s"
                className="wow animate__slideInUp col-sm-4  col-6 col"
              >
                <h5 className="headin5_amrc col_white_amrc pt2">
                  Hợp tác liên kết
                </h5>
                {/* <!--headin5_amrc--> */}
                <ul className="footer_ul_amrc">
                  <li>
                    <a href="http://face.com">Công ty trách nhiệm ABC</a>
                  </li>
                  <li>
                    <a href="http://face.com"> ACS COMPANY</a>
                  </li>
                </ul>
                {/* <!--=======================e--> */}
              </div>

              <div
                data-wow-offset="100"
                data-wow-duration="2s"
                className=" wow animate__slideInUp col-sm-4   col-12 col"
              >
                <h5 className="headin5_amrc col_white_amrc pt2">Follow us</h5>

                <ul className="footer_ul2_amrc">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook fleft padding-right"></i>
                      Facebook{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-youtube fleft padding-right"></i>
                      Youtube{" "}
                    </a>
                  </li>
                </ul>
                {/* <!--=========================--> */}
              </div>
            </div>
          </div>

          <div className="container">
            <div className="border border-primary border-3 mb-2"></div>
            {/* <!-================================--> */}
            <p className="text-center">
              Copyright @2021 | Designed With by{" "}
              <a href="#">Your Company Name</a>
            </p>

            <ul className="social_footer_ul">
              <li>
                <a href="http://facebook.com">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="http://facebook.com">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="http://facebook.com">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="http://facebook.com">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
            {/* <!--===============================--> */}
          </div>
        </footer>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Footer);

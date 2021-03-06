import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import WOW from "wowjs";

class Tourhots extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
      <div
        className="section-share  wow slideInLeft"
        data-wow-offset="100"
        data-wow-duration="1.5s"
      >
        <div className="section-container">
          <div className="section-header">
            <div className="text-header-section">Tour đang hot</div>
            <button className="text-right">Xem thêm</button>
          </div>
          <Slider {...this.props.settings}>
            <div className="customize-img start star ">
              <div className="image-section img-tourhots" />
              <div className="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <p>5 star Review</p>
              </div>
              <div className="text-discript">
                <p className="text">Tour Châu Đốc</p>
                <p className="text-nho">Lộ trình: HCM-Đà Nẫng</p>
                <p className="text-nho">Phương tiện: Ô tô</p>
                <p className="text-nho">Khách sạn : 2 sao</p>
              </div>
            </div>

            <div className="customize-img start star">
              <div className="image-section img-tourhots1" />
              <div className="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <p>5 star Review</p>
              </div>
              <div className="text-discript">
                <p className="text">Tour BÀ NÀ</p>
                <p className="text-nho">Lộ trình:Đà Nẫng</p>
                <p className="text-nho">Phương tiện: Ô tô</p>
                <p className="text-nho">Khách sạn : 4 sao</p>
              </div>
            </div>
            <div className="customize-img start star">
              <div className="image-section img-tourhots2" />
              <div className="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <p>5 star Review</p>
              </div>
              <div className="text-discript">
                <p className="text">Phong Nha Kẻ Bàng</p>
                <p className="text-nho">Lộ trình:ĐÀ Nẫng</p>
                <p className="text-nho">Phương tiện: Ô tô</p>
                <p className="text-nho">Khách sạn : 6sao</p>
              </div>
            </div>
            <div className="customize-img start star">
              <div className="image-section img-tourhots3" />
              <div className="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <p>5 star Review</p>
              </div>
              <div className="text-discript">
                <p className="text">Tour Châu Đốc</p>
                <p className="text-nho">Lộ trình: HCM-Đà Nẫng</p>
                <p className="text-nho">Phương tiện: Ô tô</p>
                <p className="text-nho">Khách sạn : 2 sao</p>
              </div>
            </div>
            <div className="customize-img start star">
              <div className="image-section img-tourhots4" />
              <div className="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <p>5 star Review</p>
              </div>
              <div className="text-discript">
                <p className="text">Tour Châu Đốc</p>
                <p className="text-nho">Lộ trình: HCM-Đà Nẫng</p>
                <p className="text-nho">Phương tiện: Ô tô</p>
                <p className="text-nho">Khách sạn : 2 sao</p>
              </div>
            </div>
            <div className="customize-img start star">
              <div className="image-section img-tourhots" />
              <div className="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <p>5 star Review</p>
              </div>
              <div className="text-discript">
                <p className="text">Tour Châu Đốc</p>
                <p className="text-nho">Lộ trình: HCM-Đà Nẫng</p>
                <p className="text-nho">Phương tiện: Ô tô</p>
                <p className="text-nho">Khách sạn : 2 sao</p>
              </div>
            </div>
          </Slider>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Tourhots);

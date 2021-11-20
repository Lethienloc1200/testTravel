import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import * as actions from "../../../store/actions";
import { LANGUAGES } from "../../../utils";
import { withRouter } from "react-router";
import HomeHeader from "../../../containers/HomePage/HomeHeader";
import Footer from "../../../containers/HomePage/Footer";
import "./TourDetail.scss";
import { getDetailInforTour } from "../../../services/userService";
import Comment from "../SocialPlugin/Comment";
import LikeShare from "../SocialPlugin/LikeShare";
import WOW from "wowjs";
import ModalBookingTour from "../ModalBookingTour/ModalBookingTour";
class TourDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailTour: {},
      isOpenModalUser: false,
    };
  }
  componentDidUpdate(prevProps, prevState, snapshot) {}
  async componentDidMount() {
    new WOW.WOW().init();

    if (
      this.props.match &&
      this.props.match.params &&
      this.props.match.params.id
    ) {
      let id = this.props.match.params.id;
      let res = await getDetailInforTour(id);

      if (res && res.errCode === 0) {
        this.setState({
          detailTour: res.data,
        });
      }
    }
  }
  commitComment = () => {
    alert("Chúc mừng bạn đánh giá chưa đc gửi 😎😎😎");
  };
  handleAddNewUser = () => {
    this.setState({
      isOpenModalUser: true,
    });
  };
  toggleUserModal = () => {
    this.setState({
      isOpenModalUser: !this.state.isOpenModalUser,
    });
  };
  render() {
    let { language } = this.props;
    let { detailTour } = this.state;
    console.log("check tour top detail ", detailTour);

    let currentURL =
      +process.env.REACT_APP_IS_LOCALHOST === 1
        ? "https://nextflix-clone-ffe5e.web.app/browse"
        : window.location.href;
    console.log("cuuuuuuurent ", currentURL);
    // ? "https://eric-restaurant-bot-tv.herokuapp.com/"/

    return (
      <>
        <HomeHeader isShowBanner={false} />
        <ModalBookingTour
          isOpen={this.state.isOpenModalUser}
          toggleFromParent={this.toggleUserModal}
          createNewUser={this.createNewUser}
        />
        <div className="container-detail">
          <div className="content-detail">
            <h3 className=" header-detail       animate__animated animate__bounce animate__delay-2s">
              Trải nghiệm một chuyến du lịch thật ý nghĩa cùng nhau
            </h3>
            <div className="top">
              <div className="left">
                <div className="image-tour">
                  <img
                    className="imgtour"
                    style={{
                      backgroundImage: `url(${detailTour.image})`,
                    }}
                  />
                </div>
              </div>
              <div className="right">
                <h3 className="place">
                  Tour du lịch: 🎇 <b>{detailTour.place}</b>
                </h3>

                <span>
                  <button
                    className="btn btn-primary book-tour wow animate__swing"
                    data-wow-iteration="20"
                    data-wow-duration="2s"
                    data-wow-delay="2s"
                    onClick={() => this.handleAddNewUser()}
                  >
                    Đặt tour
                  </button>
                </span>
                <p className="place">
                  Khách sạn: <b>{detailTour.hotel}</b>
                </p>
                <p className="place">
                  Phương tiện di chuyển: <b>{detailTour.vehicle}</b>
                </p>
                <p className="place">
                  Lộ trình: <b>{detailTour.way}</b>
                </p>
                <p className="place">
                  Giá: 🌿 <b>{detailTour.money}</b>
                </p>
                <p>
                  <p>{detailTour.description}</p>
                </p>
              </div>
            </div>
            <hr></hr>
            <hr></hr>
            <div className="bottom">
              <div className="left">
                <div
                  dangerouslySetInnerHTML={{
                    __html: detailTour.contentHTML,
                  }}
                ></div>
              </div>
              <hr></hr>
              <div className="right">
                <div className="comment-tour">
                  <h3>Đánh giá tour</h3>
                  <div>💛💛💛💛🤍</div>
                  <input type="text" placeholder="Nhập vào tên:" />
                  <input type="text" placeholder="Thời gian bạn đi du lịch" />
                  <textarea type="text" placeholder="Nội dung đánh giá" />
                  <button
                    className="btn btn-primary"
                    onClick={() => this.commitComment()}
                  >
                    Gửi
                  </button>
                </div>
                <hr></hr>
                <div>
                  {" "}
                  <LikeShare dataHref={currentURL}></LikeShare>
                </div>
                <hr></hr>
                <br></br>

                <Comment dataHref={currentURL}></Comment>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
    topToursRedux: state.admin.topTours,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadTopTours: () => dispatch(actions.fetchTopTour()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TourDetail)
);

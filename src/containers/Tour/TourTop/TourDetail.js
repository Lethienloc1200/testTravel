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
import {
  getDetailInforTour,
  getDetailInforComment,
} from "../../../services/userService";
import Comment from "../SocialPlugin/Comment";
import LikeShare from "../SocialPlugin/LikeShare";
import WOW from "wowjs";
import ModalBookingTour from "../ModalBookingTour/ModalBookingTour";
import CommentRedux from "../../System/Admin/CommentRedux";
class TourDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailTour: {},
      arrComment: [],

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
      let res1 = await getDetailInforComment(id);
      console.log("oooooooooooooooookkkkkkkkkkkkkkkk", res);
      console.log("oooooooooooooooookkkkkkkkkkkkkkkk1", res1);

      if (res && res.errCode === 0) {
        this.setState({
          detailTour: res.data,
          arrComment: res1.data,
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
    let { detailTour, arrComment } = this.state;
    console.log("check tour top detail ", detailTour);
    console.log("check tour top detail mảng ", arrComment);

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
                <div className="hotel-titlee">
                  <p>Thông tin Khách sạn</p>
                  <p className="descript-hotel">{detailTour.description}</p>
                </div>
              </div>
              <div className="right">
                <h3 className="place">Tour du lịch: 🎇 {detailTour.place}</h3>
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
                <p className="place">Khách sạn: {detailTour.hotel}</p>
                <p className="place">
                  Phương tiện di chuyển: {detailTour.vehicle}
                </p>
                <p className="place">Lộ trình: {detailTour.way}</p>
                <p className="place">Giá: 🌿 {detailTour.money}</p>

                <div className="img-carosel-hotel">
                  <div
                    id="carouselExampleControls"
                    class="carousel slide"
                    data-ride="carousel"
                  >
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img
                          src={`${detailTour.image1}`}
                          class="d-block w-100 img-hotel-detail"
                          alt="..."
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src={`${detailTour.image2}`}
                          class="d-block w-100 img-hotel-detail"
                          alt="..."
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src={`${detailTour.image3}`}
                          class="d-block w-100 img-hotel-detail"
                          alt="..."
                        />
                      </div>
                    </div>
                    <button
                      class="carousel-control-prev"
                      type="button"
                      data-target="#carouselExampleControls"
                      data-slide="prev"
                    >
                      <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="sr-only">Previous</span>
                    </button>
                    <button
                      class="carousel-control-next"
                      type="button"
                      data-target="#carouselExampleControls"
                      data-slide="next"
                    >
                      <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="sr-only">Next</span>
                    </button>
                  </div>
                </div>
              </div>
              <br></br>
            </div>
            <hr></hr>
            <hr></hr>
            <div className="bottom">
              <div className="left">
                <div
                  className="descript-tour-content"
                  dangerouslySetInnerHTML={{
                    __html: detailTour.contentHTML,
                  }}
                ></div>

                <iframe
                  src={`${detailTour.map}`}
                  width="600"
                  height="450"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </div>
              <hr></hr>
              <div className="right">
                <CommentRedux detailTour={detailTour} arrComment={arrComment} />

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
    userInfo: state.user.userInfo,
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
    topToursRedux: state.admin.topTours,
    // listComments: state.admin.comments,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // loadTopTours: () => dispatch(actions.fetchTopTour()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TourDetail)
);

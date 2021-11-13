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
class TourDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailTour: {},
    };
  }
  componentDidUpdate(prevProps, prevState, snapshot) {}
  async componentDidMount() {
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

  render() {
    let { language } = this.props;
    let { detailTour } = this.state;
    console.log("check tour top detail ", detailTour);

    return (
      <>
        <HomeHeader isShowBanner={false} />
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
                <p className="place">
                  Khách sạn:🚞 <b>{detailTour.hotel}</b>
                </p>
                <p className="place">
                  Phương tiện di chuyển: 🚗 <b>{detailTour.vehicle}</b>
                </p>
                <p className="place">
                  Lộ trình: 👟 <b>{detailTour.way}</b>
                </p>
                <p className="place">
                  Giá: 🌿 <b>{detailTour.money}</b>
                </p>
              </div>
            </div>
            <hr></hr>
            <hr></hr>
            <div className="bottom">
              <div className="left">
                <h3>Mô tả chi tiết tour</h3>
                {detailTour.description}
                <h3> ở dưới là minh fix tĩnh 😂😂😂</h3>
                <hr></hr>
                Nôi dung miêu tả tour du lịch <br />{" "}
                <img src="https://media-cdn.laodong.vn/Storage/NewsPortal/2017/8/28/551691/Du-Lich_2.jpg" />{" "}
                <br />
                <br />
                <img src="https://lh3.googleusercontent.com/proxy/RYRqbF-1XzwUqTdKPeOKsbyrdmU5zpnXvdAEmK13vPYgu8a2hUZhvhyUW1wYPlYAsduu_q2v7_VOQDrpxt1cXF785Ub2x5LkvWC22BP5n5AmHMJQbSE5uDeG2jqIGLFozmecmg99Lt7kyP4tw0xa90SJhiWqweAq_tmN8u12WrQ" />{" "}
                <br />
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

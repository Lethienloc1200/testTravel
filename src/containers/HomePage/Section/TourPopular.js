import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import * as actions from "../../../store/actions";
import { LANGUAGES } from "../../../utils";
import { withRouter } from "react-router";
import WOW from "wowjs";
class TourPopular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrTours: [],
    };
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.topToursRedux !== this.props.topToursRedux) {
      this.setState({
        arrTours: this.props.topToursRedux,
      });
    }
  }
  componentDidMount() {
    new WOW.WOW().init();
    this.props.loadTopTours();
  }
  handleViewDetailTour = (tour) => {
    console.log("view detail tour", tour.id);
    this.props.history.push(`/detail-tour/${tour.id}`);
  };
  render() {
    let { language } = this.props;
    let { arrTours } = this.state;
    console.log("check tour top ", arrTours);
    return (
      <div
        className="section-share tourhots wow slideInRight"
        data-wow-offset="50"
        data-wow-duration="1.5s"
      >
        <div className="section-container">
          <div className="section-header">
            <div className="text-header-section">Tour Phổ biến</div>
            <button className="text-right">Xem thêm</button>
          </div>
          <Slider {...this.props.settings}>
            {arrTours &&
              arrTours.length > 0 &&
              arrTours.map((item, index) => {
                let imageBase64 = "";
                if (item.image) {
                  imageBase64 = new Buffer(item.image, "base64").toString(
                    "binary"
                  );
                }
                return (
                  <div
                    key={index}
                    onClick={() => this.handleViewDetailTour(item)}
                    className="customize-img start star "
                  >
                    <div
                      className="image-section img-tourPopular "
                      style={{ backgroundImage: `url(${imageBase64})` }}
                    />
                    <div className="star">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <p>5 star Review</p>
                    </div>
                    <div className="text-discript">
                      <p className="text">🎇{item.place}</p>
                      <p className="text-nho">{item.way}</p>
                      <p className="text-nho">Khách sạn{item.hotel}</p>
                      <p className="text-nho">Giá:{item.money}</p>
                    </div>
                  </div>
                );
              })}
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
    topToursRedux: state.admin.topTours,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadTopTours: () => dispatch(actions.fetchTopTour()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TourPopular)
);

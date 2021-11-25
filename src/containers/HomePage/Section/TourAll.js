import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import WOW from "wowjs";
import { withRouter } from "react-router";
import "./TourAll.scss";

class TourAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrTours: [],

      filter: "",
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

  onChangeInputSearch = (event, id) => {
    this.setState({
      filter: event.target.value,
    });
  };

  render() {
    console.log("vvvvvvvvv", this.state);
    let { language } = this.props;
    let { arrTours, filter } = this.state;

    let DataSearch = arrTours.filter((item) => {
      if (filter == "") {
        return item;
      } else if (
        item.place.toLowerCase().includes(filter.toLocaleLowerCase()) ||
        item.way.toLowerCase().includes(filter.toLocaleLowerCase()) ||
        item.money.toLowerCase().includes(filter.toLocaleLowerCase())
      ) {
        return item;
      }
    });

    return (
      <>
        {" "}
        <div className="one-tour">
          <div className="header-tour-all">
            <div className="left">
              <h2 className="title-tourAll">
                Xách ba lô lên và đi, cùng tận hưởng niềm vui cuộc sống
              </h2>
            </div>
            <div className="right">
              <div className="search">
                <input
                  className="input-search"
                  placeholder="Search theo tên, giá, lộ trình."
                  value={filter}
                  onChange={(event) =>
                    this.onChangeInputSearch(event, "filter")
                  }
                ></input>
                <i className=" fas fa-search"></i>
              </div>
            </div>
          </div>

          {DataSearch &&
            DataSearch.length > 0 &&
            DataSearch.map((item, index) => {
              let imageBase64 = "";
              if (item.image) {
                imageBase64 = new Buffer(item.image, "base64").toString(
                  "binary"
                );
              }
              return (
                <div key={index} className="customize-img start star ">
                  <div
                    className="image-section img-tourall"
                    onClick={() => this.handleViewDetailTour(item)}
                    style={{ backgroundImage: `url(${imageBase64})` }}
                  />
                  <div className="starr">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <p>5 star Review</p>
                  </div>
                  <div className="text-discript">
                    <p className="text">🎇{item.place}</p>
                    <p className="text-nho ">{item.way}</p>
                    <p className="text-nho">Khách sạn{item.hotel}</p>
                    <p className="text-nho">Giá:{item.money}</p>
                  </div>
                </div>
              );
            })}
        </div>
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
  connect(mapStateToProps, mapDispatchToProps)(TourAll)
);

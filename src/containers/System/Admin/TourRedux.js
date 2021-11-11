import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { getAllCodeService } from "../../../services/userService";
import { LANGUAGES, CRUD_ACTIONS, CommonUtils } from "../../../utils";
import * as actions from "../../../store/actions";
import "./TourRedux.scss";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import TableManageTour from "./TableManageTour";

class TourRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previewImgUrl: "",
      isOpen: false,
      action: "",

      tourEditId: "",
      place: "",
      description: "",
      image: "",
      way: "",
      vehicle: "",
      hotel: "",
      money: "",
    };
  }

  async componentDidMount() {}
  componentDidUpdate(prevProps, PrevState, snapshot) {
    if (prevProps.listTours !== this.props.listTours) {
      this.setState({
        place: "",
        description: "",
        image: "",
        way: "",
        vehicle: "",
        hotel: "",
        money: "",

        action: CRUD_ACTIONS.CREATE,
        previewImgUrl: "",
      });
    }
  }

  handleOnChangeImage = async (event) => {
    let data = event.target.files;
    let file = data[0];
    if (file) {
      let Base64 = await CommonUtils.getBase64(file);
      let objectUrl = URL.createObjectURL(file);
      this.setState({
        previewImgUrl: objectUrl,
        image: Base64,
      });
    }
  };

  openPreviewImage = () => {
    if (!this.state.previewImgUrl) return;
    this.setState({
      isOpen: true,
    });
  };
  onChangeInput = (event, id) => {
    let copyState = { ...this.state, isOpen: false };
    copyState[id] = event.target.value;

    this.setState({
      ...copyState,
    });
  };
  checkValidateInput = () => {
    let isValid = true;
    let arrCheck = ["place", "description", "way", "vehicle", "hotel", "money"];

    for (let i = 0; i < arrCheck.length; i++) {
      if (!this.state[arrCheck[i]]) {
        isValid = false;
        alert("Please enter a valid " + arrCheck[i]);
        break;
      }
    }
    return isValid;
  };
  handleSaveTour = () => {
    let isValid = this.checkValidateInput();
    if (isValid === false) return;
    console.log("le thiien loc", this.state);

    // let { action } = this.state;
    //fire redux event create
    // if (action === CRUD_ACTIONS.CREATE) {
      this.props.createNewTour({
        place: this.state.place,
        description: this.state.description,
        image: this.state.image,
        way: this.state.way,
        vehicle: this.state.vehicle,
        hotel: this.state.hotel,
        money: this.state.money,
      });
    // }

    // fire redux event edit
    // if (action === CRUD_ACTIONS.EDIT) {
      // this.props.editATourRedux({
      //   id: this.state.tourEditId,
      //   place: this.state.place,
      //   description: this.state.description,
      //   image: this.state.image,
      //   way: this.state.way,
      //   vehicle: this.state.vehicle,
      //   hotel: this.state.hotel,
      //   money: this.state.money,
      // });
    // }
  };

  handleEditTourFromParent = (tour) => {
    console.log("hanfle edit tour", tour);
    let imageBase64 = "";
    if (tour.image) {
      imageBase64 = new Buffer(tour.image, "base64").toString("binary");
    }
    this.setState({
      place: tour.place,
      description: tour.description,
      way: tour.way,
      vehicle: tour.vehicle,
      hotel: tour.hotel,
      money: tour.money,
      image: "",
      previewImgUrl: imageBase64,
      action: CRUD_ACTIONS.EDIT,
      tourEditId: tour.id,
    });
  };

  render() {
    let language = this.props.language;
    let { place, description, way, vehicle, hotel, money, image } = this.state;
    // console.log(this.state);
    return (
      <div className="user-redux-container">
        <div className="title">TOUR REDUX </div>
        <div className="user-rexdux-body">
          <div className="container mb-5">
            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  Place
                  <input
                    required
                    type="place"
                    className="form-control"
                    value={place}
                    onChange={(event) => this.onChangeInput(event, "place")}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  vehicle
                  <input
                    required
                    type="text"
                    className="form-control"
                    value={vehicle}
                    onChange={(event) => this.onChangeInput(event, "vehicle")}
                  />
                </div>
                <div className="form-group col-md-6 mx-2">
                  Way
                  <input
                    required
                    type="text"
                    className="form-control"
                    value={way}
                    onChange={(event) => this.onChangeInput(event, "way")}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group col-md-3">
                  Hotel
                  <input
                    required
                    type="text"
                    className="form-control"
                    value={hotel}
                    onChange={(event) => this.onChangeInput(event, "hotel")}
                  />
                </div>
                <div className="form-group col-md-9 mx-2">
                  Money
                  <input
                    type="text"
                    className="form-control"
                    value={money}
                    onChange={(event) => this.onChangeInput(event, "money")}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group  col-6 col-md-3 ">
                  <div className="box-upload-image">
                    <input
                      id="image-abc"
                      type="file"
                      hidden
                      onChange={(event) => this.handleOnChangeImage(event)}
                    />
                    <label htmlFor="image-abc" className="upload-lable">
                      <FormattedMessage id="admin-form.image" />{" "}
                      <i className="fas fa-upload"></i>
                    </label>
                    <div
                      className="image-picture"
                      style={{
                        backgroundImage: `url(${this.state.previewImgUrl})`,
                      }}
                      onClick={() => this.openPreviewImage()}
                    ></div>
                  </div>
                </div>
                <div className="form-group col-md-9 mx-2">
                  description{" "}
                  <textarea
                    style={{ height: "200px", width: "100%" }}
                    type="description"
                    required
                    className="form-control"
                    value={description}
                    onChange={(event) =>
                      this.onChangeInput(event, "description")
                    }
                  />
                </div>
              </div>

              <button
                type="button"
                className={
                  this.state.action === CRUD_ACTIONS.EDIT
                    ? "btn btn-warning mt-3 button_padding"
                    : "btn btn-primary mt-3 button_padding"
                }
                onClick={() => this.handleSaveTour()}
              >
                {this.state.action === CRUD_ACTIONS.EDIT
                  ? "Edit tour"
                  : "Save tour"}
              </button>
            </form>
            <TableManageTour
              handleEditTourFromParentKey={this.handleEditTourFromParent}
              action={this.state.action}
            />
            <div className="box-space"></div>
          </div>
        </div>

        {this.state.isOpen === true && (
          <Lightbox
            mainSrc={this.state.previewImgUrl}
            onCloseRequest={() => this.setState({ isOpen: false })}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    listTours: state.admin.tours,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createNewTour: (data) => dispatch(actions.createNewTour(data)),
    fetchAllTourRedux: () => dispatch(actions.fetchAllTourStart()),
    // editATourRedux: (data) => dispatch(actions.editATour(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TourRedux);

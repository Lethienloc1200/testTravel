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
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
// import style manually
import "react-markdown-editor-lite/lib/index.css";

// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);

// Finish!

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
      image1: "",
      image2: "",
      image3: "",
      way: "",
      vehicle: "",
      hotel: "",
      money: "",
      contentMarkdown: "",
      contentHTML: "",
    };
  }
  handleEditorChange = ({ html, text }) => {
    this.setState({
      contentMarkdown: text,
      contentHTML: html,
    });
  };

  async componentDidMount() {}
  componentDidUpdate(prevProps, PrevState, snapshot) {
    if (prevProps.listTours !== this.props.listTours) {
      this.setState({
        place: "",
        description: "",
        image: "",
        image1: "",
        image2: "",
        image3: "",
        way: "",
        vehicle: "",
        hotel: "",
        money: "",
        contentMarkdown: "",
        contentHTML: "",

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

    let { action } = this.state;
    //fire redux event create
    if (action === CRUD_ACTIONS.CREATE) {
      this.props.createNewTour({
        place: this.state.place,
        description: this.state.description,
        image: this.state.image,
        image1: this.state.image1,
        image2: this.state.image2,
        image3: this.state.image3,
        way: this.state.way,
        vehicle: this.state.vehicle,
        hotel: this.state.hotel,
        money: this.state.money,

        contentMarkdown: this.state.contentMarkdown,
        contentHTML: this.state.contentHTML,
      });
    }

    // fire redux event edit
    if (action === CRUD_ACTIONS.EDIT) {
      this.props.editATourRedux({
        id: this.state.tourEditId,
        place: this.state.place,
        description: this.state.description,
        image: this.state.image,
        image1: this.state.image1,
        image2: this.state.image2,
        image3: this.state.image3,
        way: this.state.way,
        vehicle: this.state.vehicle,
        hotel: this.state.hotel,
        money: this.state.money,
        contentMarkdown: this.state.contentMarkdown,
        contentHTML: this.state.contentHTML,
      });
    }
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
      image1: tour.image1,
      image2: tour.image2,
      image3: tour.image3,
      image: "",
      contentMarkdown: tour.contentMarkdown,
      contentHTML: tour.contentHTML,
      previewImgUrl: imageBase64,
      action: CRUD_ACTIONS.EDIT,
      tourEditId: tour.id,
    });
  };

  render() {
    let language = this.props.language;
    let {
      place,
      description,
      way,
      vehicle,
      hotel,
      money,
      image,
      image1,
      image2,
      image3,
    } = this.state;
    // console.log(this.state);
    return (
      <div className="user-redux-container">
        <div className="title mt-4 mb-5">Quản lý tour du lịch </div>
        <div className="user-rexdux-body">
          <div className="container mb-5">
            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <p className="title-tour-form">Địa điểm du lịch</p>
                  <input
                    required
                    type="place"
                    className="form-control"
                    value={place}
                    onChange={(event) => this.onChangeInput(event, "place")}
                  />
                </div>
                <div className="form-group col-md-6">
                  <p className="title-tour-form">Chưa nghĩ ra</p>
                  <input
                    required
                    type="chuanghira"
                    className="form-control"
                    disabled
                    // value={place}
                    // onChange={(event) => this.onChangeInput(event, "place")}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <p className="title-tour-form">Phương tiện</p>
                  <input
                    required
                    type="text"
                    className="form-control"
                    value={vehicle}
                    onChange={(event) => this.onChangeInput(event, "vehicle")}
                  />
                </div>
                <div className="form-group col-md-6 mx-2">
                  <p className="title-tour-form">Lộ trình</p>
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
                <div className="form-group col-md-6">
                  <p className="title-tour-form">Khách sạn</p>
                  <input
                    required
                    type="text"
                    className="form-control"
                    value={hotel}
                    onChange={(event) => this.onChangeInput(event, "hotel")}
                  />
                </div>
                <div className="form-group col-md-6 mx-2">
                  <p className="title-tour-form">Tiền</p>
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
                  <p className="title-tour-form">Thông tin khách sạn</p>
                  <textarea
                    style={{ height: "180px", width: "100%" }}
                    type="description"
                    required
                    className="form-control"
                    value={description}
                    onChange={(event) =>
                      this.onChangeInput(event, "description")
                    }
                  />{" "}
                  <input
                    style={{ width: "30%", padding: "5px" }}
                    type="text"
                    value={image1}
                    onChange={(event) => this.onChangeInput(event, "image1")}
                    placeholder="Ảnh hotel 1"
                  ></input>
                  <input
                    style={{ width: "30%", padding: "5px", margin: "20px" }}
                    placeholder="Ảnh hotel 2"
                    type="text"
                    value={image2}
                    onChange={(event) => this.onChangeInput(event, "image2")}
                  ></input>
                  <input
                    style={{ width: "30%", padding: "5px" }}
                    type="text"
                    value={image3}
                    onChange={(event) => this.onChangeInput(event, "image3")}
                    placeholder="Ảnh hotel 3"
                  ></input>
                </div>
              </div>
              <MdEditor
                style={{ height: "500px" }}
                renderHTML={(text) => mdParser.render(text)}
                onChange={this.handleEditorChange}
                value={this.state.contentMarkdown}
              />

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
    editATourRedux: (data) => dispatch(actions.editATour(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TourRedux);

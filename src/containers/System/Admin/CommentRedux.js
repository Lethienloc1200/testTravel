import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { LANGUAGES, CRUD_ACTIONS, CommonUtils } from "../../../utils";
import { getDetailInforComment } from "../../../services/userService";
import * as actions from "../../../store/actions";
import { withRouter } from "react-router";
import { FaStar } from "react-icons/fa";
class CommentRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // commentsRedux: {},
      arrComment: [],
      star: null,
      description: "",
      titleComment: "",
      typeOf: "",
      typeOfHotel: "",
      timeTravel: "",
      imageComment: "",
      previewImgUrl: "",
      commentId: "",
      userId: "",
      hoverStar: null,
    };
  }

  async componentDidMount() {}
  componentDidUpdate(prevProps, PrevState, snapshot) {}

  onChangeInput = (event, id) => {
    let copyState = { ...this.state, isOpen: false };
    copyState[id] = event.target.value;
    console.log("checkk  typeofffffff", this.state);
    this.setState({
      ...copyState,
    });
  };
  checkValidateInput = () => {
    let isValid = true;
    let arrCheck = ["star", "description"];

    for (let i = 0; i < arrCheck.length; i++) {
      if (!this.state[arrCheck[i]]) {
        isValid = false;
        alert("Vui lòng nhập đầy đủ đánh giá: " + arrCheck[i]);
        break;
      }
    }
    return isValid;
  };
  returnToHome = () => {
    if (this.props.history) {
      alert("Vui lòng đăng nhập để đánh giá ..😎😎");
      this.props.history.push("/login");
    }
  };

  commitComment = () => {
    let isValid = this.checkValidateInput();
    if (isValid === false) return;
    console.log("hoi dan it", this.state);
    if (!this.props.userInfo) {
      this.returnToHome();
    } else {
      this.props.createNewComment({
        star: this.state.star,
        description: this.state.description,
        typeOf: this.state.typeOf,
        typeOfHotel: this.state.typeOfHotel,
        timeTravel: this.state.timeTravel,
        titleComment: this.state.titleComment,
        imageComment: this.state.imageComment,
        commentId: this.props.detailTour.id,
        userId: this.props.userInfo.firstName,
      });
    }
  };
  handleOnChangeImage = async (event) => {
    let data = event.target.files;
    let file = data[0];
    if (file) {
      let Base64 = await CommonUtils.getBase64(file);
      let objectUrl = URL.createObjectURL(file);
      this.setState({
        previewImgUrl: objectUrl,
        imageComment: Base64,
      });
    }
  };

  render() {
    let { star, description, hoverStar, timeTravel, titleComment } = this.state;
    console.log("abcccccccccccccccccccccccccccccccccccccccc", this.state);
    let detailTour = this.props.detailTour;
    let arrComment = this.props.arrComment;
    let userInfo = this.props.userInfo;
    // console.log("tennnnnnnnnnnnnnnnnnnn comment", userInfo);
    // console.log("teeeeeeeeeettttttttttttttttt comment", detailTour);
    console.log(
      "teeeeeeeeeettttttttttttttttt arrrrrrrrrrrrr comment",
      arrComment
    );

    return (
      <div className="comment-tour">
        <h3>Đánh giá tour</h3>
        {[...Array(5)].map((rating, i) => {
          const ratingValue = i + 1;
          return (
            <>
              <label>
                <FaStar
                  className="star-star"
                  size="30"
                  color={
                    ratingValue <= (hoverStar || star) ? "#ffc107" : "gray"
                  }
                  // onMouseEnter={() => {
                  //   this.setState({ hoverStar: this.state.ratingValue });
                  // }}
                  // onMouseLeave={() => this.setState(null)}
                />
                <input
                  className="star-rating"
                  type="radio"
                  name="star"
                  value={ratingValue}
                  onClick={(event) => this.onChangeInput(event, "star")}
                />
              </label>
            </>
          );
        })}
        <br></br>
        <input
          className="titleComment"
          type="text"
          placeholder="Tiêu đề bài đánh giá của bạn"
          value={titleComment}
          onChange={(event) => this.onChangeInput(event, "titleComment")}
        />
        <textarea
          type="text"
          placeholder="Nội dung đánh giá"
          value={description}
          onChange={(event) => this.onChangeInput(event, "description")}
        />
        <p className="labelTitle">Loại chuyến đi đó là gì?</p>
        <input
          className="inputabc"
          type="radio"
          name="typeOf"
          value="Doanh nghiệp"
          onClick={(event) => this.onChangeInput(event, "typeOf")}
        />
        <label className="lableabc">Doanh nghiệp</label>
        <input
          className="inputabc"
          type="radio"
          name="typeOf"
          value="Cặp đôi"
          onClick={(event) => this.onChangeInput(event, "typeOf")}
        />
        <label className="lableabc">Cặp đôi</label>
        <input
          className="inputabc"
          type="radio"
          name="typeOf"
          value="Gia đình"
          onClick={(event) => this.onChangeInput(event, "typeOf")}
        />{" "}
        <label className="lableabc">Gia đình</label>
        <input
          className="inputabc"
          type="radio"
          name="typeOf"
          value="Một mình"
          onClick={(event) => this.onChangeInput(event, "typeOf")}
        />
        <label className="lableabc">Một mình</label>
        <br></br>
        <label className="labelTitle" for="bdaymonth">
          Đi khi nào ?
        </label>
        <input
          className="bdaymonth"
          type="month"
          value={timeTravel}
          id="bdaymonth"
          onChange={(event) => this.onChangeInput(event, "timeTravel")}
        />
        <br></br>
        <p className="labelTitle">Giá Khách sạn như thế nào</p>
        <input
          className="inputabc"
          type="radio"
          name="typeOfHotel"
          value="Bình dân"
          onClick={(event) => this.onChangeInput(event, "typeOfHotel")}
        />
        <label className="lableabc">Bình dân</label>
        <input
          className="inputabc"
          type="radio"
          name="typeOfHotel"
          value="Hạng trung"
          onClick={(event) => this.onChangeInput(event, "typeOfHotel")}
        />
        <label className="lableabc">Hạng trung</label>
        <input
          className="inputabc"
          type="radio"
          name="typeOfHotel"
          value="Sang trọng"
          onClick={(event) => this.onChangeInput(event, "typeOfHotel")}
        />
        <label className="lableabc">Sang trọng</label>
        <br></br>
        <label for="anh" className="lableabcanh">
          <i className="fas fa-photo-video labelTitle"></i>
        </label>
        <input
          className="anh"
          id="anh"
          type="file"
          onChange={(event) => this.handleOnChangeImage(event)}
        />
        <label> chọn ảnh</label>
        <br></br>
        <br></br>
        <button
          className="btn btn-primary"
          onClick={() => this.commitComment()}
        >
          Gửi
        </button>
        {/* ===========Hiển thị Thông tin đánh
        giá========= */}
        <h3 className="mt-3 mb-3">Thông tin đánh giá:</h3>
        {arrComment.length > 0 &&
          arrComment.map((item, index) => {
            let imageBase64 = "";
            if (item.Comment && item.Comment.imageComment) {
              imageBase64 = new Buffer(
                item.Comment && item.Comment.imageComment,
                "base64"
              ).toString("binary");
            }
            return (
              <div className="container-comment-box">
                <div className="leftt">
                  <img src="https://i2.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1" />
                </div>
                <div className="rightt">
                  <div className="container-right">
                    <div>
                      {" "}
                      <p className="descript">
                        {(item.Comment && item.Comment.userId) || "Họ và tên "}
                      </p>
                      {(item.Comment && item.Comment.star && (
                        <span>
                          {(item.Comment.star === 5 && (
                            <>
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </>
                          )) ||
                            (item.Comment.star === 4 && (
                              <>
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                              </>
                            )) ||
                            (item.Comment.star === 3 && (
                              <>
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                              </>
                            )) ||
                            (item.Comment.star === 2 && (
                              <>
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                              </>
                            )) ||
                            (item.Comment.star === 1 && (
                              <i className="fas fa-star" />
                            ))}
                        </span>
                      )) || (
                        <span className="descript">"Bạn hãy đánh giá nào"</span>
                      )}
                      <span className="mx-5">
                        {(item.Comment && item.Comment.createdAt) || ""}
                      </span>
                    </div>
                    <div className="tieude">
                      tiêu đề đánh giá:{" "}
                      {(item.Comment && item.Comment.titleComment) || ""}
                    </div>
                    <div>
                      {(item.Comment && item.Comment.description && (
                        <p className="descript">{item.Comment.description}</p>
                      )) ||
                        ""}
                    </div>
                    <li className="loaichuyen">
                      Loại chuyến đi:{" "}
                      {(item.Comment && item.Comment.typeOf) || ""}
                    </li>
                    <li>Giá cả: {item.Comment && item.Comment.typeOfHotel}</li>
                    <li>
                      Thời gian:{" "}
                      {(item.Comment && item.Comment.timeTravel) || ""}
                    </li>
                    {imageBase64 ? (
                      <div
                        className="imgtourr"
                        style={{
                          backgroundImage: `url(${imageBase64})`,
                        }}
                      />
                    ) : (
                      <p></p>
                      //nếu k có ảnh thì để trống
                    )}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listComments: state.admin.comments,
    userInfo: state.user.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createNewComment: (data) => dispatch(actions.createNewComment(data)),
    // fetchAllCommentRedux: () => dispatch(actions.fetchAllCommentStart()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CommentRedux)
);

import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { getDetailInforComment } from "../../../services/userService";
import * as actions from "../../../store/actions";

class CommentRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // commentsRedux: {},
      arrComment: [],
      description: "",
      star: "",
      commentId: "",
    };
  }
  // async componentDidMount() {
  //   this.props.fetchAllCommentRedux();
  // }
  async componentDidMount() {
    // if (
    //   this.props.match &&
    //   this.props.match.params &&
    //   this.props.match.params.id
    // ) {
    //   let id = this.props.match.params.id;
    //   let res = await getDetailInforComment(id);
    //   console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", res);
    //   if (res && res.errCode === 0) {
    //     this.setState({
    //       arrComment: res.data,
    //     });
    //   }
    // }
  }
  componentDidUpdate(prevProps, PrevState, snapshot) {
    // if (prevProps.listComments !== this.props.listComments) {
    //   this.setState({
    //     arrComment: this.props.listComments,
    //     star: "",
    //     description: "",
    //   });
    // }
  }

  onChangeInput = (event, id) => {
    let copyState = { ...this.state, isOpen: false };
    copyState[id] = event.target.value;

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
        alert("Please enter a valid " + arrCheck[i]);
        break;
      }
    }
    return isValid;
  };
  commitComment = () => {
    let isValid = this.checkValidateInput();
    if (isValid === false) return;
    console.log("hoi dan it", this.state);

    this.props.createNewComment({
      star: this.state.star,
      description: this.state.description,
      commentId: this.props.detailTour.id,
    });
  };
  // showRatings(rating) {
  //   var result = [];
  //   for (var i = 1; i <= rating; i++) {
  //     result.push(<i className="fas fa-star"></i>);
  //   }
  //   for (var j = 1; j <= 5 - rating; j++) {
  //     result.push(<i class="far fa-star"></i>);
  //     return result;
  //   }
  // }

  render() {
    let { star, description } = this.state;
    let detailTour = this.props.detailTour;
    let arrComment = this.props.arrComment;
    let userInfo = this.props.userInfo;
    console.log("tennnnnnnnnnnnnnnnnnnn comment", userInfo);
    console.log("teeeeeeeeeettttttttttttttttt comment", detailTour);
    console.log(
      "teeeeeeeeeettttttttttttttttt arrrrrrrrrrrrr comment",
      arrComment
    );

    return (
      <div className="comment-tour">
        <h3>Đánh giá tour</h3>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <input
          placeholder="số sao (chưa fix😂)"
          type="text"
          value={star}
          onChange={(event) => this.onChangeInput(event, "star")}
        />
        {/* <input type="text" placeholder="Tiêu đề" /> */}
        <textarea
          type="text"
          placeholder="Nội dung đánh giá"
          value={description}
          onChange={(event) => this.onChangeInput(event, "description")}
        />
        <button
          className="btn btn-primary"
          onClick={() => this.commitComment()}
        >
          Gửi
        </button>
        <h3 className="mt-3 mb-3">Thông tin đánh giá:</h3>
        {arrComment.length > 0 &&
          arrComment.map((item, index) => {
            return (
              <div className="container-comment-box">
                <div className="leftt">
                  <img src="https://i2.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1" />
                </div>
                <div className="rightt">
                  <div className="container-right">
                    <div>
                      {" "}
                      <p className="descript">Lê THiện Lộc</p>
                      {(item.Comment && item.Comment.star && (
                        <p>
                          {(item.Comment.star === 4 && "💛💛💛💛") ||
                            (item.Comment.star === 3 && "💛💛💛") ||
                            (item.Comment.star === 2 && "💛💛") ||
                            (item.Comment.star === 1 && "💛")}
                        </p>
                      )) || <p className="descript">"😒"</p>}
                    </div>
                    <div>
                      {(item.Comment && item.Comment.description && (
                        <p className="descript">{item.Comment.description}</p>
                      )) || <p></p>}
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(CommentRedux);

import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { getAllCodeService } from "../../../services/userService";
import * as actions from "../../../store/actions";

class CommentRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentsRedux: [],
      description: "",
      star: "",
    };
  }

  async componentDidMount() {
    this.props.fetchAllCommentRedux();
  }
  componentDidUpdate(prevProps, PrevState, snapshot) {
    if (prevProps.listComments !== this.props.listComments) {
      this.setState({
        commentsRedux: this.props.listComments,
        star: "",
        description: "",
      });
    }
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
    });
  };
  showRatings(rating) {
    var result = [];
    for (var i = 1; i <= rating; i++) {
      result.push(<i className="fas fa-star"></i>);
    }
    for (var j = 1; j <= 5 - rating; j++) {
      result.push(<i class="far fa-star"></i>);
      return result;
    }
  }
  render() {
    let { star, description, commentsRedux } = this.state;

    console.log("check starrrrrrrrrr", this.state.star);
    console.log("render chek all comment", this.props.listComments);
    return (
      <div className="comment-tour">
        <h3>Đánh giá tour</h3>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <input
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
        <div className="container-comment-box">
          {commentsRedux &&
            commentsRedux.map((item, index) => {
              // let showStar = null;
              // if (item.star === 1) {
              //   <i className="fas fa-star"></i>;
              // } else if (item.star === 2) {
              //   showStar = (
              //     <>
              //       <i className="fas fa-star"></i>
              //       <i className="fas fa-star"></i>
              //     </>
              //   );
              // } else if (item.star === 3) {
              //   showStar = (
              //     <>
              //       <i className="fas fa-star"></i>
              //       <i className="fas fa-star"></i>
              //       <i className="fas fa-star"></i>
              //     </>
              //   );
              // } else if (item.star === 4) {
              //   showStar = (
              //     <>
              //       <i className="fas fa-star"></i>
              //       <i className="fas fa-star"></i>
              //       <i className="fas fa-star"></i>
              //     </>
              //   );
              // }

              return (
                <div key={index}>
                  <div>{this.showRatings(item.star)}</div>
                  <div>
                    <p className="descript">{item.description}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listComments: state.admin.comments,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createNewComment: (data) => dispatch(actions.createNewComment(data)),
    fetchAllCommentRedux: () => dispatch(actions.fetchAllCommentStart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentRedux);

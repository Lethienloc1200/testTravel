import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import * as actions from "../../../store/actions";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalBookingTour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      nameTour: "",
      note: "",
      email: "",
      sdt: "",
      dayBooking: "",
    };
  }
  handleOnChangeInput = (event, id) => {
    let copyState = { ...this.state };
    copyState[id] = event.target.value;

    this.setState({
      ...copyState,
    });
  };
  componentDidMount() {}
  checkValidateInput = () => {
    let isValid = true;
    let arrCheck = ["name", "nameTour", "note", "email", "sdt", "dayBooking"];

    for (let i = 0; i < arrCheck.length; i++) {
      if (!this.state[arrCheck[i]]) {
        isValid = false;
        alert("Please enter a valid " + arrCheck[i]);
        break;
      }
    }
    return isValid;
  };
  toggle = () => {
    this.props.toggleFromParent();
  };

  handleBookingTour = () => {
    let isValid = this.checkValidateInput();
    if (isValid === false) return;
    this.props.createNewBooking({
      name: this.state.name,
      email: this.state.email,
      sdt: this.state.sdt,
      nameTour: this.state.nameTour,
      note: this.state.note,
      dayBooking: this.state.dayBooking,
    });
  };

  render() {
    return (
      <Modal isOpen={this.props.isOpen} toggle={() => this.toggle()} size="lg">
        <ModalHeader toggle={() => this.toggle()}>Đặt tour du lịch</ModalHeader>
        <ModalBody>
          <div className="container ">
            <div className="div_center mt-5 ml-5">
              <div className="row ">
                <form>
                  <div className="form-row">
                    <div className="form-group col-md-12">
                      <label>Họ và Tên</label>
                      <input
                        required
                        type="text"
                        className="form-control"
                        onChange={(event) => {
                          this.handleOnChangeInput(event, "name");
                        }}
                        value={this.state.name}
                      />
                    </div>
                    <div className="form-group col-md-8 mx-2">
                      <label>SDT</label>
                      <input
                        type="number"
                        className="form-control"
                        onChange={(event) => {
                          this.handleOnChangeInput(event, "sdt");
                        }}
                        value={this.state.sdt}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-12">
                      <label>Mã và tên tour</label>
                      <input
                        required
                        type="text"
                        name="nameTour"
                        placeholder="ví dụ :  t197-Bà nà hill"
                        className="form-control"
                        onChange={(event) => {
                          this.handleOnChangeInput(event, "nameTour");
                        }}
                        value={this.state.nameTour}
                      />
                    </div>
                    <div className="form-group col-md-8 mx-2">
                      <label>Đi vào ngày</label>
                      <input
                        required
                        type="date"
                        className="form-control"
                        onChange={(event) => {
                          this.handleOnChangeInput(event, "dayBooking");
                        }}
                        value={this.state.dayBooking}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-12">
                      <label>Ghi chú</label>

                      <input
                        required
                        type="text"
                        className="form-control"
                        onChange={(event) => {
                          this.handleOnChangeInput(event, "note");
                        }}
                        value={this.state.note}
                      />
                    </div>
                    <div className="form-group col-md-8">
                      <label>Email</label>

                      <input
                        required
                        type="email"
                        className="form-control"
                        onChange={(event) => {
                          this.handleOnChangeInput(event, "email");
                        }}
                        value={this.state.email}
                      />
                    </div>
                  </div>

                  <button
                    type="button"
                    className="btn btn-primary mt-3 button_padding"
                    onClick={() => this.handleBookingTour()}
                  >
                    Đặt tour
                  </button>
                </form>
                <h4 className="mt-3">
                  Hoặc gọi sdt:<b>09888088088</b> để được hỗ trợ sớm nhất có thể{" "}
                </h4>
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    createNewBooking: (data) => dispatch(actions.createNewBooking(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalBookingTour);

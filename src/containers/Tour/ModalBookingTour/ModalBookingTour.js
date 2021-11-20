import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { emitter } from "../../../utils/emitter";

class ModalBookingTour extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  toggle = () => {
    this.props.toggleFromParent();
  };

  //   checkValidateInput = () => {
  //     let isValid = true;
  //     let arrInput = ["email", "password", "firstName", "lastName", "address"];
  //     for (let i = 0; i < arrInput.length; i++) {
  //       if (!this.state[arrInput[i]]) {
  //         isValid = false;
  //         alert("Chưa điền " + arrInput[i]);
  //         break;
  //       }
  //     }
  //     return isValid;
  //   };

  handleBookingTour = (tour) => {
    alert("chưa đk đc 😎");
    console.log("đătk tour ", tour);
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
                      <label>Tên</label>
                      <input
                        required
                        type="email"
                        name="email"
                        className="form-control"
                        onChange={(event) => {
                          this.handleOnChangeInput(event, "email");
                        }}
                        value={this.state.email}
                      />
                    </div>
                    <div className="form-group col-md-8 mx-2">
                      <label>SDT</label>
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        id="inputPassword4"
                        onChange={(event) => {
                          this.handleOnChangeInput(event, "password");
                        }}
                        value={this.state.password}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-12">
                      <label>Mã tour</label>
                      <input
                        required
                        type="text"
                        name="firstName"
                        className="form-control"
                        onChange={(event) => {
                          this.handleOnChangeInput(event, "firstName");
                        }}
                        value={this.state.firstName}
                      />
                    </div>
                    <div className="form-group col-md-8 mx-2">
                      <label>Ngày đăng ký</label>
                      <input
                        required
                        type="text"
                        name="lastName"
                        className="form-control"
                        id="inputPassword4"
                        onChange={(event) => {
                          this.handleOnChangeInput(event, "lastName");
                        }}
                        value={this.state.lastName}
                      />
                    </div>
                  </div>

                  <label>Ghi chú</label>

                  <input
                    required
                    type="text"
                    name="address"
                    className="form-control"
                    id="inputAddress"
                    onChange={(event) => {
                      this.handleOnChangeInput(event, "address");
                    }}
                    value={this.state.address}
                  />

                  <button
                    type="button"
                    className="btn btn-primary mt-3 button_padding"
                    onClick={(item) => this.handleBookingTour(item)}
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
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalBookingTour);

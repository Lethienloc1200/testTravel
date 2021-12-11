import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import { emitter } from "../../../utils/emitter";

class TableManageBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookingsRedux: [],
    };
  }

  componentDidMount() {
    this.props.fetchAllBookingsRedux();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.listBookings !== this.props.listBookings) {
      this.setState({
        bookingsRedux: this.props.listBookings,
      });
    }
  }
  handleEditTour = (item) => {
    alert("xác nhận thành công tour 😎" + item.name + "😍");
    console.log(item.name);
  };
  handleDeleteTour = (item) => {
    alert("Hủy booking 😎" + item.name + "😍");
  };

  render() {
    console.log("render chek all tours", this.props.listBookings);

    let arrBookings = this.state.bookingsRedux;
    return (
      <>
        <div className="row">
          <div className="col-sm-11 mx-auto">
            <h3 className="title"> DANH SÁCH BOOKING TOUR</h3>
            <table id="customers-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>sdt</th>
                  <th>Email</th>
                  <th>Id and Name Rour</th>
                  <th>Note</th>
                  <th>Day booking</th>
                  <th style={{ width: "140px" }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {arrBookings &&
                  arrBookings.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.sdt}</td>
                        <td>{item.email}</td>
                        <td>{item.nameTour}</td>
                        <td>{item.note}</td>
                        <td>{item.dayBooking}</td>
                        <td>
                          <button
                            className="btn btn-warning btnn-edit"
                            onClick={() => this.handleEditTour(item)}
                          >
                            <i className="fas fa-pencil-alt"></i> Duyệt
                          </button>
                          <button
                            className="btn btn-danger btnn-delete "
                            onClick={() => this.handleDeleteTour(item)}
                          >
                            <i className="fas fa-trash"></i>Hủy
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listBookings: state.admin.bookings,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllBookingsRedux: () => dispatch(actions.fetchAllBookingStart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageBooking);

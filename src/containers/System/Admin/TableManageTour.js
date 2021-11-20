import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import { emitter } from "../../../utils/emitter";

class TableManageTour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toursRedux: [],
    };
  }

  componentDidMount() {
    this.props.fetchAllTourRedux();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.listTours !== this.props.listTours) {
      this.setState({
        toursRedux: this.props.listTours,
      });
    }
  }

  handleDeleteTour = (tour) => {
    this.props.deleteATourRedux(tour.id);
  };
  handleEditTour = (tour) => {
    this.props.handleEditTourFromParentKey(tour);
  };
  render() {
    console.log("render chek all tours", this.props.listTours);

    let arrTours = this.state.toursRedux;
    return (
      <>
        <table id="customers-table">
          <thead>
            <tr>
              <th>Place</th>
              <th>Way</th>
              <th>Vehicle</th>
              <th>Hotel</th>
              <th>Money</th>
              <th style={{ width: "140px" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {arrTours &&
              arrTours.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.place}</td>
                    <td>{item.way}</td>
                    <td>{item.vehicle}</td>
                    <td>{item.hotel}</td>
                    <td>{item.money}</td>
                    <td>
                      <button
                        className="btn btn-warning btnn-edit"
                        onClick={() => this.handleEditTour(item)}
                      >
                        <i className="fas fa-pencil-alt"></i> Edit
                      </button>
                      <button
                        className="btn btn-danger btnn-delete "
                        onClick={() => this.handleDeleteTour(item)}
                      >
                        <i className="fas fa-trash"></i>Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listTours: state.admin.tours,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllTourRedux: () => dispatch(actions.fetchAllTourStart()),
    deleteATourRedux: (id) => dispatch(actions.deleteATour(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageTour);

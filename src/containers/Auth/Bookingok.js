import React, { Component } from "react";
import "./Bookingok.scss";

class Bookingok extends Component {
  render() {
    return (
      <div className="bookingoknha">
        <div class="globe">
          <div class="bird">
            <div class="body">
              <div class="eye left"></div>
              <div class="eye right"></div>
              <div class="beak">
                <div></div>
              </div>
              <div class="feet"></div>
              <div class="wire"></div>
            </div>
            <div class="hills"></div>
            <div class="cloud"></div>
            <div class="cloud small"></div>
          </div>
        </div>

        <h2 class="h2h2">
          Bạn đã xác nhận đặt tour thành công
          <br />
          <span>Chúc bạn một chuyến đi vui vẻ ❤❤❤</span>
        </h2>
      </div>
    );
  }
}

export default Bookingok;

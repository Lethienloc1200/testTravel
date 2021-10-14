import React, { Component } from "react";
import { connect } from "react-redux";
import {FormattedMessage} from 'react-intl';
import Slider from "react-slick";




class Tourhots extends Component {
   

  render() {
    
    return (
      <div className="section-share ">
          <div className="section-container">
          <div className="section-header">
            <div className="text-header-section">Tour đang hot</div>
            <button className="text-right">Xem thêm</button>
          </div>
          <Slider {...this.props.settings}>
                <div className="customize-img start star">
                   <div className="image-section img-tourhots" />
                   <div className="star">
                     <i class="fas fa-star"></i>
                       <i class="fas fa-star"></i>
                       <i class="fas fa-star"></i>
                       <i class="fas fa-star"></i>
                       <p>5 star Review</p> 
                   </div>
                 <div className="text-discript">
                    <p className="text">Tour Châu Đốc</p>
                    <p className="text-nho">Lộ trình: HCM-Đà Nẫng</p>
                    <p className="text-nho">Phương tiện: Ô tô</p>
                    <p  className="text-nho">Khách sạn : 2 sao</p>
                 </div>
                </div>
                
                <div className="customize-img start star">
                   <div className="image-section img-tourhots" />
                   <div className="star">
                     <i class="fas fa-star"></i>
                       <i class="fas fa-star"></i>
                       <i class="fas fa-star"></i>
                       <i class="fas fa-star"></i>
                       <p>5 star Review</p> 
                   </div>
                 <div className="text-discript">
                    <p className="text">Tour Châu Đốc</p>
                    <p className="text-nho">Lộ trình: HCM-Đà Nẫng</p>
                    <p className="text-nho">Phương tiện: Ô tô</p>
                    <p  className="text-nho">Khách sạn : 2 sao</p>
                 </div>
                  
                </div>
                <div className="customize-img start star">
                   <div className="image-section img-tourhots" />
                   <div className="star">
                     <i class="fas fa-star"></i>
                       <i class="fas fa-star"></i>
                       <i class="fas fa-star"></i>
                       <i class="fas fa-star"></i>
                       <p>5 star Review</p> 
                   </div>
                 <div className="text-discript">
                    <p className="text">Tour Châu Đốc</p>
                    <p className="text-nho">Lộ trình: HCM-Đà Nẫng</p>
                    <p className="text-nho">Phương tiện: Ô tô</p>
                    <p  className="text-nho">Khách sạn : 2 sao</p>
                 </div>
                  
                </div>
                <div className="customize-img start star">
                   <div className="image-section img-tourhots" />
                   <div className="star">
                     <i class="fas fa-star"></i>
                       <i class="fas fa-star"></i>
                       <i class="fas fa-star"></i>
                       <i class="fas fa-star"></i>
                       <p>5 star Review</p> 
                   </div>
                 <div className="text-discript">
                    <p className="text">Tour Châu Đốc</p>
                    <p className="text-nho">Lộ trình: HCM-Đà Nẫng</p>
                    <p className="text-nho">Phương tiện: Ô tô</p>
                    <p  className="text-nho">Khách sạn : 2 sao</p>
                 </div>
                  
                </div>
                <div className="customize-img start star">
                   <div className="image-section img-tourhots" />
                   <div className="star">
                     <i class="fas fa-star"></i>
                       <i class="fas fa-star"></i>
                       <i class="fas fa-star"></i>
                       <i class="fas fa-star"></i>
                       <p>5 star Review</p> 
                   </div>
                 <div className="text-discript">
                    <p className="text">Tour Châu Đốc</p>
                    <p className="text-nho">Lộ trình: HCM-Đà Nẫng</p>
                    <p className="text-nho">Phương tiện: Ô tô</p>
                    <p  className="text-nho">Khách sạn : 2 sao</p>
                 </div>
                  
                </div>
                <div className="customize-img start star">
                   <div className="image-section img-tourhots" />
                   <div className="star">
                     <i class="fas fa-star"></i>
                       <i class="fas fa-star"></i>
                       <i class="fas fa-star"></i>
                       <i class="fas fa-star"></i>
                       <p>5 star Review</p> 
                   </div>
                 <div className="text-discript">
                    <p className="text">Tour Châu Đốc</p>
                    <p className="text-nho">Lộ trình: HCM-Đà Nẫng</p>
                    <p className="text-nho">Phương tiện: Ô tô</p>
                    <p  className="text-nho">Khách sạn : 2 sao</p>
                 </div>
                  
                </div>
              
         </Slider>
          </div>
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
   
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tourhots);

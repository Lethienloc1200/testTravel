import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Footer from './Footer';
import Tourhots from './Section/Tourhots';
import TourPopular from './Section/TourPopular';
import "./HomePage.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Dropdowns from './Section/Dropdowns';
import AboutMedia from './Section/AboutMedia';
class HomePage extends Component {

    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
          };
    

        return (
           <div>
           
               <HomeHeader/>
               <Dropdowns/>
               <Tourhots  settings = {settings}/>
               <TourPopular settings = {settings}/>
               <AboutMedia/> 
              <Footer/>
              
           </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

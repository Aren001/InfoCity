import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from './slider.module.css';



export default class AsNavFor extends Component {
    constructor(props) {
      super(props);
      this.state = {
        nav1: null,
        nav2: null
      };
    }
  
    componentDidMount() {
      this.setState({
        nav1: this.slider1,
        nav2: this.slider2
      });
    }
  
    render() {
     
      const {imgs} = this.props;
     
        const settings = {
           
            slidesToShow: 1,
            slidesToScroll: 4,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            // cssEase: "linear"
          };
      return (
        <div>
          
          <Slider
            asNavFor={this.state.nav2}
            ref={slider => (this.slider1 = slider)} 
            className={s.Slider1}
            // {...settings}
          >
            <div className={s.divCont1}>
                <img src={imgs.src2} /> 
            </div>
            <div className={s.divCont1}>
                <img src={imgs.src1} /> 
            </div>
            <div className={s.divCont1}>
                <img src={imgs.src3} /> 
            </div>
            <div className={s.divCont1}>
              <img src={imgs.src4} /> 
            </div>
           
          </Slider>
         
          <Slider
            className={s.Slider2}
            asNavFor={this.state.nav1}
            ref={slider => (this.slider2 = slider)}
            slidesToShow={4.0}
            swipeToSlide={true}
            focusOnSelect={true}
           
          >
              <div className={s.divCont2}>
                <img src={imgs.src2} /> 
            </div>
            <div  className={s.divCont2}>
                <img src={imgs.src1} /> 
            </div >
            <div  className={s.divCont2}>
                <img src={imgs.src3} /> 
            </div>
            <div  className={s.divCont2}>
                <img src={imgs.src3} /> 
            </div>
          </Slider>
        </div>
      );
    }
  }


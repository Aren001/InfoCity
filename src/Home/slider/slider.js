import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import s from './slider.module.css';

export default class AutoPlay extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)

  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    const {src1 , src2 , src3 , src4 , src5 , src6,slider} = this.props;
    // console.log(slider)
    return (
      <div className={s.cont}>
        
        <Slider {...settings} className={s.Sliders}  >
          
          <div>
            <img src={slider.src1} />
            
          </div>
          <div>
            <img src={slider.src2} />
          </div>
          <div>
            <img src={slider.src3} />
          </div>
          <div>
            <img src={slider.src4} />
          </div>
          <div>
            <img src={slider.src5} />
          </div>
          <div>
            <img src={slider.src6} />
          </div>
        </Slider>
      </div>
    );
  }
}

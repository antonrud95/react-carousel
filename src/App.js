import React, {useEffect} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './App.css';

const SimpleSlider = () => {

  useEffect(() => {
    console.log('init');
  }, []);

  let settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    centerPadding: '150px',
    variableWidth: true,
    // useCSS: false,
    // useTransform: true,
    infinite: true,
    // autoplay: true
  };



  

  return (
    <Slider {...settings}>
        <div className="card-item">
          <h3>1</h3>
        </div>
        <div className="card-item">
          <h3>2</h3>
        </div>
        <div className="card-item">
          <h3>3</h3>
        </div>
        <div className="card-item">
          <h3>4</h3>
        </div>
        <div className="card-item">
          <h3>5</h3>
        </div>
        <div className="card-item">
          <h3>6</h3>
        </div>
      </Slider>
  );
}

let a = document.getElementsByClassName('.card-item');
console.log(a)

export default SimpleSlider;

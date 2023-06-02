import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './SliderInfo.scss'
import { Container } from '@mui/material'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 400,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Container sx={{ padding: '20px 0' }}>
      <div className="SliderInfo">
        <Slider {...settings}>
        <div className="sliderImgDiv">
          <img className="sliderImg" src=" https://content2.rozetka.com.ua/banner_main/image_ua/original/334668544.jpg" alt="slider6" />
          </div>
        <div className="sliderImgDiv">
          <img className="sliderImg" src="https://content2.rozetka.com.ua/banner_main/image_ua/original/332023950.jpg" alt="slider7" />
          </div>
          <div className="sliderImgDiv">
          <img className="sliderImg" src="https://content1.rozetka.com.ua/banner_main/image_ua/original/330057635.jpg" alt="slider4" />
          </div>
          {/* <div className="sliderImgDiv">
           <img className="sliderImg" src="https://content1.rozetka.com.ua/banner_main/image_ua/original/314575388.jpg" alt="slider2" />
          </div>
          <div className="sliderImgDiv">
            <img className="sliderImg" src="https://content1.rozetka.com.ua/banner_main/image_ua/original/328040372.jpg" alt="slider3" />
          </div> */}
          <div className="sliderImgDiv">
          <img className="sliderImg" src="https://content2.rozetka.com.ua/banner_main/image_ua/original/329827968.jpg" alt="slider1" />
          </div>
          <div  className="sliderImgDiv">
          <img className="sliderImg" src="https://content.rozetka.com.ua/banner_main/image_ua/original/328665382.jpg" alt="slider5" />
          </div>
        </Slider>
      </div>
      </Container>

    );
  }
}
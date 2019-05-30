import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import Image from './styles/Image';

const settings = {
  fade: true,
  dots: false,
  arrows: false,
  // infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  // autoplay: true,
  speed: 400,
  autoplaySpeed: 1000,
  cssEase: 'linear'
};

export default class ImageList extends Component {
  play = () => {
    this.slider.slickPlay();
    console.log('Play');
  };

  reset = () => {
    //  Stop sliding
    this.slider.slickPause();
    //  Reset to start slide
    this.slider.slickGoTo(0, true);
    console.log('RESETED');
  };

  render() {
    const { images } = this.props;
    return (
      <ImageWrapper onMouseEnter={this.play} onMouseLeave={this.reset}>
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          {images.map((img, index) => {
            return (
              <div key={index}>
                <CardImage ref={image => (this.image = image)} src={img} alt="img" />
              </div>
            );
          })}
        </Slider>
        <Overlay className="overlay" />
      </ImageWrapper>
    );
  }
}

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  &:hover {
    img {
      transform: scale(1.1);
    }
    .overlay {
      opacity: 1;
    }
  }
`;

const CardImage = styled(Image)`
  display: block;
  border-radius: 4px;
  transition: all 0.5s linear;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 2;
  background: rgba(0, 0, 0, 0.4);
  pointer-events: none;
  transition: all 0.3s linear;
`;

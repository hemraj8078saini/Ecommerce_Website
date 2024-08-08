import React from 'react';
import { Carousel } from 'antd';
import images1 from '../../images/1.webp';
import images2 from '../../images/2.webp';
import images3 from '../../images/3.webp';
import images4 from '../../images/4.webp';
import './Herosection.css';

// const contentStyle = {
//   height: '350px',
//   color: '#fff',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: '#364d79',
// };

function HeroSection() {
  return (
    <Carousel autoplay>
      <div>
        <h3 className="slide">
          <img src={images1} alt="Slide 1" />
        </h3>
      </div>
      <div>
        <h3 className="slide" >
          <img src={images2} alt="Slide 2" />
        </h3>
      </div>
      <div>
        <h3 className="slide" >
          <img src={images3} alt="Slide 3" />
        </h3>
      </div>
      <div>
        <h3 className="slide" >
          <img src={images4} alt="Slide 4" />
        </h3>
      </div>
    </Carousel>
  );
}

export default HeroSection;

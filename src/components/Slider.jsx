import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import img1 from '../assets/1.avif'
import img2 from '../assets/2.jpeg'
import img3 from '../assets/3.webp'

const Slider = () => {
  return (
    <Carousel>
                <div>
                    <img src={img1} />
                    <p className="legend"></p>
                </div>
                <div>
                    <img src={img2} />
                    <p className="legend"></p>
                </div>
                <div>
                    <img src={img3} />
                    <p className="legend"></p>
                </div>
            </Carousel>
  );
};

export default Slider;

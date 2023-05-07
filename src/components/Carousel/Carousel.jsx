import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import demo1 from "../../images/carousel_images/1.jpg";
import demo2 from "../../images/carousel_images/2.jpg";
import demo3 from "../../images/carousel_images/3.jpeg";
import demo4 from "../../images/carousel_images/4.jpeg";
import demo5 from "../../images/carousel_images/5.jpeg";
import demo6 from "../../images/carousel_images/6.jpeg";
/*import demo7 from "../../images/carousel_images/photo_2022-12-01 18.10.45.jpeg";
import demo8 from "../../images/carousel_images/photo_2022-12-01 18.10.55.jpeg";*/

import s from "./Carousel.module.css"

const DemoCarousel = () => {

    return (
        <div className={s.carouselOverlay}>
            <Carousel infiniteLoop
                      useKeyboardArrows
                      autoPlay
                      interval={3000}
                      transitionTime={700}
            >
                <div className={s.image}>
                    <img src={demo1} alt={'Demo'}/>
                </div>
                <div className={s.image}>
                    <img src={demo2} alt={'Demo'}/>
                </div>
                <div className={s.image}>
                    <img src={demo3} alt={'Demo'}/>
                </div>
                <div className={s.image}>
                    <img src={demo4} alt={'Demo'}/>
                </div>
                <div className={s.image}>
                    <img src={demo5} alt={'Demo'}/>
                </div>
                <div className={s.image}>
                    <img src={demo6} alt={'Demo'}/>
                </div>
           {/*     <div className={s.image}>
                    <img src={demo7} alt={'Demo'}/>
                </div>
                <div className={s.image}>
                    <img src={demo8} alt={'Demo'}/>
                </div>*/}
            </Carousel>
        </div>
    );
};

export default DemoCarousel;
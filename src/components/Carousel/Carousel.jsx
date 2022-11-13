import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import demo8 from "../../images/projects/cafe.png"
import demo1 from "../../images/Examples/Malta.jpg"
import demo2 from "../../images/Examples/Kitchen2.jpg"
import demo3 from "../../images/Examples/fromTelega1.jpg"
import demo4 from "../../images/Examples/theKava.jpg"
import demo5 from "../../images/Examples/Gorgany.jpg"
import demo6 from "../../images/Examples/Sleep.JPG"
import demo7 from "../../images/Examples/blum.jpg"
import demo9 from "../../images/Examples/fromTelega2.jpg"
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
                <div className={s.image}>
                    <img src={demo7} alt={'Demo'}/>
                </div>
                <div className={s.image}>
                    <img src={demo8} alt={'Demo'}/>
                </div>
                <div className={s.image}>
                    <img src={demo9} alt={'Demo'}/>
                </div>
            </Carousel>
        </div>
    );
};

export default DemoCarousel;
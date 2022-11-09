import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import demo2 from "../../images/Examples/Kitchen2.jpg"
import demo3 from "../../images/Examples/m_12..jpg"
import demo4 from "../../images/Examples/m_31.jpg"
import demo5 from "../../images/Examples/picture_compress.JPG"
import demo6 from "../../images/Examples/Sleep.JPG"
import demo7 from "../../images/projects/cafe.png"
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
                    <img src={demo2} alt={'Demo'}/>
                    {/*<h3>Кухні</h3>*/}
                </div>
                <div className={s.image}>
                    <img src={demo3} alt={'Demo'}/>
                    {/*<h3>Столи</h3>*/}
                </div>
                <div className={s.image}>
                    <img src={demo4} alt={'Demo'}/>
                    {/*<h3>Меблі з дерева</h3>*/}
                </div>
                <div className={s.image}>
                    <img src={demo5} alt={'Demo'}/>
                    {/*<h3>Для кафе</h3>*/}
                </div>
                <div className={s.image}>
                    <img src={demo6} alt={'Demo'}/>
                    {/*<h3>Меблі для дому</h3>*/}
                </div>
                <div className={s.image}>
                    <img src={demo7} alt={'Demo'}/>
                    {/*<h3>HoReCa</h3>*/}
                </div>
            </Carousel>
        </div>
    );
};

export default DemoCarousel;
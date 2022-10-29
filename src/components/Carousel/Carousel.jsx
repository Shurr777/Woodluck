import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import demo1 from "../../images/projects/ofice.png"
import demo2 from "../../images/projects/beds.png"
import demo3 from "../../images/projects/cafe.png"
import demo4 from "../../images/projects/cafe.png"
import demo5 from "../../images/projects/cafe.png"
import demo6 from "../../images/projects/cafe.png"
import demo7 from "../../images/projects/cafe.png"
import s from "./Carousel.module.css"

const DemoCarousel = () => {
    return (
        <div>
            <Carousel infiniteLoop
                      useKeyboardArrows
                      autoPlay
                      interval={3000}
                      transitionTime={500}
            >
                <div className={s.image}>
                    <img src={demo1} />
                    <h3>Розробляємо та виготовляємо
                        меблі на замовлення</h3>
                </div>
                <div className={s.image}>
                    <img src={demo2} />
                    <h3>Якийсь текст</h3>
                </div>
                <div className={s.image}>
                    <img src={demo3} />
                    <h3>Якийсь текст</h3>
                </div>
                <div className={s.image}>
                    <img src={demo4} />
                    <h3>Якийсь текст</h3>
                </div>
                <div className={s.image}>
                    <img src={demo5} />
                    <h3>Якийсь текст</h3>
                </div>
                <div className={s.image}>
                    <img src={demo6} />
                    <h3>Якийсь текст</h3>
                </div>
                <div className={s.image}>
                    <img src={demo7} />
                    <h3>Якийсь текст</h3>
                </div>
            </Carousel>
        </div>
    );
};

export default DemoCarousel;
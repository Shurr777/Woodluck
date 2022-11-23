import React from 'react';
import s from './ServiceCycle.module.css'
import {FaArrowDown, FaArrowRight} from "react-icons/fa";
import Talking from '../../images/icons/Talking.png'
import Design from '../../images/icons/Design.png'
import Production from '../../images/icons/Production.png'
import Delivery from '../../images/icons/Delivery.png'
import Сharity from '../../images/icons/Сharity.png'

const ServiceCycle = () => {
    return (
        <div className={s.serviceCycleOverlay}>
            <h2>ПОВНИЙ ЦИКЛ СУПРОВОДУ ЗАМОВЛЕННЯ</h2>
           {/* <h3>Щось теж про супровід</h3>*/}
            <div className={s.cardBlock}>
                <div className={s.card}>
                    <img src={Talking} alt="Talking"/>
                    <p>Дзвінок/Заявка</p>
                </div>
                <div className={s.arrowHorizontal}>
                    <FaArrowRight/>
                </div>
                <div className={s.arrowVertical}>
                    <FaArrowDown/>
                </div>
                <div className={s.card}>
                    <img src={Design} alt="Talking"/>
                    <p>Дизайн & прорахунок</p>
                </div>
                <div className={s.arrowHorizontal}>
                    <FaArrowRight/>
                </div>
                <div className={s.arrowVertical}>
                    <FaArrowDown/>
                </div>
                <div className={s.card}>
                    <img src={Production} alt="Talking"/>
                    <p>Виготовлення</p>
                </div>
                <div className={s.arrowHorizontal}>
                    <FaArrowRight/>
                </div>

                <div className={s.arrowVertical}>
                    <FaArrowDown/>
                </div>
                <div className={s.card}>
                    <img src={Delivery} alt="Talking"/>
                    <p>Доставка та монтаж</p>
                </div>
                <div className={s.arrowHorizontal}>
                    <FaArrowRight/>
                </div>
                <div className={s.arrowVertical}>
                    <FaArrowDown/>
                </div>
                <div className={s.card}>
                    <img src={Сharity} alt="Talking"/>
                    <p>Благодійність</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceCycle;
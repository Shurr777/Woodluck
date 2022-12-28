import React from 'react';
import s from './ServiceCycle.module.css'
import {FaArrowDown, FaArrowRight} from "react-icons/fa";
import Talking from '../../images/icons/Talking.png'
import Design from '../../images/icons/Design.png'
import Production from '../../images/icons/Production.png'
import Delivery from '../../images/icons/Delivery.png'
import Сharity from '../../images/icons/Сharity.png'
import {useTranslation} from "react-i18next";

const ServiceCycle = () => {

    const {t} = useTranslation()

    return (
        <div className={s.serviceCycleOverlay}>
            <h2>{t("serviceCycle.header")}</h2>
           {/* <h3>Щось теж про супровід</h3>*/}
            <div className={s.cardBlock}>
                <div className={s.card}>
                    <img src={Talking} alt="Talking"/>
                    <p>{t("serviceCycle.call")}</p>
                </div>
                <div className={s.arrowHorizontal}>
                    <FaArrowRight/>
                </div>
                <div className={s.arrowVertical}>
                    <FaArrowDown/>
                </div>
                <div className={s.card}>
                    <img src={Design} alt="Talking"/>
                    <p>{t("serviceCycle.design")}</p>
                </div>
                <div className={s.arrowHorizontal}>
                    <FaArrowRight/>
                </div>
                <div className={s.arrowVertical}>
                    <FaArrowDown/>
                </div>
                <div className={s.card}>
                    <img src={Production} alt="Talking"/>
                    <p>{t("serviceCycle.production")}</p>
                </div>
                <div className={s.arrowHorizontal}>
                    <FaArrowRight/>
                </div>

                <div className={s.arrowVertical}>
                    <FaArrowDown/>
                </div>
                <div className={s.card}>
                    <img src={Delivery} alt="Talking"/>
                    <p>{t("serviceCycle.delivery")}</p>
                </div>
                <div className={s.arrowHorizontal}>
                    <FaArrowRight/>
                </div>
                <div className={s.arrowVertical}>
                    <FaArrowDown/>
                </div>
                <div className={s.card}>
                    <img src={Сharity} alt="Talking"/>
                    <p>{t("serviceCycle.charity")}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceCycle;
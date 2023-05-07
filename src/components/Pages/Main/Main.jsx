import React, {useEffect} from 'react';
import style from './Main.module.css'
import Projects from "./Projects/Projects";
import Clients from "./Clients/Clients";
import {useLocation} from "react-router-dom";
import DemoCarousel from "../../Carousel/Carousel";
import ServiceCycle from "../../SeviceCycle/ServiceCycle";
import {useTranslation} from "react-i18next";

const Main = () => {

    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const { t } = useTranslation()


    return (
        <>
            <div className={style.titleImageOverlay}>
            <DemoCarousel/>
                <h1 className={style.titleimageText}>Меблі, що роблять світ кращим</h1>
            </div>
            <div className={style.about}>
                <div className={style.aboutText}>
                    <h3>
                        {t("main.whoAreWe")}
                    </h3>
                    <p>
                        {t("main.aboutText")}
                    </p>
                </div>
                <div className={style.video_Container}>
                    <iframe width="658" height="370" src="https://www.youtube.com/embed/wnFV9rNTubk"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </div>
                <div className={style.videoOverlay}>
                    <iframe width="340" height="200" src="https://www.youtube.com/embed/wnFV9rNTubk"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </div>

            </div>
           {/* <div className={style.services}>
                <h3>НАШІ ПОСЛУГИ</h3>
                <div className={style.serviceItems}>
                    <div className={style.item}>
                        <h6>Виготовлення меблів за ескізом замовника</h6>
                        <p>
                            Виготовляємо меблі за готовими кресленнями, або по
                            картинці/зображенні, яке надає клієнт.
                        </p>
                    </div>
                    <div className={style.item}>
                        <p>Розробка індивідуального дизайну</p>
                    </div>
                    <div className={style.item}>
                        <p>Дизайн та розробка елементів декору</p>
                    </div>
                    <div className={style.item}>
                        <p>ЧПУ порізка</p>
                    </div>
                    <div className={style.item}>
                        <p>Зварювання металевих конструкцій</p>
                    </div>
                    <div className={style.item}>
                        <p>Фарбування дерев’яних i металевих елементiв</p>
                    </div>
                </div>
            </div>*/}
           {/* <Cards/>*/}
            <div className={style.banner}>
                <p>
                    {t("main.bannerText")}
                </p>
            </div>
            <ServiceCycle />
            <Projects/>
            <Clients/>
        </>
    );
};

export default Main;
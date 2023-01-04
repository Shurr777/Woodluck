import React, {useEffect} from 'react';
import s from "./Blum.module.css";
import BlumTitleImage from "../../../images/Portfolio/62077715_306148160340710_4861842892479528960_n 1.png";
import BlumDescription from "../../../images/Portfolio/Blum/blum_descripton.jpg"
import Picture1 from "../../../images/Portfolio/Blum/pic1.png"
import Picture2 from "../../../images/Portfolio/Blum/62077715_306148160340710_4861842892479528960_n 1.png"
import Picture3 from "../../../images/Portfolio/Blum/62209645_306148213674038_7481719573775908864_n 1.png"
import {useLocation} from "react-router-dom";
import ConnectBlock from "../../ConnectBlock/ConnectBlock";
import {useTranslation} from "react-i18next";


const Blum = () => {

    const { pathname } = useLocation();
    const { t } = useTranslation()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    return (
        <div className={s.blum}>
            <div className={s.blumHeader}>
                <img src={BlumTitleImage} alt="Cafe"/>
                <h2>BLUM CAFÉ ROOM</h2>
            </div>
            <div className={s.description}>
                <div className={s.text}>
                    <h3>{t("blumPage.description.title")}</h3>
                    <p>
                        {t("blumPage.description.text")}
                    </p>
                </div>
                <div className={s.image}>
                    <img src={BlumDescription} alt="Blum interere"/>
                </div>
            </div>
            <div className={s.working}>
                <div className={s.workingBanner}>
                    <h2>
                        {t("blumPage.banner.title")}
                    </h2>
                </div>
                <div className={s.workingList}>
                    <ul>
                        <li><span/> {t("blumPage.banner.text1")}</li>
                        <li><span/> {t("blumPage.banner.text2")} </li>
                        <li><span/> {t("blumPage.banner.text3")}</li>
                        <li><span/> {t("blumPage.banner.text4")}</li>
                        <li><span/> {t("blumPage.banner.text5")}</li>
                    </ul>
                </div>
            </div>
            <div className={s.pictures}>
                <div className={s.picture}>
                    <img src={Picture1} alt="Blum table"/>
                </div>
                <div className={s.picture}>
                    <img src={Picture2} alt="Blum bar"/>
                </div>
                <div className={s.picture}>
                    <img src={Picture3} alt="Blum interiere"/>
                </div>
            </div>
            <div className={s.info}>
                <div className={s.materials}>
                    <h2>{t("blumPage.materials.title")}</h2>
                    <ul>
                        <li><span/> {t("blumPage.materials.material1")}</li>
                        <li><span/> {t("blumPage.materials.material2")}</li>
                        <li><span/> {t("blumPage.materials.material3")}</li>
                    </ul>
                </div>
                <div className={s.project}>
                    <h2>
                        {t("blumPage.info.title")}
                    </h2>
                    <ul>
                        <li><span/>{t("blumPage.info.start")}</li>
                        <li><span/>{t("blumPage.info.end")}</li>
                        <li><span/>{t("blumPage.info.name")}</li>
                    </ul>
                </div>
            </div>
            <div className={s.totalInfo}>
                <h3>{t("blumPage.totalInfo")}</h3>
            </div>
           <ConnectBlock/>
        </div>
    );
};

export default Blum;
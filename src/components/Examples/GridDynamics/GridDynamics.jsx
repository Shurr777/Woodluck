import React, {useEffect} from 'react';
import s from "./GD.module.css";
import GD_TitleImage from "../../../images/Portfolio/GD/GD_main.png";
import GD_Description from "../../../images/Portfolio/GD/GD_description.png"
import BannerLeft from "../../../images/Portfolio/GD/GD_banner_left.png"
import BannerRight from "../../../images/Portfolio/GD/GD_banner_right.png"
import {useLocation} from "react-router-dom";
import ConnectBlock from "../../ConnectBlock/ConnectBlock";
import {useTranslation} from "react-i18next";


const GridDynamics = () => {

    const { pathname } = useLocation();

    const { t } = useTranslation()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className={s.dynamics}>
            <div className={s.dynamicsHeader}>
                <img src={GD_TitleImage} alt="Main"/>
                <h2>{t("gridPage.title")}</h2>
            </div>
            <div className={s.description}>
                <div className={s.text}>
                    <h3>
                        {t("gridPage.description.title")}
                    </h3>
                    <p>
                        {t("gridPage.description.text")}
                    </p>
                </div>
                <div className={s.image}>
                    <img src={GD_Description} alt="Blum interere"/>
                </div>
            </div>
            <div className={s.working}>
                <div className={s.workingBanner}>
                    <h2>{t("gridPage.banner.title")}</h2>
                </div>
                <div className={s.workingList}>
                    <ul>
                        <li><span/> {t("gridPage.banner.text1")}</li>
                        <li><span/> {t("gridPage.banner.text2")}</li>
                        <li><span/> {t("gridPage.banner.text3")}</li>
                        <li><span/> {t("gridPage.banner.text4")}</li>
                        <li><span/> {t("gridPage.banner.text5")}</li>
                        <li><span/> {t("gridPage.banner.text6")}</li>
                        <li><span/> {t("gridPage.banner.text7")}</li>
                    </ul>
                </div>
            </div>
            <div className={s.pictures}>
                <div className={s.picture}>
                    <img src={BannerLeft} alt="Banner"/>
                </div>
                <div className={s.picture}>
                    <img src={BannerRight} alt="Banner"/>
                </div>
            </div>
            <div className={s.info}>
                <div className={s.materials}>
                    <h2>
                        {t("gridPage.materials.title")}
                    </h2>
                    <ul>
                        <li> {t("gridPage.materials.material1")}</li>
                        <li> {t("gridPage.materials.material2")}</li>
                        <li> {t("gridPage.materials.material3")}</li>
                    </ul>
                </div>
                <div className={s.project}>
                    <h2>
                        {t("gridPage.info.title")}
                    </h2>
                    <ul>
                        <li><span/> {t("gridPage.info.start")}</li>
                        <li><span/>  {t("gridPage.info.end")}</li>
                        <li><span/>  {t("gridPage.info.name")}</li>
                    </ul>
                </div>
            </div>
            <div className={s.totalInfo}>
                <h3>
                    {t("gridPage.totalInfo")}
                </h3>
            </div>
            <ConnectBlock/>
        </div>
    );
};

export default GridDynamics;
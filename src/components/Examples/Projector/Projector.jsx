import React, {useEffect} from 'react';
import s from "./Projector.module.css";
import Projector_TitleImage from "../../../images/Portfolio/Projector/projector_main.png";
import Projector_Description from "../../../images/Portfolio/Projector/projector_description.png"
import BannerLeft from "../../../images/Portfolio/Projector/projector_banner_left.png"
import BannerRight from "../../../images/Portfolio/Projector/projector_banner_right.png"
import {useLocation} from "react-router-dom";
import ConnectBlock from "../../ConnectBlock/ConnectBlock";
import {useTranslation} from "react-i18next";


const Projector = () => {

    const { pathname } = useLocation();

    const { t } = useTranslation()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className={s.projector}>
            <div className={s.projectorHeader}>
                <img src={Projector_TitleImage} alt="Main"/>
                <h2>{t("projectorPage.title")}</h2>
            </div>
            <div className={s.description}>
                <div className={s.text}>
                    <h3>
                        {t("projectorPage.description.title")}
                    </h3>
                    <p>{t("projectorPage.description.text")}</p>
                </div>
                <div className={s.image}>
                    <img src={Projector_Description} alt=""/>
                </div>
            </div>
            <div className={s.working}>
                <div className={s.workingBanner}>
                    <h2>
                        {t("projectorPage.banner.title")}
                    </h2>
                </div>
                <div className={s.workingList}>
                    <ul>
                        <li><span/> {t("projectorPage.banner.text1")}</li>
                        <li><span/> {t("projectorPage.banner.text2")}</li>
                        <li><span/> {t("projectorPage.banner.text3")}</li>
                        <li><span/> {t("projectorPage.banner.text4")}</li>
                        <li><span/> {t("projectorPage.banner.text5")}</li>
                        <li><span/> {t("projectorPage.banner.text6")}</li>
                        <li><span/> {t("projectorPage.banner.text7")}</li>
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
                        {t("projectorPage.materials.title")}
                    </h2>
                    <ul>
                        <li> {t("projectorPage.materials.material1")}</li>
                        <li> {t("projectorPage.materials.material2")}</li>
                    </ul>
                </div>
                <div className={s.project}>
                    <h2>{t("projectorPage.info.title")}</h2>
                    <ul>
                        <li><span/>{t("projectorPage.info.start")}</li>
                        <li><span/> {t("projectorPage.info.end")}</li>
                        <li><span/> {t("projectorPage.info.name")}</li>
                    </ul>
                </div>
            </div>
            <div className={s.totalInfo}>
                <h3>{t("projectorPage.totalInfo")}</h3>
            </div>
           <ConnectBlock/>
        </div>
    );
};

export default Projector;
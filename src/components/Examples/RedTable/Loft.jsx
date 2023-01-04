import React, {useEffect} from 'react';
import s from "./Loft.module.css";
import Loft_TitleImage from "../../../images/Portfolio/Red/red_main.png";
import Loft_Description from "../../../images/Portfolio/Red/red_description.png"
import BannerLeft from "../../../images/Portfolio/Red/red_banner_left.png"
import BannerRight from "../../../images/Portfolio/Red/red_banner_right.png"
import {useLocation} from "react-router-dom";
import ConnectBlock from "../../ConnectBlock/ConnectBlock";
import {useTranslation} from "react-i18next";


const Loft = () => {

    const { pathname } = useLocation();
    const { t } =useTranslation()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className={s.loft}>
            <div className={s.loftHeader}>
                <img src={Loft_TitleImage} alt="Main"/>
                <h2>{t("loftPage.title")}</h2>
            </div>
            <div className={s.description}>
                <div className={s.text}>
                    <h3>{t("loftPage.description.title")}</h3>
                    <p>{t("blumPage.description.text")}</p>
                </div>
                <div className={s.image}>
                    <img src={Loft_Description} alt=""/>
                </div>
            </div>
            <div className={s.working}>
                <div className={s.workingBanner}>
                    <h2>{t("loftPage.banner.title")}</h2>
                </div>
                <div className={s.workingList}>
                    <ul>
                        <li><span/> {t("loftPage.banner.text1")}</li>
                        <li><span/> {t("loftPage.banner.text2")}</li>
                        <li><span/> {t("loftPage.banner.text3")}</li>
                        <li><span/> {t("loftPage.banner.text4")}</li>
                        <li><span/> {t("loftPage.banner.text5")}</li>
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
                    <h2>{t("loftPage.materials.title")}</h2>
                    <ul>
                        <li> {t("loftPage.materials.material1")}</li>
                        <li> {t("loftPage.materials.material2")}</li>
                    </ul>
                </div>
                <div className={s.project}>
                    <h2>{t("loftPage.info.title")}</h2>
                    <ul>
                        <li><span/>{t("loftPage.info.start")}</li>
                        <li><span/>{t("loftPage.info.end")}</li>
                        <li><span/>{t("loftPage.info.name")}</li>
                    </ul>
                </div>
            </div>
            <div className={s.totalInfo}>
                <h3>{t("loftPage.totalInfo")}</h3>
            </div>
          <ConnectBlock/>
        </div>
    );
};

export default Loft;
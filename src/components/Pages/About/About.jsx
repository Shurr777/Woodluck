import React, {useEffect} from 'react';
import style from "./About.module.css";
import Header_img from "../../../images/About/Header_image.png";
import Work from "../../../images/About/CB4A1425 1.png"
import {useLocation} from "react-router-dom";
import {useTranslation} from "react-i18next";

const About = () => {
    const { pathname } = useLocation();

    const { t } = useTranslation()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div className={style.about}>
            <div className={style.mainOverlay}>
                <img src={Header_img} alt="Main"/>
                <h2> </h2>
            </div>
            <div className={style.statistic}>
                <div className={style.statisticItem}>
                    <h3>350</h3>
                    <p>{t("about.statistic.1")}</p>
                </div>
                <div className={style.statisticItem}>
                    <h3>20%</h3>
                    <p>{t("about.statistic.2")}</p>
                </div>
                <div className={style.statisticItem}>
                    <h3>50%</h3>
                    <p>{t("about.statistic.3")}</p>
                </div>
            </div>
            <div className={style.mission}>
                <div className={style.titleBlock}>
                    <h3>{t("about.mission.title")}</h3>
                </div>
                <div className={style.textBlock}>
                    <div className={style.textBlockOverlay}>
                        <p>{t("about.mission.text")}</p>
                    </div>
                </div>
            </div>
            <div className={style.aboutCard}>
                <div className={style.card}>
                    <h2>1</h2>
                    <div className={style.textBlock}>
                        <h3>{t("about.banner1.paragraf1.title")}</h3>
                        <p>{t("about.banner1.paragraf1.text")}</p>
                    </div>
                </div>
                <div className={style.card}>
                    <h2>2</h2>
                    <div className={style.textBlock}>
                        <h3>{t("about.banner1.paragraf2.title")}</h3>
                        <p>{t("about.banner1.paragraf2.text")}</p>
                    </div>
                </div>
                <div className={style.card}>
                    <h2>3</h2>
                    <div className={style.textBlock}>
                        <h3>{t("about.banner1.paragraf3.title")}</h3>
                        <p>{t("about.banner1.paragraf3.text")}</p>
                    </div>
                </div>
                <div className={style.card}>
                    <h2>4</h2>
                    <div className={style.textBlock}>
                        <h3>{t("about.banner1.paragraf4.title")}</h3>
                        <p>{t("about.banner1.paragraf4.text")}</p>
                    </div>
                </div>
            </div>
            <div className={style.story}>
                <div className={style.storyImage}>
                    <img src={Work} alt="Working man"/>
                </div>
                <div className={style.storyText}>
                    <p>{t("about.story.text1")}</p>
                    <p>{t("about.story.text2")}</p>
                </div>
            </div>
            <div className={style.banner1}>
                <div className={style.text1}>
                    {t("about.banner2.text1")}
                </div>
                <div className={style.text2}>
                    {t("about.banner2.text2")}
                </div>
            </div>
            <div className={style.banner2}>
                <h4>
                    {t("about.banner3.text1")}
                </h4>
            </div>
        </div>
    );
};

export default About;
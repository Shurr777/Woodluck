import React, {useEffect} from 'react';
import s from "./Office.module.css";
import OfficeTitleImage from "../../../images/Portfolio/Office/office_main.png";
import OfficeDescription from "../../../images/Portfolio/Office/office_description.png"
import BannerPicture1 from "../../../images/Portfolio/Office/office_banner_left.png"
import BannerPicture2 from "../../../images/Portfolio/Office/office_banner_center.png"
import BannerPicture3 from "../../../images/Portfolio/Office/office_banner_right.png"
import {useLocation} from "react-router-dom";
import ConnectBlock from "../../ConnectBlock/ConnectBlock";
import {FaRegCheckSquare} from "react-icons/fa";
import {useTranslation} from "react-i18next";


const Office = () => {

    const {pathname} = useLocation();

    const { t } =useTranslation()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className={s.office}>
            <div className={s.officeHeader}>
                <img src={OfficeTitleImage} alt="Main"/>
                <h2>{t("britishPage.title")}</h2>
            </div>
            <div className={s.description}>
                <div className={s.text}>
                    <h3>{t("britishPage.description.title")}</h3>
                    <p>{t("britishPage.description.text")}</p>
                </div>
                <div className={s.image}>
                    <img src={OfficeDescription} alt="office interier"/>
                </div>
            </div>
            <div className={s.working}>
                <div className={s.workingBanner}>
                    <h2>{t("britishPage.banner.title")}</h2>
                </div>
                <div className={s.workingList}>
                    <div>
                        <div className={s.linkItem}>
                            <span><FaRegCheckSquare/></span>
                            <div>{t("britishPage.banner.text1")}</div>
                        </div>
                        <div className={s.linkItem}>
                            <span><FaRegCheckSquare/></span>
                            <div>{t("britishPage.banner.text2")}</div>
                        </div>
                        <div className={s.linkItem}>
                            <span><FaRegCheckSquare/></span>
                            <div>{t("britishPage.banner.text3")})</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.pictures}>
                <div className={s.picture}>
                    <img src={BannerPicture1} alt="Banner"/>
                </div>
                <div className={s.picture}>
                    <img src={BannerPicture2} alt="Banner"/>
                </div>
                <div className={s.picture}>
                    <img src={BannerPicture3} alt="Banner"/>
                </div>
            </div>
            <div className={s.info}>
                <div className={s.materials}>
                    <h2>{t("britishPage.materials.title")}</h2>
                    <ul>
                        <li>{t("britishPage.materials.material1")}</li>
                        <li>{t("britishPage.materials.material2")}</li>
                        <li>{t("britishPage.materials.material3")}</li>
                        <li>{t("britishPage.materials.material4")}</li>
                        <li>{t("britishPage.materials.material5")}</li>
                    </ul>
                </div>
                <div className={s.project}>
                    <h2>{t("britishPage.info.title")}</h2>
                    <ul>
                        <li><span/>{t("britishPage.info.start")}</li>
                        <li><span/>{t("britishPage.info.end")}</li>
                        <li><span/>{t("britishPage.info.name")}</li>
                    </ul>
                </div>
            </div>
            <div className={s.totalInfo}>
                <h3>{t("britishPage.totalInfo")}</h3>
            </div>
            <ConnectBlock/>
        </div>
    );
};

export default Office;
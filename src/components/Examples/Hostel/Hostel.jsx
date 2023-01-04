import React, {useEffect} from 'react';
import s from "./Hostel.module.css";
import HostelBannerMain from "../../../images/Portfolio/Hostel/hostel_main.png";
import HostelDescription from "../../../images/Portfolio/Hostel/hostel_description.png";
import BannerPicture1 from "../../../images/Portfolio/Hostel/hostel_banner_left.png"
import BannerPicture2 from "../../../images/Portfolio/Hostel/hostel_banner_center.png"
import BannerPicture3 from "../../../images/Portfolio/Hostel/hostel_banner_right.png"
import {useLocation} from "react-router-dom";
import ConnectBlock from "../../ConnectBlock/ConnectBlock";
import {useTranslation} from "react-i18next";


const Hostel = () => {
    const { pathname } = useLocation();
    const { t } =useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    return (
        <div className={s.hostel}>
            <div className={s.hostelHeader}>
                <img src={HostelBannerMain} alt="Main"/>
                <h2>{t("hostelPage.title")}</h2>
            </div>
            <div className={s.description}>
                <div className={s.text}>
                    <h3>{t("hostelPage.description.title")}</h3>
                    <p>{t("hostelPage.description.text")}</p>
                </div>
                <div className={s.image}>
                    <img src={HostelDescription} alt="Hostel interere"/>
                </div>
            </div>
            <div className={s.working}>
                <div className={s.workingBanner}>
                    <h2>
                        {t("hostelPage.banner.title")}
                    </h2>
                </div>
                <div className={s.workingList}>
                    <ul>
                        <li><span/>{t("hostelPage.banner.text1")}</li>
                        <li><span/>{t("hostelPage.banner.text2")}</li>
                        <li><span/>{t("hostelPage.banner.text3")}</li>
                        <li><span/>{t("hostelPage.banner.text4")}</li>
                    </ul>
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
                    <h2>
                        {t("hostelPage.materials.title")}
                    </h2>
                    <ul>
                        <li>{t("hostelPage.materials.material1")}</li>
                        <li>{t("hostelPage.materials.material2")}</li>
                    </ul>
                </div>
                <div className={s.project}>
                    <h2>
                        {t("hostelPage.info.title")}
                    </h2>
                    <ul>
                        <li><span/>{t("hostelPage.info.start")}</li>
                        <li><span/>{t("hostelPage.info.end")}</li>
                        <li><span/>{t("hostelPage.info.name")}</li>
                    </ul>
                </div>
            </div>
            <div className={s.totalInfo}>
                <h3>{t("hostelPage.totalInfo")}</h3>
            </div>
          <ConnectBlock/>
        </div>
    );
};

export default Hostel;
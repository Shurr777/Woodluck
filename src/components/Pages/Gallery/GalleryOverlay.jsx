import React, {useEffect} from 'react';
import s from './GalleryOverlay.module.css'

import bedsideTable from "../../../images/gallery/galleryMenu/bedsideTable.jpg"
import childrenBed from "../../../images/gallery/galleryMenu/childrenBed.jpg"
import coffeeTable from "../../../images/gallery/galleryMenu/coffeeTable.jpg"
import decor from "../../../images/gallery/galleryMenu/decor.jpg"
import dinnerTable from "../../../images/gallery/galleryMenu/dinnerTable.jpg"
import forHome from "../../../images/gallery/galleryMenu/forHome.jpg"
import officeTable from "../../../images/gallery/galleryMenu/officeTable.jpg"
import rack from "../../../images/gallery/galleryMenu/rack.jpg"
import {useLocation, useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";


const GalleryOverlay = () => {

    const {pathname} = useLocation();
    const navigate = useNavigate();
    const { t } = useTranslation()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const onBedsideTableClick = () =>{navigate("/bedsideTable")}
    const onChildrenBedClick = () =>{navigate("/childrenBed")}
    const onCoffeTableClick = () =>{navigate("/coffeeTable")}
    const onDecorClick = () =>{navigate("/decor")}
    const onDinnerTableClick = () =>{navigate("/dinnerTable")}
    const onforHomeClick = () =>{navigate("/forHome")}
    const onOfficsTableClick = () =>{navigate("/officeTable")}
    const onRackClick = () =>{navigate("/rack")}

    return (
        <>
            <div className={s.galleyOverlay}>
                    <div className={s.galleryMenuCard}>
                        <img src={bedsideTable}
                             alt="bedside Table"
                             onClick={onBedsideTableClick}/>
                        <h2>{t("gallery.bedsideTable")}</h2>
                    </div>
                    <div className={s.galleryMenuCard}>
                        <img src={childrenBed}
                             alt="childrenBed"
                        onClick={onChildrenBedClick}/>
                        <h2>{t("gallery.childrenBed")}</h2>
                    </div>
                    <div className={s.galleryMenuCard}>
                        <img src={coffeeTable}
                             alt="coffeeTable"
                        onClick={onCoffeTableClick}/>
                        <h2>{t("gallery.coffeeTable")}</h2>
                    </div>
                    <div className={s.galleryMenuCard}>
                        <img src={decor}
                             alt="decor"
                        onClick={onDecorClick}/>
                        <h2>{t("gallery.decor")}</h2>
                    </div>
                    <div className={s.galleryMenuCard}>
                        <img src={dinnerTable}
                             alt="dinnerTable"
                        onClick={onDinnerTableClick}/>
                        <h2>{t("gallery.dinnerTable")}</h2>
                    </div>
                    <div className={s.galleryMenuCard}>
                        <img src={forHome}
                             alt="forHome"
                        onClick={onforHomeClick}/>
                        <h2>{t("gallery.forHome")}</h2>
                    </div>
                    <div className={s.galleryMenuCard}>
                        <img src={officeTable}
                             alt="officeTable"
                        onClick={onOfficsTableClick}/>
                        <h2>{t("gallery.officeTable")}</h2>
                    </div>
                    <div className={s.galleryMenuCard}>
                        <img src={rack}
                             alt="rack"
                        onClick={onRackClick}/>
                        <h2>{t("gallery.rack")}</h2>
                    </div>
            </div>
        </>
    )
}

export default GalleryOverlay
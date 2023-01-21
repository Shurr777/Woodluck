import React, {useState} from 'react';
import s from './Gallery.module.css'

import bedsideTable from "../../../images/gallery/galleryMenu/bedsideTable.jpg"
import childrenBed from "../../../images/gallery/galleryMenu/childrenBed.jpg"
import coffeeTable from "../../../images/gallery/galleryMenu/coffeeTable.jpg"
import decor from "../../../images/gallery/galleryMenu/decor.jpg"
import dinnerTable from "../../../images/gallery/galleryMenu/dinnerTable.jpg"
import forHome from "../../../images/gallery/galleryMenu/forHome.jpg"
import officeTable from "../../../images/gallery/galleryMenu/officeTable.jpg"
import rack from "../../../images/gallery/galleryMenu/rack.jpg"

import img1 from '../../../images/BEDS/1.1.jpg'
import img2 from '../../../images/BEDS/1.2.jpg'
import img3 from '../../../images/BEDS/2.1.jpg'
import img4 from '../../../images/BEDS/3.1.png'
import img5 from '../../../images/BEDS/4.1.jpg'
import img6 from '../../../images/BEDS/5.1.jpg'
import img7 from '../../../images/BEDS/6.1.jpg'
import img8 from '../../../images/BEDS/6.2.jpg'
import img9 from '../../../images/BEDS/6.3.jpg'
import img10 from '../../../images/BEDS/6.4.jpg'
import img11 from '../../../images/BEDS/7.1.jpg'
import img12 from '../../../images/BEDS/7.2.jpg'
import img13 from '../../../images/BEDS/7.3.jpg'
import img14 from '../../../images/BEDS/7.4.jpg'
import img15 from '../../../images/BEDS/8.1.jpg'
import img16 from '../../../images/BEDS/9.1.jpg'
import img17 from '../../../images/BEDS/10.1.jpg'
import img18 from '../../../images/BEDS/10.2.jpg'
import img19 from '../../../images/BEDS/10.3.jpg'
import img20 from '../../../images/BEDS/10.4.jpg'
import img21 from '../../../images/BEDS/11.1.jpg'
import img22 from '../../../images/BEDS/11.2.jpg'
import {useLocation, useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";


const GalleryOverlay = () => {

    const navigate = useNavigate();
    const { t } = useTranslation()

    const [modalImg, setModalImg] = useState(false);
    const [tempImg, setTempImg] = useState('');

    const onBedsideTableClick = () =>{
        navigate("/bedsideTable")
    }
    const onChildrenBedClick = () =>{
        navigate("/childrenBed")
    }
    const onCoffeTableClick = () =>{
        navigate("/coffeeTable")
    }
    const onDecorClick = () =>{
        navigate("/decor")
    }
    const onDinnerTableClick = () =>{
        navigate("/dinnerTable")
    }
    const onforHomeClick = () =>{
        navigate("/forHome")
    }
    const onOfficsTableClick = () =>{
        navigate("/officeTable")
    }
    const onRackClick = () =>{
        navigate("/rack")
    }

    const getImage = (img) => {
        setTempImg(img);
        setModalImg(true);
    }

    return (
        <>
            <div className={s.galleyOverlay}>
                    <div className={s.galleryMenuCard}>
                        <img src={bedsideTable}
                             alt="bedside Table"
                             onClick={onBedsideTableClick}
                        />
                        <h2>Тумби</h2>
                    </div>
                    <div className={s.galleryMenuCard}>
                        <img src={childrenBed}
                             alt="childrenBed"
                        onClick={onChildrenBedClick}/>
                        <h2>Дитячі ліжка</h2>
                    </div>
                    <div className={s.galleryMenuCard}>
                        <img src={coffeeTable}
                             alt="coffeeTable"
                        onClick={onCoffeTableClick}/>
                        <h2>Журнальні столи</h2>
                    </div>
                    <div className={s.galleryMenuCard}>
                        <img src={decor}
                             alt="decor"
                        onClick={onDecorClick}/>
                        <h2>Декор</h2>
                    </div>
                    <div className={s.galleryMenuCard}>
                        <img src={dinnerTable}
                             alt="dinnerTable"
                        onClick={onDinnerTableClick}/>
                        <h2>Обідні столи</h2>
                    </div>
                    <div className={s.galleryMenuCard}>
                        <img src={forHome}
                             alt="forHome"
                        onClick={onforHomeClick}/>
                        <h2>Для дому</h2>
                    </div>
                    <div className={s.galleryMenuCard}>
                        <img src={officeTable}
                             alt="officeTable"
                        onClick={onOfficsTableClick}/>
                        <h2>Офісні столи</h2>
                    </div>
                    <div className={s.galleryMenuCard}>
                        <img src={rack}
                             alt="rack"
                        onClick={onRackClick}/>
                        <h2>Стелажі</h2>
                    </div>
            </div>
        </>
    )
}

export default GalleryOverlay
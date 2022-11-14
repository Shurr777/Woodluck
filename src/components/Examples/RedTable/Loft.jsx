import React, {useEffect} from 'react';
import s from "./Loft.module.css";
import Loft_TitleImage from "../../../images/Portfolio/Red/red_main.png";
import Loft_Description from "../../../images/Portfolio/Red/red_description.png"
import BannerLeft from "../../../images/Portfolio/Red/red_banner_left.png"
import BannerRight from "../../../images/Portfolio/Red/red_banner_right.png"
import {useLocation} from "react-router-dom";
import ConnectBlock from "../../ConnectBlock/ConnectBlock";


const Loft = () => {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className={s.loft}>
            <div className={s.loftHeader}>
                <img src={Loft_TitleImage} alt="Main"/>
                <h2>ЛОФТОВИЙ ОФІС G5 ENTERTAINMENT</h2>
            </div>
            <div className={s.description}>
                <div className={s.text}>
                    <h3>
                        ОПИС ПРОЕКТУ
                    </h3>
                    <p>
                        Компанія G5 прийшла до WoodLuck зі своїм проектом та дизайном.
                        Вони мали чітку ідею як організувати офіс, продумали все до найменших деталей:
                        зонування, світло тощо. Тож ми виготовляли усі меблі за кресленнями замовника.
                        Ідея їхнього простору була в тому, аби зберегти первинність, тому вони обрали
                        класичний лофтовий стиль: метал не покривали порошковою фарбою (лише лаком, аби не ржавів),
                        зварка по металу вся відкрита, шви не заховані. Вийшло дуже круто!
                    </p>
                </div>
                <div className={s.image}>
                    <img src={Loft_Description} alt=""/>
                </div>
            </div>
            <div className={s.working}>
                <div className={s.workingBanner}>
                    <h2>
                        Що робили WoodLuck?
                    </h2>
                </div>
                <div className={s.workingList}>
                    <ul>
                        <li><span/> офісні столи, стелажі</li>
                        <li><span/> кухню</li>
                        <li><span/> грову кімнату</li>
                        <li><span/> барну стійку</li>
                        <li><span/> гардероб</li>
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
                        Використані матеріали
                    </h2>
                    <ul>
                        <li> металевий профіль 30х30</li>
                        <li> дерев’яні частини з сосни покриті лаком</li>
                    </ul>
                </div>
                <div className={s.project}>
                    <h2>
                        Інфо проекту
                    </h2>
                    <ul>
                        <li><span/>початок проекту</li>
                        <li><span/> Кінець проекту</li>
                        <li><span/> Ім’я клієнта</li>
                    </ul>
                </div>
            </div>
            <div className={s.totalInfo}>
                <h3>
                    На виході замовник отримав легкість у догляді
                    100% втілення свого запиту
                </h3>
            </div>
          <ConnectBlock/>
        </div>
    );
};

export default Loft;
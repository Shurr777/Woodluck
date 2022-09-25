import React from 'react';
import s from "./Appartaments.module.css";
import Appartaments_TitleImage from "../../../images/Portfolio/Appartaments/appartaments_main.png";
import Appartaments_Description from "../../../images/Portfolio/Appartaments/appartaments_description.png"
import BannerLeft from "../../../images/Portfolio/Appartaments/banner_left.png"
import BannerRight from "../../../images/Portfolio/Appartaments/banner_right.png"
import Footer from "../../Footer/Footer";


const Appartaments = () => {
    return (
        <div className={s.blum}>
            <div className={s.blumHeader}>
                <img src={Appartaments_TitleImage} alt="Main"/>
                <h2>ПРИВАТНА КВАРТИРА У КИЄВІ</h2>
            </div>
            <div className={s.description}>
                <div className={s.text}>
                    <h3>
                        ОПИС ПРОЕКТУ
                    </h3>
                    <p>
                        Це той випадок, коли замовниця продумала своє затишне житло до найменших деталей.
                        Намріяла, шукала, обирала і тепер їй потрібні були ті, хто втілив би всі картинки з Pinterest
                        у реальність. Ми з радістю взялися за цю роботу. І це була дуже класна співпраця.
                        Найголовніше, що клієнтка була задоволена, коли побачила результат.
                    </p>
                </div>
                <div className={s.image}>
                    <img src={Appartaments_Description} alt=""/>
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
                        <li><span/> приліжкові тумби</li>
                        <li><span/> журнальний столик</li>
                        <li><span/> тумба під телевізор</li>
                        <li><span/> обідній стіл</li>
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
                        <li> масив бука, металеві драбинки ліжка покриті білою порошковою фарбою, стійкою до ударів і подряпин</li>
                        <li> фанера і ДСП</li>
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
                    На виході замовник отримав реалізація індивідуального дизайну та
                    мобільні меблі-трансформери
                </h3>
            </div>
            <div className={s.connect}>
                <div className={s.connectText}>
                    <p>Маєте ідею дизайн-проекту? Заповніть форму і ми зв’яжемось з вами! </p>
                </div>
                <button>Зв’язатись</button>
            </div>
        </div>
    );
};

export default Appartaments;
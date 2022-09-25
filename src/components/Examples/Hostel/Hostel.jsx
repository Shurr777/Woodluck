import React from 'react';
import s from "./Hostel.module.css";
import HostelBannerMain from "../../../images/Portfolio/Hostel/hostel_main.png";
import HostelDescription from "../../../images/Portfolio/Hostel/hostel_description.png";
import BannerPicture1 from "../../../images/Portfolio/Hostel/hostel_banner_left.png"
import BannerPicture2 from "../../../images/Portfolio/Hostel/hostel_banner_center.png"
import BannerPicture3 from "../../../images/Portfolio/Hostel/hostel_banner_right.png"
import Footer from "../../Footer/Footer";


const Hostel = () => {
    return (
        <div className={s.blum}>
            <div className={s.blumHeader}>
                <img src={HostelBannerMain} alt="Main"/>
                <h2>FRIENDS HOSTEL LVIV</h2>
            </div>
            <div className={s.description}>
                <div className={s.text}>
                    <h3>
                        ОПИС ПРОЕКТУ
                    </h3>
                    <p>
                        Команда WoodLuck розробляла дизайн ліжок під індивідуальні розміри замовника.
                        Найбільша проблема хостелу – відкритість і брак власного простору.
                        Ми вирішили цю проблему: кожне ліжко має шторку, яку можна закрити і
                        мати власне світло та персональний простір. Під кожним ліжком є шухляди,
                        які закриваються на ключик, туди можна покласти валізу, рюкзак тощо.
                    </p>
                </div>
                <div className={s.image}>
                    <img src={HostelDescription} alt="Hostel interere"/>
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
                        <li><span/>двохярусні ліжка</li>
                        <li><span/> рецепція і локери</li>
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
                        Використані матеріали
                    </h2>
                    <ul>
                        <li>масив бука, металеві драбинки ліжка покриті білою порошковою фарбою, стійкою до ударів і
                            подряпин
                        </li>
                        <li>фанера і ДСП</li>
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
                <h3>На виході замовник отримав зручні ліжка з індивідуальними боксам та оптимально організований простір</h3>
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

export default Hostel;
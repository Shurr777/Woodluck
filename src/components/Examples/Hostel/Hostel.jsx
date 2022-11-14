import React, {useEffect} from 'react';
import s from "./Hostel.module.css";
import HostelBannerMain from "../../../images/Portfolio/Hostel/hostel_main.png";
import HostelDescription from "../../../images/Portfolio/Hostel/hostel_description.png";
import BannerPicture1 from "../../../images/Portfolio/Hostel/hostel_banner_left.png"
import BannerPicture2 from "../../../images/Portfolio/Hostel/hostel_banner_center.png"
import BannerPicture3 from "../../../images/Portfolio/Hostel/hostel_banner_right.png"
import {useLocation} from "react-router-dom";
import ConnectBlock from "../../ConnectBlock/ConnectBlock";


const Hostel = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    return (
        <div className={s.hostel}>
            <div className={s.hostelHeader}>
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
                        <li><span/>двоярусні ліжка</li>
                        <li><span/>рецепція</li>
                        <li><span/>локери</li>
                        <li><span/>шухляди</li>
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
          <ConnectBlock/>
        </div>
    );
};

export default Hostel;
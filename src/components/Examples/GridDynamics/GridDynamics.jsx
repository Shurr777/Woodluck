import React, {useEffect} from 'react';
import s from "./GD.module.css";
import GD_TitleImage from "../../../images/Portfolio/GD/GD_main.png";
import GD_Description from "../../../images/Portfolio/GD/GD_description.png"
import BannerLeft from "../../../images/Portfolio/GD/GD_banner_left.png"
import BannerRight from "../../../images/Portfolio/GD/GD_banner_right.png"
import {useLocation} from "react-router-dom";
import ConnectBlock from "../../ConnectBlock/ConnectBlock";


const GridDynamics = () => {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className={s.dynamics}>
            <div className={s.dynamicsHeader}>
                <img src={GD_TitleImage} alt="Main"/>
                <h2>ОФІС НА 100 РОБОЧИХ МІСЦЬ ДЛЯ GRID DYNAMICS</h2>
            </div>
            <div className={s.description}>
                <div className={s.text}>
                    <h3>
                        ОПИС ПРОЕКТУ
                    </h3>
                    <p>
                        Замовник попросив зробити столи, які були трохи довші та ширші за стандартні офісні розміри.
                        Ми спроектували їх таким чином, щоб коли працівники сидять поряд, вони один одному не заважали,
                        так кожне робоче місце розділяє бічна тумба, яка має має замок, тож у ній безпечно зберігати
                        свої особисті цінні речі. Стіл на 2 см вищий за стандартний розмір, щоб працівники
                        менше сутулилися працюючи за комп’ютером.
                    </p>
                </div>
                <div className={s.image}>
                    <img src={GD_Description} alt="Blum interere"/>
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
                        <li><span/> 100 робочих місць (столи, тумби)</li>
                        <li><span/> рецепція</li>
                        <li><span/> зонування приміщення: прораховували транзитні зони, світло, електрифікацію</li>
                        <li><span/> дизайн приміщення</li>
                        <li><span/> барні стійки на кухню, кухонні столи</li>
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
                        <li> металевий профіль 25х25 порошкова фарба чорного матового кольору</li>
                        <li> бук 18 мм покритий еколаком на водній основі</li>
                        <li> ДСП під бетон на рецепції і кухонних поверхнях</li>
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
                    На виході замовник отримав індивідуальний дизайн від Wood Luck,
                     індивідуальні розміри столі, багато денного світла потрапляє на робочі місця
                </h3>
            </div>
            <ConnectBlock/>
        </div>
    );
};

export default GridDynamics;
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


const Office = () => {

    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className={s.office}>
            <div className={s.officeHeader}>
                <img src={OfficeTitleImage} alt="Main"/>
                <h2>ОФІС БРИТАНСЬКОЇ КОМПАНІЇ PUSH GAMING У ЛЬВОВІ</h2>
            </div>
            <div className={s.description}>
                <div className={s.text}>
                    <h3>
                        ОПИС ПРОЕКТУ
                    </h3>
                    <p>
                        Разом із замовником нам вдалося створити затишний атмосферний простір,
                        де люди люблять проводити час. Дерев’яна березова обшивка на стінах з
                        кольоровими геометричними візерунками додала роздзинки і впізнаваності інтер’єру закладу.
                    </p>
                </div>
                <div className={s.image}>
                    <img src={OfficeDescription} alt="Blum interere"/>
                </div>
            </div>
            <div className={s.working}>
                <div className={s.workingBanner}>
                    <h2>
                        Що робили WoodLuck ?
                    </h2>
                </div>
                <div className={s.workingList}>
                    <div>
                        <div className={s.linkItem}>
                            <span><FaRegCheckSquare/></span>
                            <div> офісні столи</div>
                        </div>
                        <div className={s.linkItem}>
                            <span><FaRegCheckSquare/></span>
                            <div> cтелажі</div>
                        </div>
                        <div className={s.linkItem}>
                            <span><FaRegCheckSquare/></span>
                            <div> стіл у дорадчу кімнату (meeting room)</div>
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
                    <h2>
                        Використані матеріали
                    </h2>
                    <ul>
                        <li><span/>металевий профіль 40х20, порошкова фарба білого і матового кольорів</li>
                        <li> фанера і ДСП</li>
                        <li>бук 27 мм, покритий еколаком на водній основі</li>
                        <li>стелажі з кутника 30х30</li>
                        <li> стіл робочий: металевий профіль 80х80, чорний матовий колір, стільниця буковий шпон</li>
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
                <h3>На виході замовник отримав функціональний офіс,
                    що дозволяє бути мобільним для роботи в команді.
                    Простоту та вишуканість в робочому просторі
                </h3>
            </div>
            <ConnectBlock/>
        </div>
    );
};

export default Office;
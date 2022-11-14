import React, {useEffect} from 'react';
import s from "./Blum.module.css";
import BlumTitleImage from "../../../images/Portfolio/62077715_306148160340710_4861842892479528960_n 1.png";
import BlumDescription from "../../../images/Portfolio/Blum/blum_descripton.png"
import Picture1 from "../../../images/Portfolio/Blum/pic1.png"
import Picture2 from "../../../images/Portfolio/Blum/62077715_306148160340710_4861842892479528960_n 1.png"
import Picture3 from "../../../images/Portfolio/Blum/62209645_306148213674038_7481719573775908864_n 1.png"
import {useLocation} from "react-router-dom";
import ConnectBlock from "../../ConnectBlock/ConnectBlock";


const Blum = () => {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    return (
        <div className={s.blum}>
            <div className={s.blumHeader}>
                <img src={BlumTitleImage} alt="Main"/>
                <h2>BLUM CAFÉ ROOM</h2>
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
                    <img src={BlumDescription} alt="Blum interere"/>
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
                        <li><span/> ергономічні столи</li>
                        <li><span/> милі зручні сидіння </li>
                        <li><span/> яскрава та приваблива барна стійка</li>
                        <li><span/> дерев’яна обшивка на стінах</li>
                        <li><span/> плінтуси</li>
                    </ul>
                </div>
            </div>
            <div className={s.pictures}>
                <div className={s.picture}>
                    <img src={Picture1} alt=""/>
                </div>
                <div className={s.picture}>
                    <img src={Picture2} alt=""/>
                </div>
                <div className={s.picture}>
                    <img src={Picture3} alt=""/>
                </div>
            </div>
            <div className={s.info}>
                <div className={s.materials}>
                    <h2>
                        Використані матеріали
                    </h2>
                    <ul>
                        <li><span/> шпонований дуб (замінник натурального дерева)</li>
                        <li><span/> буk</li>
                        <li><span/> береза</li>
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
                <h3>На виході замовник отримав стильний та впізнаваний інтер’єр кафе</h3>
            </div>
           <ConnectBlock/>
        </div>
    );
};

export default Blum;
import React from 'react';
import s from "./Blum.module.css";
import BlumTitleImage from "../../../images/Portfolio/62077715_306148160340710_4861842892479528960_n 1.png";
import BlumDescription from "../../../images/Portfolio/Blum/blum_descripton.png"
import Picture1 from "../../../images/Portfolio/Blum/pic1.png"
import Picture2 from "../../../images/Portfolio/Blum/62077715_306148160340710_4861842892479528960_n 1.png"
import Picture3 from "../../../images/Portfolio/Blum/62209645_306148213674038_7481719573775908864_n 1.png"
import Footer from "../../Footer/Footer";


const Blum = () => {
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
                        <li><span/> столи</li>
                        <li><span/> милі і дуже зручні сидіння (схожі на диванчики)– це дерев’яні конструкції обшиті
                            фанерою
                        </li>
                        <li><span/> барна стійка та плінтуси, дерев’яна обшивка на стінах</li>
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
            <div className={s.connect}>
                <div className={s.connectText}>
                    <p>Маєте ідею дизайн-проекту? Заповніть форму і ми зв’яжемось з вами! </p>
                </div>
                <button>Зв’язатись</button>
            </div>
            <Footer/>
        </div>
    );
};

export default Blum;
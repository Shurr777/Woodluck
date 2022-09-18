import React from 'react';
import MainBackground from '../../../images/Main.png'
import style from './Main.module.css'
import Cards from "./Cards/Cards";
import Projects from "./Projects/Projects";
import Clients from "./Clients/Clients";
import Footer from "../../Footer/Footer";

const Main = () => {
    return (
        <>
            <div className={style.mainOverlay}>
                <img src={MainBackground} alt="Main"/>
                <div className={style.title}>
                    <h2>Розробляємо та виготовляємо<br/> меблі на замовлення</h2>
                    <button>Зв’язатися</button>
                </div>
            </div>
            <div className={style.about}>
                <div className={style.aboutText}>
                    <h3>
                        ХТО МИ Є?
                    </h3>
                    <p>
                        Майстерня WoodLuck — це не просто бізнес, це соціальний бізнес. Ми створюємо зручні,
                        атмосферні меблі, які відповідають індивідуальному стилю, залучаючи до роботи людей
                        із вразливих груп населення. Творимо разом, беремо відповідальність, допомагаємо
                        спільно, віримо в людей.
                    </p>
                </div>
                <div className={style.frame}>
                    <iframe width="658" height="370" src="https://www.youtube.com/embed/wnFV9rNTubk"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </div>
            </div>
            <div className={style.services}>
                <h3>НАШІ ПОСЛУГИ</h3>
                <div className={style.serviceItems}>
                    <div className={style.item}>
                        <h6>Виготовлення меблів за ескізом замовника</h6>
                        <p>
                            Виготовляємо меблі за готовими кресленнями, або по
                            картинці/зображенні, яке надає клієнт.
                        </p>
                    </div>
                    <div className={style.item}>
                        <p>Розробка індивідуального дизайну</p>
                    </div>
                    <div className={style.item}>
                        <p>Дизайн та розробка елементів декору</p>
                    </div>
                    <div className={style.item}>
                        <p>ЧПУ порізка</p>
                    </div>
                    <div className={style.item}>
                        <p>Зварювання металевих конструкцій</p>
                    </div>
                    <div className={style.item}>
                        <p>Фарбування дерев’яних i металевих елементiв</p>
                    </div>
                </div>
            </div>
            <Cards/>
            <div className={style.banner}>
                <p>10% від прибутку скеровуємо для сімей, які перебувають у скруті.
                    Майстерня WoodLuck засновувалася як соціальне підприємництво,
                    тож наша соціальна складова є частиною нашого ДНК.
                </p>
            </div>
            <Projects/>
            <Clients/>
            <Footer/>
        </>
    );
};

export default Main;
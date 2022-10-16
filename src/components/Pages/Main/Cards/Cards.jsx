import React from 'react';
import style from './Cards.module.css'
import ofice from "../../../../images/furnitures/14 1.png";
import bar from "../../../../images/furnitures/bar.png";
import kitchen from "../../../../images/furnitures/kitchen.png";
import house from "../../../../images/furnitures/forHome.png";
import bad from "../../../../images/furnitures/bad.png";
import tumb from "../../../../images/furnitures/tumb.png";
import stel from "../../../../images/furnitures/stel.png";
import bath from "../../../../images/furnitures/bath.png";
import decor from "../../../../images/furnitures/decor.png";

const Cards = () => {
    return (
        <div className={style.furnitureCards}>
            <div className={style.card}>
                <img src={ofice} alt="office furniture"/>
                <div>
                    <h2>ОФІСНІ СТОЛИ ТА МЕБЛІ</h2>
                </div>
            </div>
            <div className={style.card}>
                <img src={bar} alt="bar"/>
                <div>
                    <h2>БАРНІ СТІЙКИ</h2>
                </div>
            </div>
            <div>
                <div className={`${style.card} ${style.bad}`}>
                    <img src={bad} alt="office furniture"/>
                    <div>
                        <h2>ЛІЖКА</h2>
                    </div>
                </div>
                <div className={`${style.card} ${style.tumb}`}>
                    <img src={tumb} alt="office furniture"/>
                    <div>
                        <h2>ТУМБИ</h2>
                    </div>
                </div>
            </div>
            <div className={style.card}>
                <img src={stel} alt="office furniture"/>
                <div>
                    <h2>СТЕЛАЖІ</h2>
                </div>
            </div>
            <div className={style.card}>
                <img src={kitchen} alt="office furniture"/>
                <div>
                    <h2>МЕБЛІ ДЛЯ КУХНІ</h2>
                </div>
            </div>
            <div className={style.card}>
                <img src={house} alt="office furniture"/>
                <div>
                    <h2>ШАФИ ДЛЯ ДОМУ</h2>
                </div>
            </div>
            <div className={style.card}>
                <img src={bath} alt="bathroom"/>
                <div>
                    <h2>МЕБЛІ ДЛЯ ВАННИ</h2>
                </div>
            </div>
            <div className={style.card}>
                <img src={decor} alt="office furniture"/>
                <div>
                    <h2>ДЕКОР</h2>
                </div>
            </div>


        </div>
    );
};

export default Cards;
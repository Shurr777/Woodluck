import React, {useEffect} from 'react';
import style from './Portfolio.module.css'
import Portfolio_img from "../../../images/About/CB4A1425 1.png";
import Blum from "../../../images/Portfolio/62077715_306148160340710_4861842892479528960_n 1.png"
import DinnerRoom from "../../../images/Portfolio/image99 1.png"
import BedRoom from "../../../images/Portfolio/13 1.png"
import Office from "../../../images/Portfolio/ofice.png"
import PlayRoom from "../../../images/Portfolio/playRoom.png"
import Computers from "../../../images/Portfolio/computers.png"
import RedTable from "../../../images/Portfolio/redTable.png"
import BlackTable from "../../../images/Portfolio/blackTable.png"
import {NavLink, useLocation} from "react-router-dom";

const Portfolio = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (<div className={style.portfolio}>
        <div className={style.portfolioOverlay}>
            <img src={Portfolio_img} alt="Main"/>
            <h2>РЕАЛІЗОВАНІ ПРОЕКТИ</h2>
        </div>
        <div className={style.banner1}>
            <div className={style.bannerItem}>
                <h2>Екологічність та безпека</h2>
                <p>Ми використовуємо лише безпечний лак та клей, що не містить шкідливих хімікатів.</p>
            </div>
            <div className={style.bannerItem}>
                <h2>Практичність</h2>
                <p>Наші меблі служитимуть Вам вірно, віддано та довго</p>
            </div>
            <div className={style.bannerItem}>
                <h2>Індивідуальний підхід</h2>
                <p>Наші дизайнери підготують модель майбутнього виробу та проконсультують по матеріалах.</p>
            </div>
        </div>
        <div className={style.examples}>
            <div className={style.example}>
                <NavLink to={"blum"}>
                    <img src={Blum} alt="Blum Cafe"/>
                </NavLink>
            </div>
            <div className={style.example}>
                <NavLink to={"#"}>
                    <img src={DinnerRoom} alt="Dinner Room"/>
                </NavLink>
            </div>
            <div className={style.example}>
                <NavLink to={"hostel"}>
                    <img src={BedRoom} alt="Bedroom"/>
                </NavLink>
            </div>
            <div className={style.example}>
                <NavLink to={"gridDynamics"}>
                    <img src={Office} alt="office"/>
                </NavLink>
            </div>
            <div className={style.example}>
                <NavLink to={"projector"}>
                    <img src={PlayRoom} alt="Playroom"/>
                </NavLink>
            </div>
            <div className={style.example}>
                <NavLink to={"office"}>
                    <img src={Computers} alt="Computers"/>
                </NavLink>
            </div>
            <div className={style.example}>
                <NavLink to={"red_table"}>
                    <img src={RedTable} alt="Red table"/>
                </NavLink>
            </div>
            <div className={style.example}>
                <NavLink to={"black_table"}>
                    <img src={BlackTable} alt="Black table"/>
                </NavLink>
            </div>
        </div>
    </div>);
};

export default Portfolio;
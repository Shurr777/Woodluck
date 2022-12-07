import React, {useEffect} from 'react';
import style from './Portfolio.module.css'
import Portfolio_img from "../../../images/Portfolio/photo_2022-11-14_09-25-40.jpg";
import Blum from "../../../images/Portfolio/62077715_306148160340710_4861842892479528960_n 1.png"
import BedRoom from "../../../images/Portfolio/13 1.png"
import Office from "../../../images/Portfolio/ofice.png"
import PlayRoom from "../../../images/Portfolio/playRoom.png"
import Computers from "../../../images/Portfolio/computers.png"
import RedTable from "../../../images/Portfolio/redTable.png"
import {useLocation, useNavigate} from "react-router-dom";

const Portfolio = () => {
    const {pathname} = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const onBlumClick = () => {
        navigate("/blum");
    }
    const onRT_Click = () => {
        navigate("/red_table");
    }
    const onHostelClick = () => {
        navigate("/hostel");
    }
    const onProjectorClick = () => {
        navigate("/projector");
    }
    const onGridOfficeClick = () => {
        navigate("/gridDynamics");
    }
    const onPushGamingClick = () => {
        navigate("/office");
    }



    return (
        <div className={style.portfolio}>
            <div className={style.portfolioOverlay}>
                <img src={Portfolio_img} alt="Main"/>
                <h2> </h2>
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
                    <div>
                        <img src={Blum}
                             alt="Blum Cafe"
                             onClick={onBlumClick}
                        />
                        <h3>BLUM CAFÉ ROOM</h3>
                    </div>
                </div>
                <div className={style.example}>
                    <div>
                        <img src={RedTable}
                             alt="Red table"
                             onClick={onRT_Click}
                        />
                        <h3>ЛОФТОВИЙ ОФІС G5 ENTERTAINMENT</h3>
                    </div>
                </div>
                <div className={style.example}>
                    <div>
                        <img src={BedRoom}
                             alt="Hostel Room"
                             onClick={onHostelClick}
                        />
                        <h3>FRIENDS HOSTEL LVIV</h3>
                    </div>
                </div>
                <div className={style.example}>
                    <div>
                        <img src={PlayRoom}
                             alt="Playroom"
                             onClick={onProjectorClick}
                        />
                        <h3>PROJECTOR LVIV І СТУДІЯ ДИЗАЙНУ HAPPY</h3>
                    </div>
                </div>
                <div className={style.example}>
                    <div>
                        <img src={Office}
                             alt="office"
                             onClick={onGridOfficeClick}
                        />
                        <h3>ОФІС НА 100 РОБОЧИХ МІСЦЬ ДЛЯ GRID DYNAMICS</h3>
                    </div>
                </div>
                <div className={style.example}>
                    <div>
                        <img src={Computers}
                             alt="Computers"
                             onClick={onPushGamingClick}
                        />
                        <h3>ОФІС БРИТАНСЬКОЇ КОМПАНІЇ PUSH GAMING У ЛЬВОВІ</h3>
                    </div>
                </div>
                {/*<div className={style.example}>
                    <NavLink to={"#"}>
                        <img src={DinnerRoom} alt="Dinner Room"/>
                        <h3>ДИЗАЙН СТУДІЯ</h3>
                    </NavLink>
                </div>
                <div className={style.example}>
                    <NavLink to={"black_table"}>
                        <img src={BlackTable}
                             alt="Black table"
                        />
                        <h3>ПРИВАТНА КВАРТИРА У КИЄВІ</h3>
                    </NavLink>
                </div>*/}
            </div>
        </div>);
};

export default Portfolio;
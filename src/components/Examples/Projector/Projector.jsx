import React, {useEffect} from 'react';
import s from "./Projector.module.css";
import Projector_TitleImage from "../../../images/Portfolio/Projector/projector_main.png";
import Projector_Description from "../../../images/Portfolio/Projector/projector_description.png"
import BannerLeft from "../../../images/Portfolio/Projector/projector_banner_left.png"
import BannerRight from "../../../images/Portfolio/Projector/projector_banner_right.png"
import {useLocation, useNavigate} from "react-router-dom";


const Projector = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    const navigate = useNavigate();

    const connectHandleClick = () => {
        navigate("/contacts");
    }

    return (
        <div className={s.blum}>
            <div className={s.blumHeader}>
                <img src={Projector_TitleImage} alt="Main"/>
                <h2>PROJECTOR LVIV І СТУДІЯ ДИЗАЙНУ HAPPY</h2>
            </div>
            <div className={s.description}>
                <div className={s.text}>
                    <h3>
                        ОПИС ПРОЕКТУ
                    </h3>
                    <p>
                        Робочі зони знаходяться на двох поверхах: на першому великий open space і основна аудиторія,
                        класи Projector, коворкінг, мітінг-руми, скайп-рум та кухня. На другому працює команда HAPPY.
                        Простір складно назвати офісом у звичному розумінні. Тенісний стіл, гітари,
                        велосипед – усе максимально віддалене від типової офісної атмосфери.
                        Дизайн студія розробляла самотужки, команда WoodLuck реалізовувала їхні ідеї по дизайну меблів.
                    </p>
                </div>
                <div className={s.image}>
                    <img src={Projector_Description} alt=""/>
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
                        <li> масив бука, металеві драбинки ліжка покриті білою порошковою фарбою, стійкою до ударів і подряпин</li>
                        <li> фанера і ДСП</li>
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
                    На виході замовник отримав реалізація індивідуального дизайну та
                    мобільні меблі-трансформери
                </h3>
            </div>
            <div className={s.connect}>
                <div className={s.connectText}>
                    <p>Маєте ідею дизайн-проекту? Заповніть форму і ми зв’яжемось з вами! </p>
                </div>
                <button onClick={connectHandleClick}>Зв’язатись</button>
            </div>
        </div>
    );
};

export default Projector;
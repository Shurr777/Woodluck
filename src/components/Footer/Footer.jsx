import React from 'react';
import style from './Footer.module.css'
import logo from '../../images/LogoWoodluck 2.png'
import {NavLink, useNavigate} from "react-router-dom";
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaYoutubeSquare
} from 'react-icons/fa';


const Footer = () => {

    const navigate = useNavigate();

    const connectHandleClick = () => {
        navigate("/contacts");
    }
    return (
        <div className={style.footerOverlay}>
            <div className={style.logo}>
                <div className={style.logoText}>
                    <img src={logo} alt="logo"/>
                    <p>Соціальна майстерня, яка розробляє та виготовляє меблі на замовлення</p>
                </div>
                <div className={style.social}>
                    <p>Слідкуйте за нами в соц.мережах:</p>
                    <div className={style.icons}>
                        <a href="https://www.facebook.com/socialworkshopua/?ref=bookmarks"
                           target="_blank"
                           rel="noopener noreferrer">
                            <div className={style.socialIcon}>
                                <FaFacebookSquare/>
                            </div>
                        </a>
                        <a href="https://www.instagram.com/woodluck_ua/"
                           target="_blank" rel="noopener noreferrer">
                            <div className={style.socialIcon}>
                                <FaInstagramSquare/>
                            </div>
                        </a>
                        <a href="https://www.youtube.com/channel/UCPSsNkDVkRokQWLUctT33ow/featured"
                           target="_blank"
                           rel="noopener noreferrer">
                            <div className={style.socialIcon}>
                                <FaYoutubeSquare/>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className={style.menu}>
                <NavLink to='main' className={({isActive}) => `${isActive ? style.active : ''}`}>
                    Головна
                </NavLink>
                <NavLink to='about' className={({isActive}) => `${isActive ? style.active : ''}`}>
                    Про нас
                </NavLink>
                <NavLink to='portfolio' className={({isActive}) => `${isActive ? style.active : ''}`}>
                    Портфоліо
                </NavLink>
                <NavLink to='contacts' className={({isActive}) => `${isActive ? style.active : ''}`}>
                    Контакти
                </NavLink>
            </div>
            <div className={style.contacts}>
                <p>Львів, вул.Промислова 60</p>
                <p>Пн – Пт : 9:00 - 18:00</p>
                <p className={style.phones}>+38 073 145 9739<br/>+38 096 6353223</p>
                <p>luckwood60@gmail.com</p>
            </div>
            <div className={style.other}>
                <p>
                    Потрібна консультація
                    або залишилися запитання?
                </p>
                <button onClick={connectHandleClick}>Зв’язатися</button>
                <div className={style.lang}>
                   {/* <div className={style.switchLanguage}>
                        <p>EN</p>
                        <p>UA</p>
                    </div>
                    <div>
                        <img src={unknownLogo} alt="some logo"/>
                    </div>*/}
                </div>
                <p className={style.police}>Copyright © WoodLuck 2019. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
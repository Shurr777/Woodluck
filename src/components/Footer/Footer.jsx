import React from 'react';
import style from './Footer.module.css'
import logo from '../../images/woodluck-logo-300x50 1.png'
import facebook from '../../images/icons/facebook.png'
import insta from '../../images/icons/insta.png'
import youtube from '../../images/icons/youtube.png'
import unknownLogo from '../../images/icons/Group 14 1.png'
import {NavLink} from "react-router-dom";

const Footer = () => {
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
                        <img src={facebook} alt="facebook"/>
                        <img src={insta} alt="instagram"/>
                        <img src={youtube} alt="youtube"/>
                    </div>
                </div>
            </div>
            <div className={style.menu}>
                <NavLink to={'main'}>Головна</NavLink>
                <NavLink to={'about'}>Про нас </NavLink>
                <NavLink to={'portfolio'}>Портфоліо</NavLink>
                <NavLink to={'shop'}>Магазин</NavLink>
                <NavLink to={'contacts'}>Контакти</NavLink>
            </div>
            <div className={style.contacts}>
                <p>Львів, вул.Промислова 60</p>
                <p>Пон – П’ят : 9-00 до 18-00</p>
                <p className={style.phones}>+38 073 145 9739<br/>+38 096 6353223</p>
                <p>luckwood60@gmail.com</p>
            </div>
            <div className={style.other}>
                <p>
                    Потрібна консультація
                    або залишилися запитання?
                </p>
                <button>Зв’язатися</button>
                <div className={style.lang}>
                    <div className={style.switchLanguage}>
                        <p>EN</p>
                        <p>UA</p>
                    </div>
                    <div>
                        <img src={unknownLogo} alt="some logo"/>
                    </div>
                </div>
                <p className={style.police}>Copyright © WoodLuck 2019. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
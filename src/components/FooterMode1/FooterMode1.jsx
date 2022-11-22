import React from 'react';
import style from './FooterMode1.module.css'
import logo from '../../images/LogoWoodluck 2.png'
import {NavLink, useNavigate} from "react-router-dom";
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaYoutubeSquare
} from 'react-icons/fa';


const FooterMode1 = () => {

    const navigate = useNavigate();

    const connectHandleClick = () => {
        navigate("/contacts");
    }
    return (
        <div className={style.footerModeOverlay}>
            <div className={style.info}>
                <div className={style.contacts}>
                    <p>Львів,<br/> вул.Промислова 60</p>
                    <p>Пн – Пт : 9:00 - 18:00</p>
                    <a href="tel:+380966353223">+38 (096) 635-32-23</a>
                    <a href="tel:+380731459739">+38 (073) 145-97-39</a>
                    <a href="tel:+380503004379">+38 (050) 300-43-79</a>
                    <p>luckwood60@gmail.com</p>
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

                <div className={style.social}>
                    <p>Слідкуйте за нами в соц.мережах:</p>
                    <div className={style.icons}>
                        <a href="https://www.facebook.com/socialworkshopua/?ref=bookmarks"
                           target="_blank"
                           rel="noopener noreferrer">
                                <FaFacebookSquare/>
                        </a>
                        <a href="https://www.instagram.com/woodluck_ua/"
                           target="_blank"
                           rel="noopener noreferrer">
                                <FaInstagramSquare/>
                        </a>
                        <a href="https://www.youtube.com/channel/UCPSsNkDVkRokQWLUctT33ow/featured"
                           target="_blank"
                           rel="noopener noreferrer">
                                <FaYoutubeSquare/>
                        </a>
                    </div>
                    <div className={style.other}>
                        <p>Потрібна консультація або залишилися запитання?</p>
                        <button onClick={connectHandleClick}>Зв’язатися</button>
                    </div>
                </div>
            </div>
            <div className={style.logo}>
                <div className={style.logoImageContainer}>
                    <img src={logo} alt="logo"/>
                </div>
                <p>Copyright © WoodLuck 2019. All rights reserved.</p>
            </div>
        </div>
    )
        ;
};

export default FooterMode1;

/*



<div className={style.logo}>


</div>


*/

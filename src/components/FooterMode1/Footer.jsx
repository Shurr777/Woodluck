import React from 'react';
import style from './Footer.module.css'
import logo from '../../images/LogoWoodluck 2.png'
import {NavLink, useNavigate} from "react-router-dom";
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaYoutubeSquare
} from 'react-icons/fa';
import {useTranslation} from "react-i18next";



const Footer = () => {

    const navigate = useNavigate();

    const connectHandleClick = () => {
        navigate("/contacts");
    }
    const {t} = useTranslation();

    return (
        <div className={style.footerModeOverlay}>
            <div className={style.info}>
                <div className={style.contacts}>
                    <p>{t("footer.address.city")},<br/> {t("footer.address.address")}</p>
                    <p>{t("footer.worktime")}</p>
                    <a href="tel:+380966353223">+38 (096) 635-32-23</a>
                    <a href="tel:+380731459739">+38 (073) 145-97-39</a>
                    <p>luckwood60@gmail.com</p>
                </div>
                <div className={style.menu}>
                    <NavLink to='main' className={({isActive}) => `${isActive ? style.active : ''}`}>
                        {t("footer.footerMenu.main")}
                    </NavLink>
                    <NavLink to='about' className={({isActive}) => `${isActive ? style.active : ''}`}>
                        {t("footer.footerMenu.about")}
                    </NavLink>
                    <NavLink to='portfolio' className={({isActive}) => `${isActive ? style.active : ''}`}>
                        {t("footer.footerMenu.portfolio")}
                    </NavLink>
                    <NavLink to='contacts' className={({isActive}) => `${isActive ? style.active : ''}`}>
                        {t("footer.footerMenu.contacts")}
                    </NavLink>
                    <NavLink to='faq' className={({isActive}) => `${isActive ? style.active : ''}`}>
                        {t("footer.footerMenu.faq")}
                    </NavLink>
                    <NavLink to='gallery' className={({isActive}) => `${isActive ? style.active : ''}`}>
                        {t("footer.footerMenu.gallery")}
                    </NavLink>
                </div>

                <div className={style.social}>
                    <p>{t("footer.watch")}</p>
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
                        <p>{t("footer.consultation")}</p>
                        <button onClick={connectHandleClick}>{t("footer.connect")}</button>
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
};

export default Footer;


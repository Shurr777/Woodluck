import React from 'react';
import s from "./NHeader.module.css"
import style from "../Header/Header.module.css";
import {NavLink} from "react-router-dom";
import logo from '../../images/WoodLogo.png'

const NHeader = () => {
    return (
        <div className={s.headerOverlay}>
            <div className={s.logo}>
                <img src={logo} alt="logo"/>
            </div>
            <menu>
                <NavLink to='about' className={({isActive}) => `${isActive ? style.active : ''}`}>
                    Про нас
                </NavLink>
                <NavLink to='portfolio' className={({isActive}) => `${isActive ? style.active : ''}`}>
                    Портфоліо
                </NavLink>
                <NavLink to='services' className={({isActive}) => `${isActive ? style.active : ''}`}>
                    Послуги
                </NavLink>
                <NavLink to='faq' className={({isActive}) => `${isActive ? style.active : ''}`}>
                    Питання
                </NavLink>
                <NavLink to='contacts' className={({isActive}) => `${isActive ? style.active : ''}`}>
                    Контакти
                </NavLink>
            </menu>
            <div className={s.phones}>
                <p>+38(096)635 32 23</p>
                <p>+38(073)145 97 39</p>
            </div>

        </div>
    );
};

export default NHeader;
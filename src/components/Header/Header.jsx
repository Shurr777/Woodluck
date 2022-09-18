import React from 'react';
import logo from '../../images/woodluck-logo-300x50 1.png'
import {NavLink} from "react-router-dom";
import style from './Header.module.css'


const Header = () => {
    return (
        <div className={style.headerOverlay}>
            <div className={style.headerContainer}>
                <div className={style.logo}>
                    <NavLink to={'main'}>
                        <img src={logo} alt="Logo"/>
                    </NavLink>
                </div>
                <div className={style.navBar}>
                    <NavLink to={'about'}>About</NavLink>
                    <NavLink to={'portfolio'}>Portfolio</NavLink>
                    <NavLink to={'services'}>Services</NavLink>
                    <NavLink to={'shop'}>Shop</NavLink>
                    <NavLink to={'contacts'}>Contacts</NavLink>
                </div>
                <div className={style.phones}>
                    <span>+38 (096) 635 32 23</span>
                    <span>+38 (073) 145 97 39</span>
                </div>
            </div>
        </div>
    );
};

export default Header;
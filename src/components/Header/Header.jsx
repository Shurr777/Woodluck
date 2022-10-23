import React, {useState} from 'react';
import logo from '../../images/woodluck-logo-300x50 1.png'
import {NavLink} from "react-router-dom";
import style from './Header.module.css'
import Modal from "../Modal/Modal";


const Header = () => {

    const [isModal, setModal] = useState(false);

    const onMenuClick = () => {
        setModal(true)
    }

    return (
        <div className={style.headerOverlay}>
            <div className={style.headerContainer}>
                <div className={style.menu} onClick={onMenuClick}>
                    <div className={style.line}></div>
                    <div className={style.line}></div>
                    <div className={style.line}></div>
                </div>
                <div className={style.logo}>
                    <NavLink to={'main'}>
                        <img src={logo} alt="Logo"/>
                    </NavLink>
                </div>
                <div className={style.navBar}>
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
                </div>
                {isModal
                    ?
                    <Modal isModal={isModal} setModal={setModal}/>
                    :
                    null}
                <div className={style.phones}>
                    <span>+38 (096) 635 32 23</span>
                    <span>+38 (073) 145 97 39</span>
                </div>
            </div>
        </div>
    );
};

export default Header;
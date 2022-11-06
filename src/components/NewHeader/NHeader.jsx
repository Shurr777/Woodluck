import React, {useState} from 'react';
import style from "./NHeader.module.css"
import {NavLink} from "react-router-dom";
import logo from '../../images/WoodLogo.png'
import Modal from "../Modal/Modal";

const NHeader = () => {

    const [isModal, setModal] = useState(false);

    const onMenuClick = () => {
        setModal(true)
    }

    return (
        <div className={style.headerOverlay}>
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
            <menu className={style.navBar}>
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
            {isModal
                ?
                <Modal isModal={isModal} setModal={setModal}/>
                :
                null}
            <div className={style.phones}>
                <p>+38(096)635 32 23</p>
                <p>+38(073)145 97 39</p>
            </div>

        </div>
    );
};

export default NHeader;
import React from 'react';
import {NavLink} from "react-router-dom";
import style from "./Modal.module.css";

const Modal = (props) => {
    return (
        <div className={style.modal}>
            <div className={style.navList}>
                <NavLink to='main' className={({isActive}) => `${isActive ? style.active : ''}`}
                         onClick={() => props.setModal(false)}>
                    Головна
                </NavLink>
                <NavLink to='about' className={({isActive}) => `${isActive ? style.active : ''}`}
                         onClick={() => props.setModal(false)}>
                    Про нас
                </NavLink>
                <NavLink to='portfolio' className={({isActive}) => `${isActive ? style.active : ''}`}
                         onClick={() => props.setModal(false)}>
                    Портфоліо
                </NavLink>
               {/* <NavLink to='services' className={({isActive}) => `${isActive ? style.active : ''}`}
                         onClick={() => props.setModal(false)}>
                    Послуги
                </NavLink>
                <NavLink to='shop' className={({isActive}) => `${isActive ? style.active : ''}`}
                         onClick={() => props.setModal(false)}>
                    Магазин
                </NavLink>*/}
                <NavLink to='contacts' className={({isActive}) => `${isActive ? style.active : ''}`}
                         onClick={() => props.setModal(false)}>
                    Контакти
                </NavLink>
            </div>
            <button onClick={() => props.setModal(false)}>
                &#10006;
            </button>
        </div>
    );
};

export default Modal;
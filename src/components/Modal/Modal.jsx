import React from 'react';
import {NavLink} from "react-router-dom";
import style from "./Modal.module.css";
import {useTranslation} from "react-i18next";
import "../../i18next"

const Modal = (props) => {

    const { t } = useTranslation()

    return (
        <div className={style.modal}>
            <div className={style.navList}>
                <NavLink to='main' className={({isActive}) => `${isActive ? style.active : ''}`}
                         onClick={() => props.setModal(false)}>
                    {t("modal.main")}
                </NavLink>
                <NavLink to='about' className={({isActive}) => `${isActive ? style.active : ''}`}
                         onClick={() => props.setModal(false)}>
                    {t("modal.about")}
                </NavLink>
                <NavLink to='portfolio' className={({isActive}) => `${isActive ? style.active : ''}`}
                         onClick={() => props.setModal(false)}>
                    {t("modal.portfolio")}
                </NavLink>
                {/*<NavLink to='services' className={({isActive}) => `${isActive ? style.active : ''}`}
                         onClick={() => props.setModal(false)}>
                    Галерея
                </NavLink>
                <NavLink to='shop' className={({isActive}) => `${isActive ? style.active : ''}`}
                         onClick={() => props.setModal(false)}>
                    Магазин
                </NavLink>*/}
                <NavLink to='contacts' className={({isActive}) => `${isActive ? style.active : ''}`}
                         onClick={() => props.setModal(false)}>
                    {t("modal.contacts")}
                </NavLink>
                <div className={style.langButtonBlock}>
                    <button  onClick={() => props.changeLanguage("ua")}>
                        UA
                    </button>
                    <button  onClick={() => props.changeLanguage("en")}>
                        EN
                    </button>
                </div>
            </div>
            <button onClick={() => props.setModal(false)}>
                &#10006;
            </button>

        </div>
    );
};

export default Modal;
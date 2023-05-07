import React, {useState} from 'react';
import style from "./NHeader.module.css"
import {NavLink, useNavigate} from "react-router-dom";
import logo from '../../images/LogoWoodluck 2.png'
import Modal from "../Modal/Modal";
import {useTranslation} from "react-i18next";
import "../../i18next"
import {useSelector} from "react-redux";
import {useActions} from "../../hooks/useActions";
import LoginForm from "../Forms/LoginForm";


const NHeader = ({changeLanguage}) => {
    const navigate = useNavigate();
    const [isModal, setModal] = useState(false);
    const [logModal, setLogModal] = useState(true);

    const isAuth = useSelector(state => state.authReducer.isAuth)
    const username = useSelector(state => state.authReducer.user)
    const {login, logout} = useActions()

    console.log("isAuth:", isAuth, "Name", username)

    const onMenuClick = () => {
        setModal(true)
    }
    const onIconClick = () => {
        navigate("/contacts");
        setModal(false)
    }

    /*const onLoginClick = () => {
        setLogModal(true)
    }

    const onFinish = (name, pass) => {
        console.log("submit finish")
        login(name, pass)
        setLogModal(false)
    };*/

    const {t} = useTranslation()

    return (
        <div className={style.overlay}>
           {/* {logModal ? <LoginForm onFinish={onFinish}/> : null}*/}
            <div className={style.headerOverlay}>
                <div className={style.callIcon}
                     onClick={onIconClick}
                >
                    <svg
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        /* ariaHidden="true"*/
                        height="2em" width="2em" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                              clipRule="evenodd">
                        </path>
                    </svg>
                </div>
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

                   {/* <div className={style.loginBlock}>
                        <p>{username.username}</p>
                        {isAuth ?
                            <button
                                className={style.loginButton}
                                onClick={logout}
                            >logout
                            </button> :
                            <button
                                className={style.loginButton}
                                onClick={onLoginClick}
                            >login
                            </button>
                        }
                    </div>*/}

                    <div className={style.navBlock}>
                        {isAuth ?
                            <NavLink to='blog' className={({isActive}) => `${isActive ? style.active : ''}`}>
                                Blog
                            </NavLink>:
                            null
                        }
                        <NavLink to='about' className={({isActive}) => `${isActive ? style.active : ''}`}>
                            {t("mainMenu.about")}
                        </NavLink>
                        <NavLink to='portfolio' className={({isActive}) => `${isActive ? style.active : ''}`}>
                            {t("mainMenu.portfolio")}
                        </NavLink>
                        <NavLink to='gallery' className={({isActive}) => `${isActive ? style.active : ''}`}>
                            {t("mainMenu.gallery")}
                        </NavLink>
                        <NavLink to='faq' className={({isActive}) => `${isActive ? style.active : ''}`}>
                            {t("mainMenu.faq")}
                        </NavLink>
                        <NavLink to='contacts' className={({isActive}) => `${isActive ? style.active : ''}`}>
                            {t("mainMenu.contacts")}
                        </NavLink>
                    </div>

                </menu>
                {isModal
                    ?
                    <Modal
                        isModal={isModal}
                        setModal={setModal}
                        changeLanguage={changeLanguage}
                    />
                    :
                    null}
                <div className={style.phones}>
                    <div className={style.langBlock}>
                        <select onChange={(e) => changeLanguage(e.target.value)} defaultValue={'ua'}>
                            <option
                                value="ua" selected="selected">
                                UA
                            </option>
                            <option
                                value="en">
                                EN
                            </option>
                        </select>
                    </div>
                </div>
                <div className={style.phonesBlockDesc}>
                    <p>+38 (096) 635-32-23</p>
                    <p>+38 (073) 145-97-39</p>
                </div>
            </div>
            <div className={style.phonesBlockMob}>
                <a href="tel:+380966353223">+38(096)635-32-23</a>
                <a href="tel:+380731459739">+38(073)145-97-39</a>
            </div>
        </div>
    );
};

export default NHeader;
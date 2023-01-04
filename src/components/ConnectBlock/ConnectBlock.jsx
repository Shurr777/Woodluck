import React from 'react';
import s from "./ConnectBlock.module.css";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

const ConnectBlock = () => {

    const navigate = useNavigate();
    const { t } = useTranslation()

    const connectHandleClick = () => {
        navigate("/contacts");
    }
    return (
        <div className={s.connect}>
            <div className={s.connectText}>
                <p>{t("connectBlock.text")}</p>
            </div>
            <button onClick={connectHandleClick}>{t("connectBlock.button")}</button>
        </div>
    );
};

export default ConnectBlock;
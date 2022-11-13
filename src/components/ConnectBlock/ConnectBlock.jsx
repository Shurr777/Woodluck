import React from 'react';
import s from "./ConnectBlock.module.css";
import {useNavigate} from "react-router-dom";

const ConnectBlock = () => {
    const navigate = useNavigate();
    const connectHandleClick = () => {
        navigate("/contacts");
    }
    return (
        <div className={s.connect}>
            <div className={s.connectText}>
                <p>Маєте ідею дизайн-проекту? Заповніть форму і ми зв’яжемось з вами! </p>
            </div>
            <button onClick={connectHandleClick}>Зв’язатися</button>
        </div>
    );
};

export default ConnectBlock;
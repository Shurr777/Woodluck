import React from 'react';
import style from './Clients.module.css'
import hotsit from '../../../../images/Clients/1479381028-Лого (нет, презентація) (1) 1.png'
import univer from '../../../../images/Clients/logo_uk 1.png'
import business from '../../../../images/Clients/54_main-v1582879975 1.png'
import startup from '../../../../images/Clients/sturtup-depot 1.png'
import bur from '../../../../images/Clients/unnamed 1.png'
import ten from '../../../../images/Clients/download 1.png'

const Clients = () => {
    return (
        <div className={style.clientsOverlay}>
            <h2>НАШІ КЛІЄНТИ</h2>
            <div className={style.clientsBlock}>
                <div className={style.clientsItem}><img src={hotsit} alt=""/></div>
                <div className={style.clientsItem}><img src={univer} alt=""/></div>
                <div className={style.clientsItem}><img src={business} alt=""/></div>
                <div className={style.clientsItem}><img src={startup} alt=""/></div>
                <div className={style.clientsItem}><img src={bur} alt=""/></div>
                <div className={style.clientsItem}><img src={ten} alt=""/></div>
            </div>
        </div>
    );
};

export default Clients;
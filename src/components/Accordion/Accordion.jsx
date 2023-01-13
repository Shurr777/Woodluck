import React, {useState} from 'react';
import s from './Accordion.module.css'
import {useTranslation} from "react-i18next";


const Accordion = ({idx}) => {

    const [isActive, setIsActive] = useState(false);
    const {t} =useTranslation()

    return (
        <li className={s.accordion_item}>
            <div className={s.accordion_toggle}
                 onClick={() => setIsActive(!isActive)}>
                <h3>{t("faq.heading" + idx)}</h3><span>{isActive ? "-" : "+"}</span>
            </div>
            <div>
                {isActive && <div className={s.accordion_content}>{t("faq.content" + idx)}</div>}
            </div>
        </li>
    );
};


const Accord = () => {

    const accordionData = [];

    for (let i = 1; i <= 5 ; i++) {
        accordionData.push({idx: i})
    }

    return (

        <div className={s.overlay}>
            <ul className={s.accordion}>
                {accordionData.map(({idx}) => (
                    <Accordion idx={idx} key={idx}/>)
                )}
            </ul>
        </div>
    );
};

export default Accord;


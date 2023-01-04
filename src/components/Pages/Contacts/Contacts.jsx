import React, {useEffect} from 'react';
import s from "./Contacts.module.css"
import ContactForm from "../../Forms/ContactForm";
import {useLocation} from "react-router-dom";
import {useTranslation} from "react-i18next";

const Contacts = () => {

    const { pathname } = useLocation();

    const { t } =useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    return (
        <div className={s.contacts}>
            <div className={s.mapOverlay}>
                <iframe className={s.map}
                        title={"map"}
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2571.8588622185207!2d24.0439831!3d49.8638958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473adcfd65a33b95%3A0xc0de2bf062cb85ee!2z0LLRg9C70LjRhtGPINCf0YDQvtC80LjRgdC70L7QstCwLCA2MCwg0JvRjNCy0ZbQsiwg0JvRjNCy0ZbQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA3OTAwMA!5e0!3m2!1suk!2sua!4v1668024631364!5m2!1suk!2sua"
                        allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className={s.textOverlay}>
                <h2>{t("contacts.contact")}</h2>
                <p>{t("contacts.address")}</p>
                <div className={s.contactsPhone}>
                    <p>+38 096 6353223</p>
                    <p>+38 073 145 9739</p>
                </div>
                <p>luckwood60@gmail.com</p>
                <p>{t("contacts.workingTime")}</p>
            </div>
            <ContactForm/>
        </div>
    );
};

export default Contacts;


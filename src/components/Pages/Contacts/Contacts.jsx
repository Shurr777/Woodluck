import React from 'react';
import s from "./Contacts.module.css"
import ContactForm from "../../Forms/ContactForm";

const Contacts = () => {

    return (
        <div className={s.contacts}>
            <div className={s.mapOverlay}>
                <iframe className={s.map}
                        title={"map"}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2571.890529193529!2d24.039745234340696!3d49.863300971490816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add0285541d65%3A0x6fbf09e8969cca9!2z0YPQuy4g0J_RgNC-0LzRi9GB0LvQvtCy0LAsIDYwLCDQm9GM0LLQvtCyLCDQm9GM0LLQvtCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDc5MDAw!5e0!3m2!1sru!2sua!4v1666433837644!5m2!1sru!2sua"
                    /*allowFullScreen=""*/
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">

                </iframe>
               <ContactForm/>
            </div>
            <div className={s.textOverlay}>
                <h2>Зв'язатися з нами:</h2>
                <p>Львів, вул.Промислова 60</p>
                <p>+38 073 145 9739</p>
                <p>+38 096 6353223</p>
                <p>luckwood60@gmail.com</p>
                <p>Пон – П’ят : 9-00 до 18-00</p>
                <div className={s.social}></div>
            </div>
        </div>
    );
};

export default Contacts;
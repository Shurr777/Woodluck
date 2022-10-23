import React from 'react';
import s from "./Contacts.module.css"
import ContactForm from "../../Forms/ContactForm";

const Contacts = () => {

    return (
        <div className={s.contacts}>
            <div className={s.mapOverlay}>
                <iframe className={s.map}
                        title={"map"}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1285.9453084547322!2d24.043135558305725!3d49.863299323838376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add0285541d65%3A0x6fbf09e8969cca9!2z0LLRg9C70LjRhtGPINCf0YDQvtC80LjRgdC70L7QstCwLCA2MCwg0JvRjNCy0ZbQsiwg0JvRjNCy0ZbQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCDQo9C60YDQsNGX0L3QsCwgNzkwMDA!5e0!3m2!1suk!2sse!4v1666538717110!5m2!1suk!2sse"
                    allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
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
               <ContactForm/>
        </div>
    );
};

export default Contacts;
import React, {useRef, useState} from 'react';
import s from "./ContactForm.module.css";
import emailjs from '@emailjs/browser';
import {useTranslation} from "react-i18next";

const ContactForm = () => {

    const form = useRef()

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [comments, setComments] = useState('')
    const [send, setSend] = useState(false)
    const { t } = useTranslation()

    /*  const isValidPhone = (myPhone) => {
          return /^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/.test(myPhone);
      }
      const isValidEmail = (Email) => {
          return /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(Email)
      }
      const isValidComments = (Comments) => {
          return /^[\u0400-\u052F\u2DE0-\u2DFF\uA640-\uA69F']+$/.test(Comments)
      }*/

    const onNameChanged = (e) => {
        let Name = e.target.value
        setName(Name)
    }
    const onPhoneChanged = (e) => {
        let Phone = e.target.value
        setPhone(Phone)
    }
    const onEmailChanged = (e) => {
        let Email = e.target.value
        setEmail(Email)
    }
    const onCommentsChanged = (e) => {
        let Comments = e.target.value
        setComments(Comments)
    }

    const sendEmail = (e) => {
        e.preventDefault()
        //validation!!!
        emailjs.sendForm('service_woe0854', 'template_q8cof3h', form.current, '96FteI58tmd_KJmx3')
            .then((result) => {
                setName("")
                setPhone("")
                setEmail("")
                setComments("")
                setSend(true)
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className={s.formOverlay}>
            <form ref={form}
                  className={s.form}
                  onSubmit={sendEmail}>
                <div className={s.comments}>
                    <label htmlFor="text">{t("contacts.contactForm.comments")}</label>
                    <textarea type="text"
                              name="user_text"
                              value={comments}
                              onChange={event => onCommentsChanged(event)}/>
                    {send ?
                        <div className={s.sending}>{t("contacts.contactForm.sent")}</div> :
                        <div className={s.formButtonContainer}>
                            <button type="submit">{t("contacts.button")}</button>
                        </div>
                    }
                </div>
                <div className={s.userInfo}>
                    <div className={s.block}>
                        <label htmlFor="text">{t("contacts.contactForm.name")}</label>
                        <input type="text"
                               name="user_name"
                               value={name}
                               onChange={event => onNameChanged(event)}
                               required
                        />
                    </div>
                    <div className={s.block}>
                        <label htmlFor="text">{t("contacts.contactForm.phone")}</label>
                        <input type="text"
                               name="user_phone"
                               value={phone}
                               onChange={event => onPhoneChanged(event)}
                               required
                        />
                    </div>
                    <div className={s.block}>
                        <label htmlFor="email">Email:</label>
                        <input type="text"
                               name="user_email"
                               value={email}
                               onChange={event => onEmailChanged(event)}
                        />
                    </div>
                </div>

            </form>
        </div>
    );
};

export default ContactForm;
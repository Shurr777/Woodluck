import React, {useState} from 'react';
import s from "./ContactForm.module.css";

const ContactForm = () => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [comments, setComments] = useState('')

    const isValidPhone = (myPhone) => {
        return /^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/.test(myPhone);
    }
    const isValidEmail = (Email) => {
        return /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(Email)
    }
    const isValidComments = (Comments) => {
        return /^[\u0400-\u052F\u2DE0-\u2DFF\uA640-\uA69F']+$/.test(Comments)
    }

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
    const onSubmit = (e) => {
        e.preventDefault()
        let formData = {
            name: name,
            phone: phone,
            email: email,
            comments: comments
        }
        console.log(formData)

    }
    return (
        <div>
            <form action="../../sandler.php"
                  method="POST"
                  className={s.form}>
                <label htmlFor="text">Ім'я:</label>
                <input type="text"
                       name="name"
                       value={name}
                       onChange={event => onNameChanged(event)}
                       required
                />
                <div className={s.userContacts}>
                    <div className={s.block}>
                        <label htmlFor="text">Телефон:</label>
                        <input type="text"
                               name="phone"
                               value={phone}
                               onChange={event => onPhoneChanged(event)}
                               required
                        />
                    </div>
                    <div className={s.block}>
                        <label htmlFor="email">Email:</label>
                        <input type="text"
                               name="email"
                               value={email}
                               onChange={event => onEmailChanged(event)}
                        />
                    </div>
                </div>
                <label htmlFor="text">Коментарі:</label>
                <textarea type="text"
                          name="comments"
                          value={comments}
                          onChange={event => onCommentsChanged(event)}
                />
               {/* <input type="submit"
                       value="Відправити"
                       onClick={event => onSubmit(event)}
                />*/}
                <button type="button">send</button>
            </form>
        </div>
    );
};

export default ContactForm;
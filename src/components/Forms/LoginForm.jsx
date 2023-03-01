import React, {useState} from 'react';
import style from "./LoginForm.module.css";


const LoginForm = ({onFinish}) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')



    return (
        <div className={style.logModalBlock}>
            <div className={style.logCard}>
                <div className={style.logExit}>
                    <p>&times;</p>
                </div>
                <form>
                    <div className={style.inputBlock}>
                        <label htmlFor="name">Insert username</label>
                        <input
                            name="name"
                            placeholder="Name"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                        <label htmlFor="password">Insert password</label>
                        <input
                            name="password"
                            placeholder="Password"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div className={style.buttonBlock}>
                        <button
                            onClick={ ()=>onFinish(username, password)}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
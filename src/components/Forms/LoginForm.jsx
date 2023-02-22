import React, {useState} from 'react';
import {Button, Checkbox, Form, Input} from "antd";
import {useSelector} from "react-redux";
import {useActions} from "../../hooks/useActions";


const LoginForm = () => {

    const {error, isLoading} = useSelector(state => state.authReducer)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {login} = useActions()


    const onFinish = () => {
        console.log("submit finish")
        login(username, password)
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form

            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 12,
            }}
            style={{
                maxWidth: 800,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Введіть ім\'я !!',
                    },
                ]}
            >
                <Input value={username}
                       onChange={e => setUsername(e.target.value)}
                />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Введіть пароль',
                    },
                ]}
            >
                <Input.Password value={password}
                                onChange={e => setPassword(e.target.value)}
                />
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}

            >
                {/*<Button type="primary"
                        htmlType="submit"
                        style={{padding_top: 0}}
                >
                    Submit
                </Button>*/}
                <button
                    type="submit"
                    style={{
                        backgroundColor: '#c5d02f',
                        color: '#282828',
                        margin: "0",
                        padding: '10px 20px'
                }}
                >submit
                </button>
            </Form.Item>
        </Form
            >
    );
};

export default LoginForm;
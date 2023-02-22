import React from 'react';
import {Card, Layout, Row} from "antd";
import LoginForm from "../../Forms/LoginForm";
import s from './Login.module.css'


const Login = () => {
    return (
        <div className={s.loginContainer}>
            <Layout>
                <Row justify='center' align='middle' className='h100'>
                    <Card style={{position: 'absolute', top: 200}}>
                        <LoginForm/>
                    </Card>
                </Row>
            </Layout>
        </div>
    );
};

export default Login;
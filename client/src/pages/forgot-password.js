import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './forgot-password.css'
import Logo from '../images/logo.png';
import Icon from '../images/email_icon.png';
import Form from 'react-bootstrap/Form';


export default function Confirmation() {
    const [email, SetEmail] = useState("");
    const navigate = useNavigate();
    const loginPage = useCallback(() => navigate('/login', { replace: true }), [navigate]);
    return (
        <div className="password">
            <div className="passwordBackground">
                <img className="logo" src={Logo}></img>
                <p className="text">Enter the email address you used to register for an account.</p>
                <Form className='row d-flex justify-content-center'>
                    <Form.Control id="email" className="sendField" type="text" placeholder='Email' value={email} onChange={e => SetEmail(e.target.value)} /> <br />
                </Form>
                <button className="send" >Continue</button>
            </div>
        </div>
    )
}

//<p className="resend2" onClick={loginPage}>Login Page</p>
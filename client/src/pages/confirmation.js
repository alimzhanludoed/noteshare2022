import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './confirmation.css'
import Logo from '../images/logo.png';
import Icon from '../images/email_icon.png';


export default function Confirmation() {
    /*const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");*/
    const navigate = useNavigate();
    const loginPage = useCallback(() => navigate('/login', { replace: true }), [navigate]);
    return (
        <div className="confirmation">
            <div className="confirmationBackground">
                <img className="logo" src={Logo}></img>
                <h5 className='message'>Confirm Email Address</h5>
                <img className="icon" src={Icon}></img>
                <p className="text"><b>A verification email has been sent to the email address provided</b> </p>
                <p className="check">Check your email for a verification email from "account@intellichoice.org".</p>
                <div className='wrapper'>
                    <p className="resend">Resend Email</p>
                    <p className="resend2" onClick={loginPage}>Login Page</p>
                </div>
            </div>

        </div>
    )
}
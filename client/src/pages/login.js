import React, { useCallback, useState, useRef, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'
import Logo from '../images/logo.png';
//import AuthContext from "../context/AuthProvider";
import Form from 'react-bootstrap/Form';

//const LOGIN_URL = '/auth';

export var Email = "";

export default function Login() {
    //const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    //const errRef = useRef();

    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    //const [errMsg, setErrMsg] = useState('');
    //const [success, setSuccess] = useState(false);

    const navigate = useNavigate();
    const fPassword = useCallback(() => navigate('/forgot-password', { replace: true }), [navigate]);
    const account = useCallback(() => navigate('/account', { replace: true }), [navigate]);
    const cAccount = useCallback(() => navigate('/signup', { replace: true }), [navigate]);

    const login = useCallback(() => navigate('/home', { replace: true }), [navigate]);
    //useEffect(() => {
    //    userRef.current.focus();
    //}, [])
    //
    //useEffect(() => {
    //    setErrMsg('');
    //}, [email, password])

    /*
    const axios = require("axios")

    const loginReq = () => {
        SetEmail("");
        SetPassword("");
        axios.post('/login', {
            email: email,
            password: password

        }).then((res) => {
            console.log("Login Data Sent");
            console.log(res.data);
        });
    }*/


    return (
        <div className="login">
            <div className="loginBackground bg-white">
                <img className="mainlogo" alt="IntelliChoice Logo" src={Logo}></img>
                <Form className="row d-flex justify-content-center">
                    <Form.Control id="email" className="loginFields" type="text" ref={userRef} placeholder='Email' value={email} onChange={e => SetEmail(e.target.value)} required />  <br />
                    <Form.Control id="password" className="loginFields" type="password" placeholder='Password' value={password} onChange={e => SetPassword(e.target.value)} required /> <div className='break' />
                    <p className="forgot" onClick={fPassword}>Forgot Password?</p> <div className='break' />
                    <button className="loginButton" onClick={login}>Login</button>
                </Form>
                <div className="lines"></div>
                <p className="text">Don't  have an account?</p>
                <button className="createAccount" onClick={cAccount}>Create Account</button>
            </div>

        </div>
    )
}
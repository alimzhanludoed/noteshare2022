import React, { useCallback, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './account.css'
import Logo from '../images/logo.png';

//const LOGIN_URL = '/auth';

export default function Login() {
    //const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    //const errRef = useRef();

    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    //const [errMsg, setErrMsg] = useState('');
    //const [success, setSuccess] = useState(false);

    const navigate = useNavigate();
    //const account = useCallback(() => navigate('/account', { replace: true }), [navigate]);

    const login = () => {
        //account();
    }

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
        <div className="account">
            <div className="accountBackground bg-white">
                <img className="logo" alt="IntelliChoice Logo" src={Logo}></img>
                <div className='break'></div>
                Welcome, Anirudh
                <div className="profile"></div>
                <div className="attendance"></div>
                <div className="status"></div>
                <div className="policies"></div>
            </div>
            <div className="resources"></div>
        </div>
    )
}
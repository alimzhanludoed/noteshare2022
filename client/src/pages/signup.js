import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';
import Logo from '../images/logo.png';
import Form from 'react-bootstrap/Form';
const axios = require('axios');

//const USER_REGEX = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/;
//const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export default function Signup() {

    const [first, SetFirst] = useState("");
    const [last, SetLast] = useState("");
    const [number, SetNumber] = useState("");
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const [role, SetRole] = useState("");

    const [errors, SetErrors] = useState([]);

    const roles = ['student', 'tutor', 'parent'];

    const navigate = useNavigate();
    const login = useCallback(() => navigate('/login', { replace: true }), [navigate]);
    const confirm = useCallback(() => navigate('/confirmation', { replace: true }), [navigate]);



    const submit = async () => {
        var b = document.getElementById("role");
        var e = parseInt(b.value);

        if (e === 0) {
            SetRole("Please select a role");
        }
        else {
            SetRole("");
            axios.post(
                'http://localhost:8000/' + roles[e - 1], {
                firstName: first,
                lastName: last,
                phoneNumber: number,
                email: email,
                password: password,
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            },
            )
                .catch(function (error) {
                    SetErrors(error.response.data)
                });
        }
    }

    /*
    const signupReq = () => {
        SetFirst("");
        SetLast("");
        SetEmail("");
        SetPassword("");
        axios.post('/signup', {
            email: email,
            password: password,
            first: first,
            last: last
        }).then((res) => {
            console.log("Signup Data Sent");
            console.log(res.data);
        });
    }*/


    return (
        <div className="signup">
            <div className="signupBackground">
                <img className="logo" alt="IntelliChoice Logo" src={Logo}></img>
                <div className='row d-flex justify-content-center'>
                    <Form.Control id="first" className="signupFields" type="text" placeholder='First Name' value={first} onChange={e => SetFirst(e.target.value)} /> <br />
                    <div className="error">
                        {errors[0]}
                    </div>
                    <Form.Control id="last" className="signupFields" type="text" placeholder='Last Name' value={last} onChange={e => SetLast(e.target.value)} /> <br />
                    <div className="error">
                        {errors[1]}
                    </div>
                    <Form.Control id="number" className="signupFields" type="text" placeholder='Phone Number' value={number} onChange={e => SetNumber(e.target.value)} /> <br />
                    <div className="error">
                        {errors[2]}
                    </div>
                    <Form.Control id="email" className="signupFields" type="text" placeholder='Email' value={email} onChange={e => SetEmail(e.target.value)} /> <br />
                    <div className="error">
                        {errors[3]}
                        {errors[5]}
                    </div>
                    <Form.Control id="password" className="signupFields" type="password" placeholder='Password' value={password} onChange={e => SetPassword(e.target.value)} /> <br />
                    <div className="error">
                        {errors[4]}
                    </div>
                    <select size="sm" id='role' className="form-select signupFields" aria-label=".form-select-sm example">
                        <option value='0' disabled selected>I am a...</option>
                        <option value="1">Student</option>
                        <option value="2">Tutor</option>
                        <option value="3">Parent/Guardian</option>
                    </select>
                    <div className="error">
                        {role}
                    </div>
                    <button className="signupButton" onClick={submit}>Sign Up</button>
                    <div className="break"></div>
                    <p className="loginRedirect" onClick={login}>Already have an account?</p>
                </div>
            </div>
        </div>
    )
}

/*<div class="select">
                    <select name="format" id="format">
                        <option selected disabled>I am a...</option>
                        <option value="pdf">PDF</option>
                        <option value="txt">txt</option>
                        <option value="epub">ePub</option>
                        <option value="fb2">fb2</option>
                        <option value="mobi">mobi</option>
                    </select>
                </div>*/
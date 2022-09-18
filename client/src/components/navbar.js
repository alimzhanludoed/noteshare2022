import React from 'react';
import Logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar({ username }) {
    return (
        <nav className='navbar'>
            <Link to='/home'>
                <img className='logo' src={Logo} alt='Scribble' />
            </Link>
            <button className='profile'>{username}</button>
        </nav>
    );
}
import React from 'react';
import Logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
    const username = 'Swastik Agarwala';
    return (
        <nav className='navbar'>
            <Link to='/home'>
                <img className='logo' src={Logo} alt='' />
            </Link>
            <button className='profile'>{username}</button>
        </nav>
    );
}
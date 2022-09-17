import React from 'react';
import Navbar from '../components/navbar';
import './home.css';
import CourseCard from '../components/coursecard';
import Logo from '../images/logo.png';

export default function Home() {
    return (
        <>
            <Navbar />
            <br />
            <br />
            <br />
            <div className="container">
                <div className='back'>
                    <CourseCard name='Multivariate Calculus' logo={Logo} instructor='Andrey Glubukov' university='Purdue University'/>
                </div>
            </div>
        </>
    );
}
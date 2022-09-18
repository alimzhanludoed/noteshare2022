import React from 'react';
import Navbar from '../components/navbar';
import './home.css';
import CourseCard from '../components/coursecard';
import Logo from '../images/logo.png';

export default function Home() {
    return (
        <>
            <br />
            <br />
            <br />
            <div className="container">
                <div className='back'>
                    <CourseCard name='Multivariate Calculus' logo={Logo} instructor='Tyler Potler' university='Purdue University'/>
                    <CourseCard name='Elementry Psychology' logo={Logo} instructor='Marco Zhang' university='Purdue University'/>
                    <CourseCard name='Microeconomics' logo={Logo} instructor='Dev' university='Purdue University'/>
                    <CourseCard name='CS Orientation' logo={Logo} instructor='Swastik Agarwala' university='Purdue University'/>
                    <div className="line"></div>
                    <CourseCard name='Macroeconomics' logo={Logo} instructor='Anirudh Kaza' university='Purdue University'/>
                    <CourseCard name='General Chemistry' logo={Logo} instructor='Andrew' university='Purdue University'/>
                    <CourseCard name='Biotechnology' logo={Logo} instructor='Jennifer Liu' university='Purdue University'/>
                </div>
            </div>
        </>
    );
}
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './coursecard.css';

export default function CourseCard({ logo, name, instructor, university }) {
    
    let navigate = useNavigate();

    return (
        <div className='cardbackground' onClick={
                () => {navigate('/units/'+name,{state: {instructor: instructor}});}
            }>
            <img className='courseimage' src={logo} alt={name} />
            <div className='container'>
                <div className="cardcontent">
                    {name}
                    <div className="line"></div>
                    <span className='content'>
                        {instructor}
                        <br />
                        {university}
                    </span>
                </div>
            </div>
        </div>
    );
}
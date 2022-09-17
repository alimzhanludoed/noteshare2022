import React from 'react';
import { useNavigate } from 'react-router-dom';
import './coursecard.css';

export default function CourseCard(props) {
    
    let navigate = useNavigate();

    return (
        <div className='cardbackground' onClick={
                () => {navigate('/units/'+props.name);}
            }>
            <img className='courseimage' src={props.logo} alt={props.name} />
            <div className='container'>
                <div className="cardcontent">
                    {props.name}
                    <div className="line"></div>
                    <span className='content'>
                        {props.instructor}
                        <br />
                        {props.university}
                    </span>
                </div>
            </div>
        </div>
    );
}
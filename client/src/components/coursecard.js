import React from 'react';
import './coursecard.css';

export default function CourseCard(props) {
    
    return (
        <div className='cardbackground'>
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
import React from 'react';
import './test.css'
import { useParams } from 'react-router-dom';
import Navbar from '../components/navbar';

export default function Test() {

  const {coursename, section} = useParams();

  return (
    <div className="test">
      <Navbar />
      <div className='maindiv'>
        <h4>{coursename} {section}</h4>
        <button className='uploadbutton'>Upload</button>
      </div>
      <hr />
    </div>
  );
}
  

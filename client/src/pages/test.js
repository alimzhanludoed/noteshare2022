import React from 'react';
import './test.css'
import { useParams } from 'react-router-dom';
import Navbar from '../components/navbar';
import axios from 'axios';

export default function Test() {

  const {coursename, section} = useParams();

  function uploadPDF() {
    const doclink = prompt('Enter link (Make sure that the document is public)');
    if (doclink == null) {}
    else {
      axios.post(
        'http://localhost:8000/docs', {
          course: coursename+"/"+section,
          link: doclink
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        },
        ).catch(function (err) {
          alert(err)
        });
    }
  }

  return (
    <div className="test">
      <Navbar />
      <div className='maindiv'>
        <h4>{coursename} {section}</h4>
        <button className='uploadbutton' onClick={uploadPDF}>Upload</button>
      </div>
      <hr />
    </div>
  );
}
  

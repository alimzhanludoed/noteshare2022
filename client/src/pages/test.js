import React, { useState } from 'react';
import './test.css'
import { useParams } from 'react-router-dom';
import Navbar from '../components/navbar';
import axios from 'axios';

export default function Test() {

  const { coursename, section } = useParams();
  const [doc, setDoc] = useState();
  const [active, setActive] = useState(false);

  function uploadPDF() {
    const doclink = prompt('Enter link (Make sure that the document is public)');
    if (doclink == null) { }
    else {
      setDoc(doclink);
      setActive(true);
      /*axios.post(
        'http://localhost:8000/docs', {
        course: coursename + "/" + section,
        link: doclink
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      },
      ).catch(function (err) {
        alert(err)
      });*/
    }
  }

  const getDoc = async () => {
    axios.post("http://localhost:8000/docs/create", { course: coursename + "/" + section }).then((response) => {
      alert(response);
      setDoc(response);
    }).catch((error) => {
      alert(error)
    });
  };



  return (
    <div className="test">
      <div className='maindiv'>
        <h4>{coursename} {section}</h4>
        <button className='uploadbutton' onClick={uploadPDF}>Upload</button>
      </div>

      <hr />
      {/*<button className='uploadbutton' onClick={getDoc}>Display Notes</button>*/}
      {active &&
      <iframe width='50%' height='1000' src={doc}></iframe>}
    </div>
  );
}


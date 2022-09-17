import React from 'react';
import { useParams } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import './units.css'
import Navbar from '../components/navbar';

export default function Units() {

    const { coursename } = useParams();

    return (
      <>
        <Navbar />
        <div className="test">
          <h1>{coursename}</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Lesson Name</th>
                <th>Teacher Name</th>
                <th>PDF Link</th>
                <th>Author Name</th>
                <th>Language</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Section 14.1 Vectors</td>
                <td>Toms</td>
                <td><a href="http://localhost:3000/test">LINK</a></td>
                <td>Bob Field</td>
                <td>English</td>
          
              </tr>
              <tr>
                <td>Section 14.1 Vectors</td>
                <td>Jacob</td>
                <td><a href="http://localhost:3000/test">LINK</a></td>
                <td>Thornton</td>
                <td>English</td>
              </tr>
              <tr>
                <td>Section 14.2 Vectors</td>
                <td>Sir</td>
                <td><a href="http://localhost:3000/test">LINK</a></td>
                <td>Pencilton</td>
                <td>English</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </>
    );
    }
    
  
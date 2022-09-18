import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import './units.css'
import Navbar from '../components/navbar';

export default function Units() {

    const { coursename } = useParams();
    const location = useLocation();
    let instructor = location.state.instructor;
    let link = "http://localhost:3000/test/"+coursename+"/";

    return (
      <div>
        <div className="test">
          <h1>{coursename}</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Lesson Name</th>
                <th>Teacher Name</th>
                <th>PDF Link</th>
                <th>Language</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Section 1</td>
                <td>{instructor}</td>
                <td><a className="link" href={link+'1'}>LINK</a></td>
                <td>English</td>
          
              </tr>
              <tr>
                <td>Section 2</td>
                <td>{instructor}</td>
                <td><a className="link" href={link+'2'}>LINK</a></td>
                <td>English</td>
              </tr>
              <tr>
                <td>Section 3</td>
                <td>{instructor}</td>
                <td><a className="link" href={link+'3'}>LINK</a></td>
                <td>English</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
}
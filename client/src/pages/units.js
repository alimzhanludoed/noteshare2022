import React, { useCallback, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import './units.css'

export default function Units() {
    return (
        <div className="test">
            <h1>Multivariable Calculus</h1>
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
    );
    }
    
  
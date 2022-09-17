import React, { useCallback, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Document, Page } from 'react-pdf';
import SinglePagePDFViewer from "../components/pdf/single-page";
import samplePDF from "./sample.pdf";
import './test.css'

export default function Test() {
  return (
    <div className="App">
      <h4>Multi-Variable Calculus</h4>
      <SinglePagePDFViewer pdf={samplePDF} />

      <hr />
    </div>
  );
}
  

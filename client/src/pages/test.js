import React from 'react';
import SinglePagePDFViewer from "../components/single-page";
import samplePDF from "../pdfs/sample.pdf";
import './test.css'
import { useParams } from 'react-router-dom';

export default function Test() {


  return (
    <div className="test">
      <SinglePagePDFViewer pdf={samplePDF} />

      <hr />
    </div>
  );
}
  

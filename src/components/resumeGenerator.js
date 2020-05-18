import React, { useState, useEffect } from 'react';
import ReactJson from 'react-json-view';

import ResumePreview from './resumePreview';

import { sampleData } from '../data/sample';

const ResumeGenerator = () => {
  const [data, setData] = useState(sampleData);

  const handleFetch = (e) => {
    e.preventDefault();
    const input = document.getElementById('input-fetch');
    console.log(input.value)
    fetch(input.value).then(res => res.json()).then(data=> setData(data))
  }
  const update = (newData) => {
    setData(newData)
  }
  const test = (e) => {
    console.log(e)
  }

  return (
    <div className="resume-generator">
      <h1>Resume Builder</h1>
      <h3>Scroll below to edit data</h3>
      <ResumePreview data={data} />
      <form onSubmit={handleFetch}>
        <input type="text" id="input-fetch" placeholder="enter data endpoint" />
        <input type="submit" value="Fetch data"/>
      </form>
      <ReactJson src={data} />
    </div>
  )
}
export default ResumeGenerator;

import React, { useState, useEffect } from 'react';

import ResumePreview from './resumePreview';

import { sampleData } from '../data/sample';

const ResumeGenerator = () => {
  const [data, setData] = useState(sampleData);

  const handleFetch = (e) => {
    e.preventDefault();
    const input = document.getElementById('input-fetch');
    console.log(input.value)
    fetch(input.value).then(res => res.json()).then(data=> console.log(data))
  }

  return (
    <div className="resume-generator">
      <h1>Resume Builder</h1>
      <form onSubmit={handleFetch}>
        <input type="text" id="input-fetch" placeholder="enter data endpoint" />
        <input type="submit" value="Fetch data"/>
      </form>
      <ResumePreview data={data} />
    </div>
  )
}
export default ResumeGenerator;

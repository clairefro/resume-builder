import React, { useState, useEffect } from 'react';
import ReactJson from 'react-json-view';

import ResumePreview from './resumePreview';

import { sampleData } from '../data/sample';

const ResumeGenerator = () => {
  const [data, setData] = useState(sampleData);
  const [theme, setTheme] = useState('light');

  const handleFetch = (e) => {
    e.preventDefault();
    const input = document.getElementById('input-fetch');
    console.log(input.value)
    fetch(input.value).then(res => res.json()).then(data=> setData(data))
  }

  const update = (e) => {
    const newData = {
      data: e.updated_src
    }
    console.log(e)
    setData(e.updated_src)
  }

  const updateTheme = () => {
    const selector = document.getElementById('theme-select')
    setTheme(selector.value)
  }

  const reset = () => {
    setData(sampleData)
  }

  return (
    <div className="resume-generator">
      <h1>Resume Builder</h1>
      <h3>Scroll below to edit data</h3>

      <div className='screens'>

        <div className="left-screen">
          <ResumePreview data={data} theme={theme} />
        </div>
        <div className="right-screen">
          <p>Theme</p>
          <select onChange={updateTheme} id="theme-select">
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
          <form onSubmit={handleFetch}>
            <input type="text" id="input-fetch" placeholder="enter data endpoint" />
            <input type="submit" value="Fetch data"/>
          </form>
          <button onClick={reset}>Reset data</button>
          <p>Click the edit pen next to an item, then the check mark to edit the data</p>
          <ReactJson theme="monokai" src={data} onEdit={update}/>
        </div>

      </div>



    </div>
  )
}
export default ResumeGenerator;

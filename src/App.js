import React from 'react';
import './styles/index.scss';

import ResumeGenerator from './components/resumeGenerator';

function App() {
  return (
    <div className="App">
      <div className="container">
        <ResumeGenerator />
      </div>
    </div>
  );
}

export default App;

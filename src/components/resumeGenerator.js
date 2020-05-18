import React from 'react';

import ResumePreview from './resumePreview';

import { data } from '../data/sample';

const ResumeGenerator = () => (
  <div className="resume-generator">
    <h1>Resume Builder</h1>

    <ResumePreview data={data} />
  </div>
)

export default ResumeGenerator;

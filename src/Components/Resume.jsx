import React from 'react';
import Intro from './Intro.jsx';
import Skills from './Skills.jsx';
import Projects from './Projects.jsx';
import Experience from './Experience.jsx';
import Education from './Education.jsx';
const { resumeData } = require('../../server/resumeData.js');

const Resume = () => (
  <div className="right-inner">

    <Intro data={resumeData[0]}/>
    <Skills data={resumeData[1]}/>
    <Education data={resumeData[2]}/>
    <Projects data={resumeData[3]}/>
    <Experience data={resumeData[4]}/>
  </div>
)

export default Resume;
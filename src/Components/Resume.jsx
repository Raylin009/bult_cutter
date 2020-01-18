import React from 'react';
import Intro from './Intro.jsx';
import Skills from './Skills.jsx';
import Projects from './Projects.jsx';
import Experience from './Experience.jsx';
import Education from './Education.jsx';

const Resume = () => (
  <div className="right-inner">
    <Intro />
    <Skills />
    <Education />
    <Projects />
    <Experience />
    {/* <div>Download PDF</div> */}
  </div>
)

export default Resume;
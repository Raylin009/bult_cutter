import React from 'react';
import Intro from './Intro.jsx';
import Skills from './Skills.jsx';
import Projects from './Projects.jsx';
import Experience from './Experience.jsx';
import Education from './Education.jsx';
// import ResumeBlock from './ResumeBlock.jsx';
const { resumeData } = require('../../server/resumeData.js');

const Resume = () => (
  <div className="right-inner">
    {/* {console.log(resumeData)} */}
    {/* <ResumeBlock data={ resumeData }/> */}

    <Intro data={resumeData[0]}/>
    <Skills data={resumeData[1]}/>
    {/* <Education /> */}
    {/* <Projects /> */}
    {/* <Experience /> */}
    {/* <div>Download PDF</div> */}
  </div>
)

export default Resume;
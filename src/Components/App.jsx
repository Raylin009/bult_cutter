import React from 'react';
import style from './../style.scss';
import Path from 'path';
import Resume from './Resume.jsx';

const App = () => (
  <div className="container">
    <div className="left">
      <div className="left-inner">
        <h1>Hi, I'm Ray</h1>
        <h3>Software engineering base in the <br></br> Bay Area/San Fransico, CA <br></br>I graduated from Hack Reactor @ Galvanize </h3>
      </div>
    </div>
    <div className="right">
      <Resume />
    </div>
  </div>
)

export default App;

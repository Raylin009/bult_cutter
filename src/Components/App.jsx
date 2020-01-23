import React from 'react';
import style from './../style.scss';
import Resume from './Resume.jsx';

const App = () => (
  <div className="container">
    <div className="left">
      <div className="left-inner">
        <h1>Hi, I'm Ray</h1>
        <div>Software engineering base in the <br></br> Bay Area/San Fransico, CA <br></br>I graduated from Hack Reactor @ Galvanize
        </div>
        <div className="social-link">
          <a href="https://www.instagram.com/raylin009/">
            <i class="fa fa-instagram fa-lg" aria-hidden="true"></i>
          </a>
          <a href="https://github.com/Raylin009/">
            <i class="fa fa-github fa-lg" aria-hidden="true"></i>
          </a>
          <a href="https://www.linkedin.com/in/ray-lin/">
            <i class="fa fa-linkedin fa-lg" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
    <div className="right">
      <Resume />
    </div>
  </div>
)

export default App;

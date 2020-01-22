import React from 'react';

const Projects = ({data}) => (
  <div className={data.name}>
    <h4>{data.name}</h4>
    <ul className="resume-content">
      {data.content.map((p) => (
        <li>
          <div>{p.name}</div>
          <ul>
            {p.content.map((role) => (
              <li>
                {role.content.map((des) => ( des.content ))}
              </li>
            ))}
          </ul>
        </li>
        
      ))}
    </ul>
    <ul>
      <li>
        <h4>Open Chair, restaurant reservation service</h4>
        <i>Software Developer SEP 2019</i>
        <ul>
          <li>Triple module service request capacity from 500 to 1500 requests per second by implementing NGINX load balancer across 6 AWS EC2 instances.</li>
          <li>Reduced query time by migrating development level MySQL database to production level MongoDB.</li>
          <li>Built RESTful API for image carousel module using Express.JS.</li>
          <li>Decreased query time by 80% through de-normalizing and re-indexing database.</li>
          <li>Applied Agile methodology, led morning Scrum meetings, and conducted code reviews to track deliverable timeline.</li>
          <li>Coordinated with team members and conducted code review to ensure module compatibility across service.</li>
        </ul>
      </li>
      <li>
        <h4>Pristine, Man's fashion service</h4>
        <i>Front End Developer JUL 2019</i>
        <ul>
          <li>Executed all visual design stages from concept to implementation.</li>
          <li>Built all modules using React, Express, Node, Bluma CSS framework, Google Map API, and deployed service on AWS EC2 instance.</li>
          <li>Created user stories, wireframes, and user flow for web to effectively communicate interaction and design ideas.</li>
          <li>Conducted user research and test design concepts through rapid prototyping.</li>
        </ul>
      </li>
      <li>
        <h4>GHRSEA Express, online shopping site</h4>
        <i>Software Developer MAY 2019</i>
        <ul>
          <li>
            Built React modules from scratch using Express in Node.js and deployed via AWS EC2.
          </li>
          <li>
            Deployed proxy server using AWS EC2 via Docker container.
          </li>
          <li>
            Improved Google page speed insight score by 300% through utilizing Webpack’s built-in minifier.
          </li>
          <li>
            Designed and created user stories, wireframes, and feature requirements using UX design methodology.
          </li>
          <li>
            Implemented unit tests with Jest & Enzyme with 71% code coverage.
          </li>
        </ul>
      </li>
    </ul>
  </div>
);

export default Projects;
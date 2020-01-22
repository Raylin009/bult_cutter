import React from 'react';

const Skills = ({data}) => (
  <div className={data.name}>
    <h4>{data.name}</h4>
    <div className="resume-content">
      {data.content.map((item, index)=>(
        <div key={`${data.name}.0.${index}`}>
          <strong>{item.name}</strong>
          <p>{item.content.join(', ')}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
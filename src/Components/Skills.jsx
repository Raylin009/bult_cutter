import React from 'react';

const Skills = ({data}) => (
  <div className={`resume-catagotry ${data.name}`}>
    <h4>{data.name}</h4>
    <div className={`${data.name}-resume`}>
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
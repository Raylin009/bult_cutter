import React from 'react';

const Experience = ({data}) => (
  <div className={data.name}>
    <h4>{data.name}</h4>
    <ul className="resume-content">
      {data.content.map((p, index) => ( 
        <li key={`${data.name}.${index}`}>
          <div>{p.name}</div>
          <span>{`${p.timeSt} - ${p.timeEnd}`}</span>
          <ul>
            {p.content.map((description, i) => ( 
              <li key={`${data.name}.${index}.${i}`}>{description}</li>
            ))}
          </ul>
        </li>
        
      ))}
    </ul>
  </div>
);

export default Experience;
import React from 'react';

const Experience = ({data}) => (
  <div className={data.name}>
    <h4>{data.name}</h4>
    <div className="resume-content">
      {data.content.map((p, index) => ( 
        <div key={`${data.name}.${index}`}>
          <div className="subtitle">
            <a>{p.name}</a>
            <div className='duration' >{`${p.timeSt} - ${p.timeEnd}`}</div>
          </div>
          <ul>
            {p.content.map((description, i) => ( 
              <li key={`${data.name}.${index}.${i}`}>{description}</li>
            ))}
          </ul>
        </div>
        
      ))}
    </div>
  </div>
);

export default Experience;
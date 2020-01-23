import React from 'react';

const Education = ({data}) => (
  <div className={data.name}>
    <h4>{data.name}</h4>
    <div className="resume-content">
      {data.content.map((item, index)=>(
        <div key={`${data.name}.0.${index}`}>
          <div className="subtitle">{item.name}</div>
          {item.content.map((description, index)=> (<p key={`${data.name}.0.0.${index}`}>{description}</p>))}
          <i>{`${item.timeSt} - ${item.timeEnd}`}</i>
        </div>
      ))}
    </div>
  </div>
);

export default Education;
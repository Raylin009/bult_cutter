import React from 'react';

const Intro = ({data}) => (
  <div className={data.name}>
    <h4>{data.name}</h4>
    <div className="resume-content">
      {data.content.map((items, index) => (<p key={`${data.name}-${index}`}>{items}</p>))}
    </div>
  </div>
);

export default Intro;
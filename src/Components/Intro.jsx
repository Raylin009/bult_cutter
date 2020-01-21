import React from 'react';

const Intro = ({data}) => (
  <div className={`resume-catagotry-${data.name}`}>
    {/* <h4>{data.title}</h4> */}
    <div>
      {/* {data.content.map((items) => (<p>{items}</p>))} */}
    </div>
  </div>
);

export default Intro;
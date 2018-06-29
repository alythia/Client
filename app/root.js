import React, { Component } from 'react';

const alythiaKey = '1870a660-7bab-11e8-a50a-cb434e7eca97';
//key stored here in component for now

export const Root = () => {
  return (
    <div>
      <img src="./numberFire.jpeg" style={styling.img} />
      <a
        href={`http://localhost:8080/api/clients/${alythiaKey}`}
        style={styling.button}
      />
    </div>
  );
};
const styling = {
  img: { width: '100%' },
  button: {
    position: 'fixed',
    left: '42vw',
    top: '38vw',
    width: '250px',
    height: '50px',
    zIndex: 3,
    cursor: 'pointer'
  }
};

export default Root;

import React, { Component } from 'react';

const alythiaKey = '982ad660-7e39-11e8-a0f6-fdeeb517a1c7';
//key stored here in component for now

export const Root = () => {
  return (
    <div>
      <img src="./numberFire.jpeg" style={styling.img} />
      <a
        href={`http://alythia.herokuapp.com/api/clients/${alythiaKey}`}
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
    cursor: 'pointer',
  },
};

export default Root;

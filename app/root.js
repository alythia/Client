import React, { Component } from 'react';

const alythiaKey = '27f09100-7e2f-11e8-b6aa-9397b1b48ee9';
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
    cursor: 'pointer'
  }
};

export default Root;

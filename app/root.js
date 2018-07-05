import React from 'react';

const alythiaKey = '7e73df70-8067-11e8-b509-818c3872b782';
//key stored here in component for now

export const Root = () => {
  return (
    <div>
      <img src="./numberFire.png" style={styling.img} />
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

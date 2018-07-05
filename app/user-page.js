import React from 'react';

export const UserPage = props => {
  console.log(props);
  return (
    <div>
      <img src="./logged-in.jpeg" style={styling.img} />
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

export default UserPage;

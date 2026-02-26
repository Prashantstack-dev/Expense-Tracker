import React from 'react';

const Decrease = ({  setCount }) => {
  const handleDecrease = () => {
    setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  };

  return (
    <button onClick={handleDecrease}>Decrease</button>
  );
};

export default Decrease

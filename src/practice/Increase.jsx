import React from 'react';

const Increase = ({ setCount }) => {
    const handleIncrease = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        <button onClick={handleIncrease}>Increase</button>
    );
};

export default Increase;

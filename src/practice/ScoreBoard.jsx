import React from "react";
import { useState } from "react";
import Increase from "./Increase";
import Decrease from "./Decrease";

const ScoreBoard = () => {
  const [count, setCount] = useState(0);
  const [countO, setCountO] = useState(0);

  return (
    <div style={{ margin: '10px', textAlign: 'center' }}>
      <h2>Count Player1: {count}</h2>
      <Decrease setCount={setCount} />
      <Increase setCount={setCount} />
      {/* condition1 ? 'result1' : condition2 ? 'result2' : 'result3' */}
    <h3>{count > countO ? 'Player1 wins' : countO > count ? 'Player 2 wins': 'Draw'}</h3>
    <h2>Count Player2: {countO}</h2>
      <Decrease setCount={setCountO} />
      <Increase setCount={setCountO} />

    <button style={{display:'flex', textAlign:'center'}} onClick={()=> { setCount(0)
        setCountO(0)
    }}>Reset</button>
      
    </div>
  );
};

export default ScoreBoard;

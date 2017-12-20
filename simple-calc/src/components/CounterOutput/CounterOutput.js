import React from 'react';
import './CounterOutput.css';

const CounterOutput = (props) => {
  return (
    <div className="counter-output">
      Current Count: {props.value}
    </div>
  )
}

export default CounterOutput;
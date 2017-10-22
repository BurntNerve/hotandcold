import React from 'react';

export default function Display(props) {
  if (props.displaySize === 'large') {
    return (
      <div className="display">
        <h1 className={props.result}>{props.result}</h1>
      </div>
    );
  } else if (props.displaySize === 'small') {
    return (
      <div className="display">
        <p className="guessHistory">{props.history}</p>
      </div>
    );
  }
}

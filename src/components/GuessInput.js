import React from 'react';

export default function GuessInput(props) {
  return (
    <input
      value={props.guess}
      className="guessInput "
      type="text"
      placeholder="Enter a number..."
      maxLength="3"
      onChange={e => props.onChange(e.target.value)}
    />
  );
}

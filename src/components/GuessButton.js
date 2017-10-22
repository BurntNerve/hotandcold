import React from 'react';

export default function GuessButton(props) {
  if (props.again === 'playing') {
    return (
      <button className="guessButton" onClick={() => props.makeGuess()}>
        Guess
      </button>
    );
  } else if (props.again === 'over') {
    return (
      <button
        className="guessButton againButton"
        onClick={() => props.playAgain()}
      >
        Play Again?
      </button>
    );
  }
}

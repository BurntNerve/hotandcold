import React from 'react';
import GuessInput from './GuessInput';
import Display from './Display';
import GuessButton from './GuessButton';

export default class Platform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guess: '',
      attempts: 0,
      result: 'cold',
      history: [],
      game: 'playing'
    };
  }

  setGuess(guess) {
    this.setState({
      guess
    });
  }

  setResult(result) {
    this.setState({
      result
    });
  }

  setHistory(guess) {
    this.setState({
      history: [...this.state.history, guess + ' ']
    });
  }

  setGame(game) {
    this.setState({
      game
    });
  }

  reloadPage() {
    document.location.reload(true);
  }

  makeGuess(guess) {
    if (isNaN(guess)) {
      alert('Please enter a number.');
    } else if (guess > 100 || guess < 0) {
      alert('Please enter a number between 0 and 100');
    } else if (guess == false) {
      alert('Please enter an answer.');
    } else {
      const absoluteValue = Math.abs(guess - this.props.targetNumber);
      this.setState({
        attempts: this.state.attempts + 1
      });
      this.setHistory(guess);
      console.log(absoluteValue);
      if (absoluteValue === 0) {
        this.setResult('correct');
        this.setGame('over');
      } else if (absoluteValue <= 10) {
        this.setResult('hot');
      } else if (absoluteValue <= 20) {
        this.setResult('warmer');
      } else {
        this.setResult('cold');
      }
    }
  }

  render() {
    return (
      <div className="platform">
        <Display result={this.state.result} displaySize="large" />
        <GuessInput
          onChange={value => this.setGuess(value)}
          value={this.state.guess}
        />
        <GuessButton
          className="guessButton"
          again={this.state.game}
          makeGuess={() => this.makeGuess(this.state.guess)}
          playAgain={() => this.reloadPage()}
        />
        <h1 className="history">Try #{this.state.attempts}</h1>
        <Display displaySize="small" history={this.state.history} />
      </div>
    );
  }
}

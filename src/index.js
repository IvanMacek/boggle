import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Dice extends React.Component {

  generateRandomBoard() {
      const dices = [
                      "AAEEGN", "ABBJOO", "ACHOPS", "AFFKPS",
                      "AOOTTW", "CIMOTU", "DEILRX", "DELRVY",
                      "DISTTY", "EEGHNW", "EEINSU", "EHRTVW",
                      "EIOSST", "ELRTTY", "HIMNUQu", "HLNNRZ"
                    ];
      let charOne = "";
      for (let i=0; i<dices[0].length; i++){
        charOne = dices[0][Math.floor(Math.random() * 6)];
      }
      return charOne;
  }
  render() {
    return (
      <button className="Dice" >
        {this.generateRandomBoard()}
      </button>
    );
  }
}


class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      dices: Array(16).fill(null),
    };
  }
renderDice(i) {
    return <Dice />;
  }
  render() {
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderDice(0)}
          {this.renderDice(1)}
          {this.renderDice(2)}
          {this.renderDice(3)}
        </div>
        <div className="board-row">
          {this.renderDice(4)}
          {this.renderDice(5)}
          {this.renderDice(6)}
          {this.renderDice(7)}
        </div>
        <div className="board-row">
          {this.renderDice(8)}
          {this.renderDice(9)}
          {this.renderDice(10)}
          {this.renderDice(11)}
        </div>
        <div className="board-row">
          {this.renderDice(12)}
          {this.renderDice(13)}
          {this.renderDice(14)}
          {this.renderDice(15)}
        </div>
        <div className="input-field">
        <form onSubmit=''>
            <input type='text' placeholder='Enter a term' ref='term'></input>
        </form>
        </div>
      </div>

    );
  }
}

class Game extends React.Component {

    render() {
      return (
        <div className="Game">
          <div className="game-board">
            <Board  />
          </div>
        </div>
      );
    }
  }


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Boggle</h2>
        </div>
        <div className='main-game'>
          <Game />
          </div>

      </div>
    );
  }
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
);





import React from 'react';
import Board from './Board'

class Game extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      board: this.generateRandomBoard()
    }
  }

  generateRandomBoard() {
    return [
      'ABCD',
      'ABCD',
      'ABCD',
      'ABCD'
    ]

   /* const diceCombinations = [
      "AAEEGN", "ABBJOO", "ACHOPS", "AFFKPS",
      "AOOTTW", "CIMOTU", "DEILRX", "DELRVY",
      "DISTTY", "EEGHNW", "EEINSU", "EHRTVW",
      "EIOSST", "ELRTTY", "HIMNUQu", "HLNNRZ"
    ];
    let charOne = "";
    for (let i=0; i<diceCombinations[0].length; i++){
      charOne = dices[0][Math.floor(Math.random() * 6)];
    }
    return charOne;*/
  }

  render () {
    return (
      <div className="Game">
        <div className="game-board">
          <Board configuration={this.state.board} />
        </div>
      </div>
    )
  }
}

export default Game
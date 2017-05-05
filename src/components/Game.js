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
    const diceCombinations = [
      "AAEEGN", "ABBJOO", "ACHOPS", "AFFKPS",
      "AOOTTW", "CIMOTU", "DEILRX", "DELRVY",
      "DISTTY", "EEGHNW", "EEINSU", "EHRTVW",
      "EIOSST", "ELRTTY", "HIMNUQ", "HLNNRZ"
    ]

    /* TOOD: Implement a random algorithm */

    return [
      'ABCD',
      'ABCD',
      'ABCD',
      'ABCD'
    ]
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
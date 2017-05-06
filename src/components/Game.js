import React from 'react'
import Board from './Board'

class Game extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      board: this.generateRandomBoard()
    }
  }

  generateRandomBoard () {
    const diceCombinations = [
      'AAEEGN', 'ABBJOO', 'ACHOPS', 'AFFKPS',
      'AOOTTW', 'CIMOTU', 'DEILRX', 'DELRVY',
      'DISTTY', 'EEGHNW', 'EEINSU', 'EHRTVW',
      'EIOSST', 'ELRTTY', 'HIMNUQ', 'HLNNRZ'
    ]

    /* TOOD: Implement a random algorithm */
      // taking one char from string
    let char = ''
    let j = 0
    for (let i = diceCombinations[j]; j < diceCombinations.length; j++) {
      char += diceCombinations[j][Math.floor(Math.random() * diceCombinations[j].length)]
    }
      // shuffle characters
    let shuffled = char.split('').sort(function () { return 0.5 - Math.random() }).join('')
      // spliting shuffled string into segment of 4
    let chunks = []

    for (let i = 0; i < shuffled.length; i += 4) {
      chunks.push(shuffled.substring(i, i + 4))
    }
    return chunks
  }

  render () {
    return (
      <div className='Game'>
        <div className='game-board'>
          <Board configuration={this.state.board} />
        </div>
      </div>
    )
  }
}

export default Game

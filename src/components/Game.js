import React from 'react'
import Board from './Board'
import PlayerDashboard from './PlayerDashboard'
import _ from 'lodash'

class Game extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      board: this.generateRandomBoard(),
      playerBoard: this.isStringOnTheBoard()
    }
  }

  generateRandomBoard () {
    const diceCombinations = [
      'AAEEGN', 'ABBJOO', 'ACHOPS', 'AFFKPS',
      'AOOTTW', 'CIMOTU', 'DEILRX', 'DELRVY',
      'DISTTY', 'EEGHNW', 'EEINSU', 'EHRTVW',
      'EIOSST', 'ELRTTY', 'HIMNUQ', 'HLNNRZ'
    ]

    const randomPickCharacter = string => string[Math.floor(Math.random() * string.length)]

    const diceLayout = diceCombinations.map(randomPickCharacter)
    const shuffledArray = _.shuffle(diceLayout)
    return _.chunk(shuffledArray, 4)
      .map(characters => characters.join(''))
  }

  isStringOnTheBoard () {

  }

  render () {
    return (
      <div className='Game'>
        <div className='game-board'>
          <Board configuration={this.state.board} />
          <PlayerDashboard inputField={this.state.playerBoard} />
        </div>
      </div>
    )
  }
}

export default Game

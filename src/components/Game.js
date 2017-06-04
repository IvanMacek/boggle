import React from 'react'
import Board from './Board'
import PlayerDashboard from './PlayerDashboard'
import Timer from './Timer'
import _ from 'lodash'

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

    const randomPickCharacter = string => string[Math.floor(Math.random() * string.length)]

    const diceLayout = diceCombinations.map(randomPickCharacter)
    const shuffledArray = _.shuffle(diceLayout)
    return _.chunk(shuffledArray, 4)
      .map(characters => characters.join(''))
  }

  render () {
    return (
      <div className='game'>
        <div className='game-board'>
          <p className='playerOne'> Player One </p>
          <Board configuration={this.state.board} />
          <PlayerDashboard configuration={this.state.board} />
          <Timer />
        </div>
      </div>

    )
  }
}

export default Game

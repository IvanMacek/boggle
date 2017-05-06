import React from 'react'

class Board extends React.Component {
  render () {
    const { configuration } = this.props
    return (
      <div>
        {configuration.map((row, index) =>
          <div key={index} className='board-row'>
            {row.split('').map((character, index) =>
              <button key={index} className='Dice'>{character}</button>)
            }
          </div>)
        }
      </div>
    )
  }
}

export default Board

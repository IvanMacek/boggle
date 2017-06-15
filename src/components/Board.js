import React from 'react'

class Board extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedBlocks: []
    }
  }

  blockClick(row, column) {
    const { configuration } = this.props

    this.setState(oldState => {
      return {
        selectedBlocks: oldState.selectedBlocks.concat({
          row,
          column,
          value: configuration[row][column]
        })
      }
    })
  }

  isBlockSelected(row, column) {
    return this.state.selectedBlocks.some(selectedBlock => selectedBlock.row === row && selectedBlock.column === column)
  }

  blockClassName(row, column) {
    return 'dice' + (this.isBlockSelected(row, column) ? ' selected' : '')
  }

  render() {
    const { configuration } = this.props
    return (
      <div>
        {configuration.map((row, rowIndex) =>
          <div key={rowIndex} className='board-row'>
            {row.split('').map((character, columnIndex) =>
              <button key={columnIndex} className={this.blockClassName(rowIndex, columnIndex)} onClick={() => this.blockClick(rowIndex, columnIndex)}>{character}</button>)
            }
          </div>)
        }
      </div>
    )
  }
}

export default Board

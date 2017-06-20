import React from 'react'

class Board extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedBlocks: [],
      wordClick: [],
      wordHover: []
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
    this.state.wordClick.push(configuration[row][column])
  }

  isBlockSelected(row, column) {
    return this.state.selectedBlocks.some(selectedBlock => selectedBlock.row === row && selectedBlock.column === column)
  }

  blockClassName(row, column) {
    return 'dice' + (this.isBlockSelected(row, column) ? ' selected' : '')
  }

  onHover(row, column) {
    const { configuration } = this.props
    if(this.state.wordClick.length === 1) {
      this.setState(oldState => {
      return {
        selectedBlocks: oldState.selectedBlocks.concat({
          row,
          column,
          value: configuration[row][column]
        })
      }
    })
      this.state.wordHover.push(configuration[row][column])
    }  
  }


  render() {
    const { configuration } = this.props
    let clickHover = this.state.wordClick.concat(this.state.wordHover)
    let term = clickHover.join('')
    console.log(term)
    return (
      <div>
        {configuration.map((row, rowIndex) =>
          <div key={rowIndex} className='board-row'>
            {row.split('').map((character, columnIndex) =>
              <button key={columnIndex} className={this.blockClassName(rowIndex, columnIndex)} 
                onClick={() => this.blockClick(rowIndex, columnIndex)} 
                onMouseDown={() => this.onHover(rowIndex, columnIndex)}
                onMouseOver={() => this.onHover(rowIndex, columnIndex)}>{character}</button>)      
            }
          </div>)
        }
      </div>
    )
  }
}

export default Board

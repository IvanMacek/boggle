import React from 'react'

class Board extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      visited: false,
      word: [],
      active: null,
    }
  }

  onHover() {
    this.setState({ visited: true })

    console.log('hej')
  }


  changeColor(index) {
    if (this.state.active === index) {
      return "purple";
    }
    return "#D8D8D8";
  }
  
  clickOnBtn(index, row) {
    const letter = row[index]
    this.state.word.push(letter)
    let string = this.state.word.join("")
    //check which row is clicked
    if (this.state.active === index) {
      this.setState({active : null})
    } else {
      this.setState({active : index})
    }

    console.log(string)
  }

  render() {
    const { configuration } = this.props
    return (
      <div>
        {configuration.map((row, index) =>
          <div key={index} className='board-row'>
            {row.split('').map((character, index) =>
              <button key={index} className='dice' style={{ backgroundColor: this.changeColor(index)}} onMouseOver={() => this.onHover()} onClick={() => this.clickOnBtn(index,row)} >{character}</button>)
            }
          </div>)
        }
      </div>
    )
  }
}

export default Board

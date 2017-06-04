import React from 'react'
import _ from 'lodash'

class PlayerDashboard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            value: '',
            list: []
        };
    }

    containsWord(word) {
        const board = this.props.configuration

        function containsWordRecursion(word, i, j) {
            if (word.length === 0) {
                return true
            } else if (i < 0 || i >= board.length) {
                return false
            } else if (j < 0 || j >= board[i].length) {
                return false
            } else if (word[0] !== board[i][j]) {
                return false
            } else {
                const wordRest = word.slice(1)
                return containsWordRecursion(wordRest, i + 1, j) ||
                    containsWordRecursion(wordRest, i - 1, j) ||
                    containsWordRecursion(wordRest, i, j + 1) ||
                    containsWordRecursion(wordRest, i, j - 1) ||
                    containsWordRecursion(wordRest, i + 1, j + 1) ||
                    containsWordRecursion(wordRest, i + 1, j - 1) ||
                    containsWordRecursion(wordRest, i - 1, j + 1) ||
                    containsWordRecursion(wordRest, i - 1, j - 1)
            }
        }

        for (let i = 0; i < board.length; ++i) {
            for (let j = 0; j < board[i].length; ++j) {
                if (containsWordRecursion(word, i, j)) {
                    return true
                }
            }
        }

        return false
    }


    handleChange = (e) => {
        const value = e.target.value.toUpperCase()
        this.setState(() => {
            console.log(value)
            return {
                value: value
            }
        });
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            const inputValue = this.state.value
            if (this.containsWord(inputValue) === true) {
                this.setState(prevState => {
                    return {
                        value: '',
                        list: _.concat(prevState.list, inputValue)
                    }
                })
            }
        }
    }

    render() {
        return (
            <div className='inputBox'>
                <input type='text' placeholder='Enter a term...' value={this.state.value} onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
                <ul> Words:
                {this.state.list.map(function (name, index) {
                        return <li key={index}>{name}</li>;
                    })}
                </ul>
            </div>
        )
    }
}


export default PlayerDashboard
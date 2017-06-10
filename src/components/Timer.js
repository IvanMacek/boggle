import React from 'react'

class Timer extends React.Component {
  constructor (props) {
    super(props)
    this.state = { currentCount: 20, bgColor: 'black' }
  }

  timer () {
    this.setState({
      currentCount: this.state.currentCount - 1

    })
    if (this.state.currentCount <= 10) {
      this.setState({
        bgColor: 'red'
      })
    }
    if (this.state.currentCount < 1) {
      clearInterval(this.intervalId)
    }
  }
  componentDidMount () {
    this.intervalId = setInterval(this.timer.bind(this), 1000)
  }
  componentWillUnmount () {
    clearInterval(this.intervalId)
  }
  render () {
    return (
      <div className='timer' style={{ color: this.state.bgColor }}> {this.state.currentCount}</div>
    )
  }
}

export default Timer

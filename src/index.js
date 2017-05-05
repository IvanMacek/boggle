import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './components/Game'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Boggle</h2>
        </div>
        <div className='main-game'>
          <Game />
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);





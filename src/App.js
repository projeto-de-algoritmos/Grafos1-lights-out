import React from 'react';
import Game from './Components/Game/index'
import Home from './Components/Home/index'
import './App.css'
import './utils/animation.css'

function App() {
  const [startGame, setStartGame] = React.useState(false)
  const [username, setUserName] = React.useState('')

  const logUserIn = () => {
    setStartGame(true)
  }

  return !startGame
    ? <Home username={username} setUserName={setUserName} logUserIn={logUserIn} />
    : <Game username={username} rows={5} cols={5} chanceLightStartOn={.7} />
}

export default App;

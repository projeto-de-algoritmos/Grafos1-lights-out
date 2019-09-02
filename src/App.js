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
    console.log(username)
  }

  return !startGame
    ? <Home username={username} setUserName={setUserName} logUserIn={logUserIn} />
    : <Game username={username} rows={3} cols={3} chanceLightStartOn={0.9} />
}

export default App;

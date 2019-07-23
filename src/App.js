import React from 'react';
import Board from './Components/Board/index'
import Home from './Components/Home/index'
import './App.css'
import './utils/animation.css'
import { startFirebase } from './utils/firebaseConfig'

function App() {
  startFirebase()

  const [startGame, setStartGame] = React.useState(false)
  const [username, setUserName] = React.useState('')

  const logUserIn = () => {
    setStartGame(true)
    console.log(username)
  }

  return !startGame
          ? <Home username={username} setUserName={setUserName} logUserIn={logUserIn}/>
          : <Board rows={5} cols={5} changeLightStartOn={.02}/>
}

export default App;

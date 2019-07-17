import React from 'react';
import './App.css';
import Board from './Components/Board/index'

function App() {
  return <Board rows={5} cols={5} changeLightStartOn={.3}/>
}

export default App;

import React from 'react'
import './style.css'

import Cell from '../Cell/index'

const Board = ({ rows, cols, changeLightStartOn }) => {

  const [hasWon, setHasWon] = React.useState(false)
  const [board, setBoard] = React.useState(createBoard())
  
  function createBoard() {
    let board = []
    for(let x = 0; x < rows; x++) {
      let row = []
      for(let y = 0; y < cols; y++) row.push(Math.random() < changeLightStartOn)
      board.push(row)
    }
    return board
  }

  console.log(board)

  return (
    <table className="board">
      <tbody>
        { board.map((arr, x) => <tr key={x}>{ arr.map((val, y) => <Cell key={`${x}-${y}`} isLit={ val }/>) }</tr>) }
      </tbody>
    </table>
    )
}

export default Board
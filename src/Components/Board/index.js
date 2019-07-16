import React from 'react'
import './style.css'

import Cell from '../Cell/index'

const Board = ({ rows, cols, changeLightStartOn }) => {

  const [board, setBoard] = React.useState(createBoard(rows, cols, changeLightStartOn))
  const [hasWon, setHasWon] = React.useState(false)
  
  function createBoard(rows, cols, changeLightStartOn) {

    let board = []
    Array.from({length: rows}).map(_ => {
      let row = []
      Array.from({length: cols}).map(_ => row.push(Math.random() < changeLightStartOn))
      board.push(row)
    })
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
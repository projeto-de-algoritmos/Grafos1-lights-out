import React from 'react'
import './style.css'

import Cell from '../Cell/index'
import { createBoard } from '../../utils/board'

const Board = ({ rows, cols, changeLightStartOn }) => {

  const [board, setBoard] = React.useState(createBoard(rows, cols, changeLightStartOn))
  const [hasWon, setHasWon] = React.useState(false)

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
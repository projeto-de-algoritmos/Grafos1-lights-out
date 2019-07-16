import React from 'react'

import Cell from '../Cell/index'
import { createBoard, toggleAdjCells } from '../../utils/board'
import './style.css'

const Board = ({ rows, cols, changeLightStartOn }) => {

  const [board, setBoard] = React.useState(createBoard(rows, cols, changeLightStartOn))
  const [hasWon, setHasWon] = React.useState(false)

  const handleCellClick = (board, rows, cols, x, y) => {

    setBoard(toggleAdjCells(board, rows, cols, x, y))

    const hasWon = board.every(arr => arr.every(val => !val))
    hasWon && setTimeout(() => setHasWon(true), 400)
  }

  return (
    <table className="board">
      {hasWon ? <h1>ganho</h1> : null}
      <tbody>
        {board.map((arr, x) => 
          <tr key={ x }>
            { arr.map((val, y) => <Cell key={ `${x}-${y}` } isLit={ val } toggleCell={ () => handleCellClick(board, rows, cols, x, y) }/>) }
          </tr>
        )}
      </tbody>
    </table>
    )
}

export default Board
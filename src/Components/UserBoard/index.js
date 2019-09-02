import React from 'react'
import { createBoard, toggleAdjCells } from '../../utils/board'
import Board from '../Board/index'
import NeonText from '../NeonText/index'
import './style.css'

const UserBoard = ({ username, rows, cols, initialBoard }) => {

  const [board, setBoard] = React.useState(initialBoard)
  const [hasWon, setHasWon] = React.useState(false)

  const handleCellClick = (board, rows, cols, x, y) => {
    setBoard(toggleAdjCells(board, rows, cols, x, y))
    const hasWon = board.every(arr => arr.every(val => !val))
    hasWon && setTimeout(() => setHasWon(true), 250)
  }

  return (
    <div className="col-spacing">
      <NeonText first={username} />
      <Board board={board} rows={rows} cols={cols} handleCellClick={handleCellClick} />
    </div>
  )
}
hi

export default UserBoard
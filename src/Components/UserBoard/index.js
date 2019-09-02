import React from 'react'
import { createBoard, toggleAdjCells } from '../../utils/board'
import Board from '../Board/index'
import './style.css'

const UserBoard = ({ rows, cols, initialBoard }) => {

  const [board, setBoard] = React.useState(initialBoard)
  const [hasWon, setHasWon] = React.useState(false)

  const handleCellClick = (board, rows, cols, x, y) => {
    setBoard(toggleAdjCells(board, rows, cols, x, y))
    const hasWon = board.every(arr => arr.every(val => !val))
    hasWon && setTimeout(() => setHasWon(true), 250)
  }

  return <Board board={board} rows={rows} cols={cols} handleCellClick={handleCellClick} />
}

export default UserBoard
import React from 'react'
import { toggleAdjCells } from '../../utils/board'
import Board from '../Board/index'
import NeonText from '../NeonText/index'
import './style.css'

const UserBoard = ({ username, rows, cols, initialBoard, setHasUserWon, player1 }) => {

  const [board, setBoard] = React.useState(JSON.parse(JSON.stringify(initialBoard)))

  const handleCellClick = (board, rows, cols, x, y) => {
    setBoard(toggleAdjCells(board, rows, cols, x, y))
    const hasWon = board.every(arr => arr.every(val => !val))
    hasWon && setTimeout(() => setHasUserWon(true), 250)
  }
  console.log('UserBoar', player1)
  return (
    <div className="col-spacing">
      <NeonText first={username} />
      <Board board={board} rows={rows} cols={cols} handleCellClick={handleCellClick} player1={player1} />
    </div>
  )
}

export default UserBoard
import React from 'react'
import Board from '../Board/index'

const BFS = ({ initialBoard, rows, cols }) => {

  const [board, setBoard] = React.useState(initialBoard)

  const handleCellClick = () => {
    console.log('oi')
  }

  return (
    <Board board={board} rows={rows} cols={cols} handleCellClick={handleCellClick} />
  )
}

export default BFS
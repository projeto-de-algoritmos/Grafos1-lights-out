import React from 'react'
import Board from '../Board/index'
import NeonText from '../NeonText/index'

const BFS = ({ initialBoard, rows, cols }) => {

  const [board, setBoard] = React.useState(initialBoard)

  const handleCellClick = () => {
    console.log('oi')
  }

  return (
    <div className="col-spacing">
      <NeonText second="BFS" />
      <Board board={board} rows={rows} cols={cols} handleCellClick={handleCellClick} />
    </div>
  )
}

export default BFS
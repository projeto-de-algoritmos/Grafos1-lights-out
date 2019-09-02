import React from 'react'
import Board from '../Board/index'
import NeonText from '../NeonText/index'
import { toggleAdjCells } from '../../utils/board'

const BFS = ({ initialBoard, rows, cols, setHasBFSWon, cheatSet }) => {

  const [board, setBoard] = React.useState(initialBoard)


  console.log(cheatSet)
  // cheatSet.map(([x, y]) => {
  setTimeout(() => {
    setBoard(toggleAdjCells(board, rows, cols, cheatSet[0], cheatSet[1]))
    const hasWon = board.every(arr => arr.every(val => !val))
    hasWon && setTimeout(() => setHasBFSWon(true), 250)
  }, 5000)
  // })

  return (
    <div className="col-spacing">
      <NeonText second="BFS" />
      <Board board={board} rows={rows} cols={cols} handleCellClick={null} />
    </div>
  )
}

export default BFS
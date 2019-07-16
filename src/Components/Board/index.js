import React from 'react'
import './style.css'

import Cell from '../Cell/index'
import { createBoard } from '../../utils/board'

const Board = ({ rows, cols, changeLightStartOn }) => {

  const [board, setBoard] = React.useState(createBoard(rows, cols, changeLightStartOn))
  const [hasWon, setHasWon] = React.useState(false)

  console.log(board)

  function toggleAdjCells(board, rows, cols, x, y) {
    let newBoard = [...board]
    console.log(`board: ${ rows} x ${cols}`)
    toggleCell(x, y)
    toggleCell(x - 1, y)
    toggleCell(x + 1, y)
    toggleCell(x, y - 1)
    toggleCell(x, y + 1)
    setBoard(newBoard)

    function toggleCell(x, y) {
      if((x >= 0 && x < rows) && (y >= 0 && y < cols))
        newBoard[x][y] = !newBoard[x][y]
    }
  }
  


  return (
    <table className="board">
      <tbody>
        {board.map((arr, x) => 
          <tr key={ x }>
            { arr.map((val, y) => <Cell key={ `${x}-${y}` } isLit={ val } toggleCell={ () => toggleAdjCells(board, rows, cols, x, y) }/>) }
          </tr>
        )}
      </tbody>
    </table>
    )
}

export default Board
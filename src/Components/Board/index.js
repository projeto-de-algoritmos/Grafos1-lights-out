import React from 'react'
import './style.css'

import Cell from '../Cell/index'

const Board = ({ rows, cols, changeLightStartOn }) => {

  const createBoard = () => {
    let board = []
    for(let y = 0; y < rows; y++) {
      let row = []
      for(let x = 0; x < cols; x++) row.push(Math.random() < changeLightStartOn)
      board.push(row)
    }
    return board
  }

  const [hasWon, setHasWon] = React.useState(false)
  const [board, setBoard] = React.useState(createBoard())

  return (
    <table className="board">
      <tbody>
        <tr>
          <Cell isLit />
          <Cell isLit={false} />
          <Cell isLit />
        </tr>
      </tbody>
    </table>
    )
}

export default Board
import React from 'react'
import Cell from '../Cell/index'

const Board = ({ board, rows, cols, handleCellClick, player1 }) => (
  <table className="board" cellSpacing="4">
    <tbody>
      {board.map((arr, x) =>
        <tr key={x}>
          {arr.map((val, y) =>
            <Cell key={`${x}-${y}`} isLit={val} player1={player1}
              toggleCell={() => handleCellClick(board, rows, cols, x, y)} />)}
        </tr>
      )}
    </tbody>
  </table>
)

export default Board
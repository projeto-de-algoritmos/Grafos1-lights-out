import React from 'react'
import './style.css'

import Cell from '../Cell/index'

const Board = () => {

  return (
    <table className="board">
      <tbody>
        <tr>
          <Cell isLit />
          <Cell isLit />
          <Cell isLit />
        </tr>
      </tbody>
    </table>
    )
}

export default Board
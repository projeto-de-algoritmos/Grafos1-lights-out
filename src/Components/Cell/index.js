import React from 'react'
import './style.css'

const Cell = ({ isLit, toggleCell, player1 }) => <td className={"cell" + (isLit ? (player1 ? " cell-lit-orange" : " cell-lit-blue") : "")}
  onClick={toggleCell} />

export default Cell
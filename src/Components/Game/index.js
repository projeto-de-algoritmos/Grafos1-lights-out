import React from 'react'
import UserBoard from '../UserBoard/index'
import BFSBoard from '../BFSBoard/index'
import { createBoard } from '../../utils/board'
import NeonText from '../NeonText/index'

const Game = ({ rows, cols, chanceLightStartOn }) => {
  const [initialBoard, setInitialBoard] = React.useState(createBoard(rows, cols, chanceLightStartOn))
  const [hasUserWon, setHasUserWon] = React.useState(false)
  const [hasBFSWon, setHasBFSWon] = React.useState(false)

  console.log(initialBoard)

  return (
    <div>
      <UserBoard rows={rows} cols={cols} initialBoard={initialBoard} />
      <BFSBoard rows={rows} cols={cols} initialBoard={initialBoard} />
    </div>
  )
}

export default Game
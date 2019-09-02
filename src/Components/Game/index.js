import React from 'react'
import UserBoard from '../UserBoard/index'
import BFSBoard from '../BFSBoard/index'
import { createBoard } from '../../utils/board'
import NeonText from '../NeonText/index'
import './index.css'

const Game = ({ username, rows, cols, chanceLightStartOn }) => {
  const [initialBoard, setInitialBoard] = React.useState(createBoard(rows, cols, chanceLightStartOn))
  const [hasUserWon, setHasUserWon] = React.useState(false)
  const [hasBFSWon, setHasBFSWon] = React.useState(false)

  console.log(initialBoard)

  return (
    <div className={hasBFSWon || hasUserWon ? null : "game"}>
      {hasUserWon ? <NeonText first="User" second="Won" /> : hasBFSWon ? <NeonText first="User" second="Won" /> :
        <>
          <UserBoard username={username} rows={rows} cols={cols} initialBoard={initialBoard} setHasUserWon={setHasUserWon} />
          <BFSBoard rows={rows} cols={cols} initialBoard={initialBoard} setHasBFSWon={setHasBFSWon} />
        </>
      }
    </div>
  )
}

export default Game
import React from 'react'
import UserBoard from '../UserBoard/index'
import BFSBoard from '../BFSBoard/index'
import { createBoard } from '../../utils/board'
import NeonText from '../NeonText/index'
import { solve } from '../../utils/BoardSolver'

import './index.css'

const Game = ({ username, rows, cols, chanceLightStartOn }) => {
  const [initialBoard, setInitialBoard] = React.useState(createBoard(rows, cols, chanceLightStartOn))
  const [hasUserWon, setHasUserWon] = React.useState(false)
  const [hasBFSWon, setHasBFSWon] = React.useState(false)

  return (
    <div className={hasBFSWon || hasUserWon ? null : "game"}>
      {hasUserWon ? <NeonText first="User" second="Won" /> : hasBFSWon ? <NeonText first="BFS" second="Won" /> :
        <>
          <UserBoard username={username} rows={rows} cols={cols} initialBoard={initialBoard} setHasUserWon={setHasUserWon} />
          <BFSBoard rows={rows} cols={cols} initialBoard={initialBoard} setHasBFSWon={setHasBFSWon} cheatSet={solve(rows, initialBoard)} />
        </>
      }
    </div>
  )
}

export default Game
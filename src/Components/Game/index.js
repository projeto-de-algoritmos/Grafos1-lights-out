import React from 'react'
import UserBoard from '../UserBoard/index'
import BFSBoard from '../BFSBoard/index'
import { createBoard } from '../../utils/board'
import NeonText from '../NeonText/index'
import { solve } from '../../utils/BoardSolver'
import Timer from 'react-compound-timer'

import './index.css'

const Game = ({ username, rows, cols, chanceLightStartOn }) => {

  let testBoard = createBoard(rows, cols, chanceLightStartOn)
  let cheatSet = solve(rows, testBoard)

  while (!cheatSet.length) {
    testBoard = createBoard(rows, cols, chanceLightStartOn)
    cheatSet = solve(rows, testBoard)
  }

  const [initialBoard, setInitialBoard] = React.useState(testBoard)
  const [hasUserWon, setHasUserWon] = React.useState(false)
  const [hasBFSWon, setHasBFSWon] = React.useState(false)


  return (
    <div className={hasBFSWon || hasUserWon ? null : "game"}>
      {hasUserWon ? <NeonText first="User" second="Won" /> : hasBFSWon ? <NeonText first="BFS" second="Won" /> :
        cheatSet ?
          <>
            {/* <Timer>
              <Timer.Seconds />
            </Timer> */}
            <UserBoard username={username} rows={rows} cols={cols} initialBoard={initialBoard} setHasUserWon={setHasUserWon} />
            <BFSBoard rows={rows} cols={cols} initialBoard={initialBoard} setHasBFSWon={setHasBFSWon} cheatSet={cheatSet} />
          </>
          : <NeonText first="Without" second="  Resolution" />}
    </div>
  )
}

export default Game
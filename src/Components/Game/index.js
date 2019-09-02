import React from 'react'
import UserBoard from '../UserBoard/index'
import BFSBoard from '../BFSBoard/index'
import { createBoard } from '../../utils/board'
import NeonText from '../NeonText/index'
import { solve } from '../../utils/BoardSolver'

import './index.css'

const Game = ({ username, rows, cols, chanceLightStartOn }) => {

  const [hasUserWon, setHasUserWon] = React.useState(false)
  const [hasBFSWon, setHasBFSWon] = React.useState(false)

  let testBoard = createBoard(rows, cols, chanceLightStartOn)
  let cheatSet = solve(rows, testBoard)

  while ((!Array.isArray(cheatSet) || !cheatSet.length) && (!hasBFSWon && !hasUserWon)) {
    testBoard = createBoard(rows, cols, chanceLightStartOn)
    cheatSet = solve(rows, testBoard)
  }

  const [initialBoard, setInitialBoard] = React.useState(testBoard)

  const button = <button className='btn btn-primary' style={{ marginTop: "3rem" }} onClick={() => window.location.reload()}>
    Play Again :D
  </button>

  return (
    <div className={hasBFSWon || hasUserWon ? null : "game"}>
      {hasUserWon ?
        <>
          <NeonText first="User" second="Won" />
          {button}
        </>
        : hasBFSWon ?
          <>
            <NeonText first="BFS" second="Won" />
            {button}
          </> :
          <>
            <UserBoard username={username} rows={rows} cols={cols} initialBoard={initialBoard} setHasUserWon={setHasUserWon} player1={true} />
            <BFSBoard rows={rows} cols={cols} initialBoard={initialBoard} setHasBFSWon={setHasBFSWon} cheatSet={cheatSet} player1={false} />
          </>}
    </div>
  )
}

export default Game
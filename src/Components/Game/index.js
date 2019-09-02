import React from 'react'
import UserBoard from '../Board/index'
import { createBoard } from '../../utils/board'

const Game = ({ rows, cols, changeLightStartOn }) => {
  const [initialBoard, setInitialBoard] = React.useState(createBoard(rows, cols, changeLightStartOn))
  console.log(initialBoard)

  return (
    <UserBoard rows={3} cols={3} changeLightStartOn={1} initialBoard={initialBoard} />
  )
}

export default Game
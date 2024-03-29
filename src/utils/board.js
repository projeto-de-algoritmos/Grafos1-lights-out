export const createBoard = (rows, cols, changeLightStartOn) => {

  // return Array(rows).fill(0).map(() => Array(cols).fill(Math.random() < changeLightStartOn ? 1 : 0))
  let board = []
  Array.from({ length: rows }).map(_ => {
    let row = []
    Array.from({ length: cols }).map(_ => row.push(Math.random() < changeLightStartOn))
    board.push(row)
  })
  return board
}

export const toggleAdjCells = (board, rows, cols, x, y) => {
  const newBoard = [...board]

  toggleCell(x, y)
  toggleCell(x - 1, y)
  toggleCell(x + 1, y)
  toggleCell(x, y - 1)
  toggleCell(x, y + 1)

  function toggleCell(x, y) {
    if ((x >= 0 && x < rows) && (y >= 0 && y < cols))
      newBoard[x][y] ^= 1
  }

  return newBoard
}

// export const cheatSet = () =>
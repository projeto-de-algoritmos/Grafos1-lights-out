export const createBoard = (rows, cols, changeLightStartOn) => {

  let board = []
  Array.from({length: rows}).map(_ => {
    let row = []
    Array.from({length: cols}).map(_ => row.push(Math.random() < changeLightStartOn))
    board.push(row)
  })
  return board
}
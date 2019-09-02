
const MAX = 70000
let N = 3
let moves = Array(MAX).fill(-1)
let parent = Array.from({ length: MAX }).map((_, i) => i)
let position = []
let solve = []
let matrix = Array(10).fill(0).map(() => Array(10).fill(Math.random() < .4 ? 1 : 0))

function matrixToHash(N) {

  let state = 0
  for (let x = 1; x <= N; x++) {
    for (let y = 1; y <= N; y++) {
      state <<= 1
      state |= matrix[x][y]
    }
  }
  return state
}


function hashToMatrix(N, state) {

  for (let x = N; x >= 1; x--) {
    for (let y = N; y >= 1; y--) {
      matrix[x][y] = state & 1
      state >>= 1
    }
  }
}

function play(x, y) {
  let dirs = [[0, -1], [-1, 0], [0, 0], [1, 0], [0, 1]]
  dirs.map(pos => matrix[x + pos[0]][y + pos[1]] ^= 1)
}

function bfs(N, s0) {

  let queue = []
  queue.push(s0)
  let state = -1

  while (queue.length > 0) {

    state = queue.shift()
    let m = moves[state]

    if (state === 0) break

    hashToMatrix(N, state)

    for (let x = 1; x <= N; x++) {
      for (let y = 1; y <= N; y++) {
        play(x, y)

        let s = matrixToHash(N)

        if (moves[s] === -1) {
          moves[s] = m + 1
          parent[s] = state
          position[s] = [x, y]
          queue.push(s)
        }

        play(x, y)
      }
    }
  }

  return state
}

function backtrack(s) {

  if (s === parent[s]) return

  backtrack(parent[s])
  console.log(`${position[s][0]} ${position[s][1]}`)
}

function main() {

  const s = matrixToHash(N)
  moves[s] = 0
  const ans = bfs(N, s)

  if (ans !== 0) {
    console.log('-1')
    return
  }

  console.log(`Moves = ${moves[ans]}`)
  if (moves[ans]) backtrack(ans)

  return
}

main()
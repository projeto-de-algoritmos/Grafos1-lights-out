
let N = 3
const MAX = 70000
let moves = []
let parent = []
let position = []

let goal = (1 << (N * N)) - 1

let matrix = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0]
]
for (let x = 1; x <= N; x++) {
  for (let y = 1; y <= N; y++) {
    process.stdout.write(matrix[x][y].toString() + " ")
  }
  console.log('')
}

function to_state(N) {

  let state = 0
  for (let x = 1; x <= N; x++) {
    for (let y = 1; y <= N; y++) {
      // console.log(`x: ${x} | y: ${y} | matrix[x][y]: ${matrix[x][y]}`)
      state <<= 1 // *= 2
      state |= matrix[x][y]
    }
  }

  // console.log('State from to_state: ' + state.toString(2))
  return state
}


function from_state(N, state) {

  // console.log('Matrix from State')
  // for (let x = 1; x <= N; x++) {
  //   for (let y = 1; y <= N; y++) {
  //     process.stdout.write(matrix[x][y].toString() + " ")
  //   }
  //   console.log('')
  // }

  for (let x = N; x >= 1; x--) {
    for (let y = N; y >= 1; y--) {
      matrix[x][y] = state & 1
      state >>= 1 // /= 2
    }
  }

  // console.log('Matrix from State')
  // for (let x = 1; x <= N; x++) {
  //   for (let y = 1; y <= N; y++) {
  //     process.stdout.write(matrix[x][y].toString() + " ")
  //   }
  //   console.log('')
  // }
  // console.log("\n")
}

function play(x, y) {
  let dirs = [[0, -1], [-1, 0], [0, 0], [1, 0], [0, 1]]
  dirs.map(pos => matrix[x + pos[0]][y + pos[1]] ^= 1)

  console.log('Matrix from Play')
  for (let x = 1; x <= N; x++) {
    for (let y = 1; y <= N; y++) {
      process.stdout.write(matrix[x][y].toString() + " ")
    }
    console.log('')
  }
  console.log("\n")
}

function solve(N, s0) {

  let queue = []
  queue.push(s0)
  let state = -1

  while (queue.length > 0) {

    // console.log(queue.map(val => val.toString(2)))

    state = queue.shift()
    let m = moves[state]
    console.log(state)
    if (state === 0 || state === goal) break

    from_state(N, state)

    for (let x = 1; x <= N; x++) {
      for (let y = 1; y <= N; y++) {
        console.log("x= " + x + " y =" + y)
        play(x, y)

        let s = to_state(N)

        if (moves[s] === -1) {
          // console.log("Moves antes: " + moves[s].toString())
          moves[s] = m + 1
          // console.log("Moves antes: " + moves[s].toString())
          parent[s] = state
          position[s] = [x, y]
          // console.log(position[0])
          queue.push(s)
        }

        play(x, y)
      }
    }
  }

  return state
}

function print_seq(s) {

  if (s === parent[s]) return

  print_seq(parent[s])
  console.log(`${position[s][0]} ${position[s][1]}`)
}

function main() {

  let N = 3
  for (let x = 0; x < MAX; x++) {
    moves[x] = -1
    parent[x] = x
  }

  const s = to_state(N)
  moves[s] = 0
  // console.log(`s = ${s.toString()}`)
  const ans = solve(N, s)

  // console.log(`s = ${s.toString()}`)
  // console.log(`Ans = ${ans.toString()}`)
  // console.log(`Goal = ${goal.toString(10)}`)

  // if (ans !== 0 && ans !== goal) {
  //   console.log('-1')
  //   return
  // }

  console.log(`Moves = ${moves[ans]}`)

  if (moves[ans]) print_seq(ans)

  return
}


main()
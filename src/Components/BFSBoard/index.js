import React from 'react'
import Board from '../Board/index'
import NeonText from '../NeonText/index'
import { toggleAdjCells } from '../../utils/board'

class BFSBoard extends React.Component {

  state = {
    board: JSON.parse(JSON.stringify(this.props.initialBoard)),
    counter: 0
  }

  myLoop = () => {
    setTimeout(() => {

      const newBoard = toggleAdjCells(this.state.board, this.props.rows, this.props.cols, this.props.cheatSet[this.state.counter][0] - 1, this.props.cheatSet[this.state.counter][1] - 1)

      this.setState({ board: newBoard })
      const hasWon = this.state.board.every(arr => arr.every(val => !val))
      hasWon && setTimeout(() => this.props.setHasBFSWon(true), 200)

      this.setState({ counter: this.state.counter + 1 })

      if (this.state.counter < this.props.cheatSet.length) {
        this.myLoop();
      }
    }, 3000)
  }

  constructor(props) {
    super(props)
    this.myLoop()
  }

  render() {

    return (
      <div className="col-spacing">
        <NeonText second="BFS" />
        <Board board={this.state.board} rows={this.props.rows} cols={this.props.cols} handleCellClick={() => alert("Don't touch me!")} />
      </div>
    )
  }
}

export default BFSBoard
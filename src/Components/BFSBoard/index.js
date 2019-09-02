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
      console.log(newBoard)
      this.setState({ board: newBoard })
      const hasWon = this.state.board.every(arr => arr.every(val => !val))
      hasWon && setTimeout(() => this.props.setHasBFSWon(true), 250)

      this.setState({ counter: this.state.counter + 1 })
      // console.log(this.props.cheatSet.lentgh)
      if (this.state.counter < this.props.cheatSet.length) {
        this.myLoop();
      }
    }, 1000)
  }

  constructor(props) {
    super(props)
    console.log(props.initialBoard)

    this.myLoop()

  }

  render() {

    return (
      <div className="col-spacing">
        <NeonText second="BFS" />
        <Board board={this.state.board} rows={this.props.rows} cols={this.props.cols} handleCellClick={null} />
      </div>
    )
  }
}

export default BFSBoard
import React from 'react'
import './style.css'

const Cell = ({ isLit, toggleCell }) => <td className={ "cell" + (isLit ? " cell-lit" : "")} onClick={ toggleCell }/>

export default Cell
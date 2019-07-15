import React from 'react'

const Cell = ({ isLit, toggleCell }) => <td className={ "cell" + isLit ? " cell-lit" : ""} onClick={ toggleCell }/>

export default Cell
import React from 'react'
import './style.css'

const NeonText = ({ first, second }) => (
  <div>
    <div className="neon-orange">{ first }</div>
    <div className="neon-blue">{ second }</div>
  </div>
)

export default NeonText
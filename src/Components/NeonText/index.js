import React from 'react'
import './style.css'

const NeonText = ({ first, second }) => (
  <div className="text-container">
    <div className="neon-orange">{ first }</div>
    <div className="neon-blue">{ second }</div>
  </div>
)

export default NeonText
import React from 'react'
import './index.css'
import NeonText from '../NeonText/index'

const Home = () => {

  return (
    <main>
      <NeonText first="Lights" second="Out"/>

      <div className="home-auth-selection">
        <button className="btn btn-primary">Login</button>
        <button className="btn btn-secondary">Sign Up</button>
      </div>
    </main>
  )
}

export default Home
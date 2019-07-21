import React from 'react'
import './index.css'

const Login = ({ email, password, setEmail, setPassword}) => (
  <form>
    <h1>Enter your data</h1>
    <label>
      Email
      <input value={ email } onChange={e => setEmail(e.target.value) }/>
    </label>
    
    <label>
      Password
      <input value={ password } onChange={ e => setPassword(e.target.value) }/>
    </label>
  </form>
)

export default Login
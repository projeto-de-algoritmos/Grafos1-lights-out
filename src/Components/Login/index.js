import React from 'react'
import './index.css'

const Login = ({ email, password, setEmail, setPassword}) => (
  <form>
    {console.log(email)}
    <h1>Login</h1>
    <div className="labels-container">
      <label>
        Email
        <input className={email ? "valid" : null} value={ email } onChange={e => setEmail(e.target.value) }/>
      </label>
      
      <label>
        Password
        <input className={password ? "valid" : null} value={ email } value={ password } onChange={ e => setPassword(e.target.value) }/>
      </label>
    </div>
  </form>
)

export default Login
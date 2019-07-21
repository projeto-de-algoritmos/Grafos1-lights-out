import React from 'react'
import './index.css'

const Login = ({ username, setUserName }) => (
  <label>
    What do people call you ?
    <input  className={username ? "valid" : null} value={ username } onChange={e => setUserName(e.target.value) }
            placeholder="type here..."/>
  </label>
)

export default Login
import React from 'react'
import classNames from 'classnames'
import NeonText from '../NeonText/index'
import Login from '../Login/index'
import './index.css'

const Home = () => {
  const [login, setLogin] = React.useState(false)
  const [username, setUserName] = React.useState('')
  const getLoginComponent = () => <Login username={username} setUserName={setUserName} />
  const sendUser = () => {
    
  }
  return (
    <div className="home">
      <NeonText first="Lights" second="Out"/>

      <div className="auth-container">
        <h2 className="auth-cta">Let's play!</h2>
        { login ? getLoginComponent() : null }
        <button className={classNames('btn', 'btn-primary', {'disabled': login && !username})}
                onClick={!login ? () => setLogin(true) : () => sendUser()}>
          {login ? 'Enter' : 'Login'}
        </button>
      </div>
    </div>
  )
}

export default Home
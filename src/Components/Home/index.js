import React from 'react'
import './index.css'
import NeonText from '../NeonText/index'
import Login from '../Login/index'

const Home = () => {
  const [authType, setAuthType] = React.useState(null)
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const isLoginSelected = () => authType === 'login'
  const isSignUpSelected = () => authType === 'signup'

  return (
    <main>
      {/* <NeonText first="Lights" second="Out"/> */}
      {isLoginSelected() ? <Login setEmail={ setEmail } setPassword={ setPassword }/> : null}
      <div className="home-auth-selection">
        <button className="btn btn-primary" onClick={() => setAuthType('login')}>{isLoginSelected() ? 'Enter' : 'Login'}</button>
        <button className="btn btn-secondary" onClick={() => setAuthType('signup')}>Sign Up</button>
      </div>
    </main>
  )
}

export default Home
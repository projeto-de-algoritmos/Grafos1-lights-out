import React from 'react'
import classNames from 'classnames'
import NeonText from '../NeonText/index'
import Login from '../Login/index'
import './index.css'

const Home = () => {
  const [authType, setAuthType] = React.useState(null)
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const isLoginSelected = () => authType === 'login'
  const isSignUpSelected = () => authType === 'signup'
  const getMethodForLogin = () => isLoginSelected() ? () => authLogin() : () => {setAuthType('login'); setEmail(''); setPassword('');}

  const authLogin = () => {
    const user = { email, password }
    console.log(user)
  }

  return (
    <main>
      <NeonText first="Lights" second="Out"/>
      { isLoginSelected() ? <Login email={email} password={password} setEmail={setEmail} setPassword={setPassword}/> : null }
      <div className="home-auth-selection">
        <button className={ classNames('btn', 'btn-primary', {'disabled': isLoginSelected() && (!email || !password)}) }
                onClick={ getMethodForLogin() }> {isLoginSelected() ? 'Enter' : 'Login'} </button>
                
        <button className="btn btn-secondary" onClick={() => setAuthType('signup')}>Sign Up</button>
      </div>
    </main>
  )
}

export default Home
import React from 'react'
import LoginLogo from 'components/Login/Logo'
import LoginForm from 'components/Login/Form'
import 'components/Login/index.scss'

const Login = () => {
  return (
    <div className="container">
      <div className="login-wrap">
        <LoginLogo />

        <LoginForm />
      </div>
    </div>
  )
}

export default Login

import React, { createRef, useEffect } from 'react'
import LoginLogo from '~/components/Login/Logo'
import LoginForm from '~/components/Login/Form'
import bgImg from '~/assets/images/bg.gif'
import '~/components/Login/index.scss'

const Login = () => {
  const ref = createRef(null);

  const loadImg = (dom) => {
    const oImg = new Image();

    oImg.src = bgImg;
    oImg.className = 'bg-img';
    oImg.onload = () => dom.appendChild(oImg);
  }

  useEffect(() => {
    loadImg(ref.current);
  })


  return (
    <div className="container" ref={ ref }>
      <div className="login-wrap">
        <LoginLogo />

        <LoginForm />
      </div>
    </div>
  )
}

export default Login

import React from 'react'
import { Layout } from 'antd';
import User from './User'
import Logo from './Logo'

const { Header } = Layout;

const LayHeader = () => {
  return (
    <Header className="header">
      <Logo />

      <User />
    </Header>
  )
}

export default LayHeader

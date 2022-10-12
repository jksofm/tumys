import React from 'react'
import { Outlet } from 'react-router-dom'
import Guide from '../components/Guide'

import Logo from '../components/Logo'
import Menu from '../components/Menu'
import { useTumysContext } from '../context/tumycontext'



function SharedLayout() {
  const {guide,ShowGuide,HideGuide} = useTumysContext();

  return (
    <>
    {guide && <Guide /> }
    

    <Logo />
    <Outlet />
    <Menu />
    </>
  )
}

export default SharedLayout
import React from 'react'
import { Outlet } from 'react-router-dom'
import Guide from '../components/Guide'

import Logo from '../components/Logo'
import Menu from '../components/Menu'




function SharedLayout({guide,ShowGuide,HideGuide}) {
 

  return (
    <>
    
    
    

    <Logo ShowGuide={ShowGuide} />
    <Outlet />
    <Menu ShowGuide={ShowGuide} HideGuide={HideGuide} guide={guide} />
    </>
  )
}

export default SharedLayout
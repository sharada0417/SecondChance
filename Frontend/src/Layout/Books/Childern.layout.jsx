import Childern from '@/pages/Books/Childern'
import React from 'react'
import { Outlet } from 'react-router'

function Childernlayout  ()  {
  return (
    <>
        <Childern/>
       <Outlet/>
    </>
  )
}

export default Childernlayout

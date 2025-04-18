import Business from '@/pages/Books/Business'
import React from 'react'
import { Outlet } from 'react-router'

function Businesslayout ()  {
  return (
    <>
       <Business/>
       <Outlet/>
    </>
  )
}

export default Businesslayout

import Business from '@/pages/Books/Business'
import React from 'react'
import { Outlet } from 'react-router'

const Businesslayout = () => {
  return (
    <>
       <Business/>
       <Outlet/>
    </>
  )
}

export default Businesslayout

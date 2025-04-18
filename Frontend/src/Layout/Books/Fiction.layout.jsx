import Fiction from '@/pages/Books/Fiction'
import React from 'react'
import { Outlet } from 'react-router'
const Fictionlayout = () => {
  return (
    <>
    <Fiction/>
     <Outlet/>
    </>
  )
}

export default Fictionlayout

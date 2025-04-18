import Fiction from '@/pages/Books/Fiction'
import React from 'react'
import { Outlet } from 'react-router'
function Fictionlayout  ()  {
  return (
    <>
    <Fiction/>
     <Outlet/>
    </>
  )
}

export default Fictionlayout

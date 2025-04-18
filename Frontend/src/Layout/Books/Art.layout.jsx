import Art from '@/pages/Books/Art'
import React from 'react'
import { Outlet } from 'react-router'

const Artlayout = () => {
  return (
    <>
     <Art/>
     <Outlet/>
    </>
  )
}

export default Artlayout

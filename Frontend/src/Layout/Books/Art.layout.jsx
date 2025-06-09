import Art from '@/pages/Books/Art'
import React from 'react'
import { Outlet } from 'react-router'

function Artlayout() {
  return (
    <>
     <Art/>
     <Outlet/>
    </>
  )
}

export default Artlayout

import Education from '@/pages/Books/Education'
import React from 'react'
import { Outlet } from 'react-router'

function Educationlayout () {
  return (
    <>
    <Education/>
     <Outlet/>
    </>
  )
}

export default Educationlayout

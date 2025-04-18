import React from 'react'
import { Outlet } from 'react-router'
import nonFictions from '@/pages/Books/nonFiction'
function nonFictionlayout ()  {
  return (
    <>
    <nonFictions/>
     <Outlet/>
    </>
  )
}

export default nonFictionlayout

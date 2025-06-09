import  nonFiction from "@/pages/Books/nonFiction"
import React from 'react'
import { Outlet } from 'react-router'

function nonFictionlayout () {
  return (
    <>
    <nonFiction/>
     <Outlet/>
    </>
  )
}

export default nonFictionlayout



import Navigation from "@/components/Navigation"
import ComputersAccessories from "@/pages/Electronic/ComputersAccessories"
import MobileAcc from "@/pages/Electronic/MobileAcc"
import { Outlet } from "react-router"

function ComputersAccessorieslayout(){
    return(
        <>
        <ComputersAccessories/>
        <Outlet/>
        </>
    )
}
export default ComputersAccessorieslayout
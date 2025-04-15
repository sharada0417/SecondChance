import Navigation from "@/components/Navigation"
import MobileAcc from "@/pages/Electronic/MobileAcc"
import { Outlet } from "react-router"

function MobileAcclayout(){
    return(
        <>
        <MobileAcc/>
        <Outlet/>
        </>
    )
}
export default MobileAcclayout
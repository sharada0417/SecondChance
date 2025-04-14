import Navigation from "@/components/Navigation"
import MobileAcc from "@/pages/Electronic/MobileAcc"
import { Outlet } from "react-router"

function Electronic(){
    return(
        <>
        <MobileAcc/>
        <Outlet/>
        </>
    )
}
export default Electronic
import Men from "@/pages/Fashion/Men"
import Women from "@/pages/Fashion/Women"
import LivingRoom from "@/pages/Furnitures/LivingRoom"
import { Outlet } from "react-router"

function LivingRoomlayout(){
    return(
        <>
        <LivingRoom/>
        <Outlet/>
        </>
    )
}
export default LivingRoomlayout
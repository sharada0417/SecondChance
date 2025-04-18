import Men from "@/pages/Fashion/Men"
import Women from "@/pages/Fashion/Women"
import OutDoor from "@/pages/Furnitures/OutDoor"
import { Outlet } from "react-router"

function OutDoorlayout(){
    return(
        <>
        <OutDoor/>
        <Outlet/>
        </>
    )
}
export default OutDoorlayout
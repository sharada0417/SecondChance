import Men from "@/pages/Fashion/Men"
import Women from "@/pages/Fashion/Women"
import BedRoom from "@/pages/Furnitures/BedRoom"
import { Outlet } from "react-router"

function BedRoomlayout(){
    return(
        <>
        <BedRoom/>
        <Outlet/>
        </>
    )
}
export default BedRoomlayout
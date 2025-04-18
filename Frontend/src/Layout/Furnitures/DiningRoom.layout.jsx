import Men from "@/pages/Fashion/Men"
import Women from "@/pages/Fashion/Women"
import DiningRoom from "@/pages/Furnitures/DiningRoom"
import { Outlet } from "react-router"

function DiningRoomlayout(){
    return(
        <>
        <DiningRoom/>
        <Outlet/>
        </>
    )
}
export default DiningRoomlayout
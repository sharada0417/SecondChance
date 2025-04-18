import Men from "@/pages/Fashion/Men"
import Women from "@/pages/Fashion/Women"
import OfficeRoom from "@/pages/Furnitures/OfficeRoom"
import { Outlet } from "react-router"

function OfficeRoomlayout(){
    return(
        <>
        <OfficeRoom/>
        <Outlet/>
        </>
    )
}
export default OfficeRoomlayout
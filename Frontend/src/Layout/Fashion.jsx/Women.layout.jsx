import Men from "@/pages/Fashion/Men"
import Women from "@/pages/Fashion/Women"
import { Outlet } from "react-router"

function Womenlayout(){
    return(
        <>
        <Women/>
        <Outlet/>
        </>
    )
}
export default Womenlayout
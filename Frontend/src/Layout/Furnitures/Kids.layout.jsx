import Men from "@/pages/Fashion/Men"
import Women from "@/pages/Fashion/Women"
import Kids from "@/pages/Furnitures/Kids"
import { Outlet } from "react-router"

function Kidslayout(){
    return(
        <>
        <Kids/>
        <Outlet/>
        </>
    )
}
export default Kidslayout
import Footwear from "@/pages/Fashion/Kids/Footwear"
import { Outlet } from "react-router"

function FootWarelayout(){
    return(
        <>
        <Footwear/>
        <Outlet/>
        </>
    )
}
export default FootWarelayout
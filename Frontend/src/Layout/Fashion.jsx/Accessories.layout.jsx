import Accessories from "@/pages/Fashion/Accessories"
import { Outlet } from "react-router"

function Accessorieslayout(){
    return(
        <>
        <Accessories/>
        <Outlet/>
        </>
    )
}
export default Accessorieslayout
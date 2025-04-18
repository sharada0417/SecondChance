import Men from "@/pages/Fashion/Men"
import { Outlet } from "react-router"

function Menlayout(){
    return(
        <>
        <Men/>
        <Outlet/>
        </>
    )
}
export default Menlayout
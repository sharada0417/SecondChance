import Navigation from "@/components/Navigation"
import { Outlet } from "react-router"

function RootLayout(){
    return(
        <>
        <Navigation />
        <Outlet/>
        </>
    )
}
export default RootLayout
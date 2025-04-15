
import HomeElectronics from "@/pages/Electronic/HomeElectronics"
import { Outlet } from "react-router"

function HomeElectroniclayout(){
    return(
        <>
        <HomeElectronics/>
        <Outlet/>
        </>
    )
}
export default HomeElectroniclayout
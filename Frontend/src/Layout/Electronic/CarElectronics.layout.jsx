import Navigation from "@/components/Navigation"
import CarElectronics from "@/pages/Electronic/CarElectronics"
import MobileAcc from "@/pages/Electronic/MobileAcc"
import { Outlet } from "react-router"

function CarElectronicslayout(){
    return(
        <>
        <CarElectronics/>
        <Outlet/>
        </>
    )
}
export default CarElectronicslayout
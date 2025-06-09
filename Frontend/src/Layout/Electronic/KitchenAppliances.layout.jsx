import Navigation from "@/components/Navigation"
import KitchenAppliances from "@/pages/Electronic/KitchenAppliances"
import MobileAcc from "@/pages/Electronic/MobileAcc"
import { Outlet } from "react-router"

function KitchenApplianceslayout(){
    return(
        <>
        <KitchenAppliances/>
        <Outlet/>
        </>
    )
}
export default KitchenApplianceslayout
import Navigation from "@/components/Navigation"
import AudioEntertainment from "@/pages/Electronic/AudioEntertainment"
import MobileAcc from "@/pages/Electronic/MobileAcc"
import { Outlet } from "react-router"

function AudioEntertainmentlayout(){
    return(
        <>
        <AudioEntertainment/>
        <Outlet/>
        </>
    )
}
export default AudioEntertainmentlayout
import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Homepage from "./pages/home.page";
import RootLayout from "./Layout/root-layout.layout";
import MainLayout from "./Layout/main.layout";
import "./index.css";
import { store } from "./redux/store";
import MobileAcc from "./pages/Electronic/MobileAcc.jsx";
import MobilePhones from "./pages/Electronic/MobileAcc/MobilePhones.jsx";
import ChargesAndCovers from "./pages/Electronic/MobileAcc/ChargesAndCovers.jsx";
import HeadPhones from "./pages/Electronic/MobileAcc/HeadPhones.jsx";
import PhoneCaseAndCover from "./pages/Electronic/MobileAcc/PhoneCaseAndCover.jsx";
import ScreenProtector from "./pages/Electronic/MobileAcc/ScreenProtector.jsx";
import SmartWatch from "./pages/Electronic/MobileAcc/SmartWatch.jsx";
import PhoneHolders from "./pages/Electronic/MobileAcc/PhoneHolders.jsx";

import KitchenApplianceslayout from "./Layout/Electronic/KitchenAppliances.layout";
import CoffeeMakers from "./pages/Electronic/KitchenAppliances/CoffeeMakers";
import InductionCooktops from "./pages/Electronic/KitchenAppliances/InductionCooktops";
import MicrowaveOvens from "./pages/Electronic/KitchenAppliances/MicrowaveOvens";
import MixerGrinders from "./pages/Electronic/KitchenAppliances/MixerGrinders";
import Toasters from "./pages/Electronic/KitchenAppliances/Toasters";
import MobileAcclayout from "./Layout/Electronic/MobileAcc.layout";

import KitchenAppliances from "./pages/Electronic/KitchenAppliances";
import HomeElectroniclayout from "./Layout/Electronic/HomeElectronic.layout";
import ComputersAccessories from "./pages/Electronic/ComputersAccessories";
import AudioInterfaces from "./pages/Electronic/AudioEntertainment/AudioInterfaces";
import AudioEntertainment from "./pages/Electronic/AudioEntertainment";
import CarElectronics from "./pages/Electronic/CarElectronics";
import Televisions from "./pages/Electronic/HomeElectronic/Televisions";
import HomeTheater from "./pages/Electronic/HomeElectronic/HomeTheater";
import Refrigerators from "./pages/Electronic/HomeElectronic/Refrigerators";
import AirConditioners from "./pages/Electronic/HomeElectronic/AirConditioners";
import WashingMachines from "./pages/Electronic/HomeElectronic/WashingMachines";
import ComputersAccessorieslayout from "./Layout/Electronic/ComputersAccessories.layout";
import Laptops from "./pages/Electronic/ComputersAccessories/Laptops";
import Monitors from "./pages/Electronic/ComputersAccessories/Monitors";
import Printers from "./pages/Electronic/ComputersAccessories/Printers";
import HardDrives from "./pages/Electronic/ComputersAccessories/HardDrives";
import AudioEntertainmentlayout from "./Layout/Electronic/AudioEntertainment.layout";
import Headphones from "./pages/Electronic/AudioEntertainment/Headphones";
import BluetoothSpeakers from "./pages/Electronic/AudioEntertainment/BluetoothSpeakers";
import Soundbars from "./pages/Electronic/AudioEntertainment/Soundbars";
import Microphones from "./pages/Electronic/AudioEntertainment/Microphones";
import CarElectronicslayout from "./Layout/Electronic/CarElectronics.layout";
import CarStereos from "./pages/Electronic/CarElectronics/CarStereos";
import DashCams from "./pages/Electronic/CarElectronics/DashCams";
import ParkingCameras from "./pages/Electronic/CarElectronics/ParkingCameras";
import CarChargers from "./pages/Electronic/CarElectronics/CarChargers";
import CarAirPurifiers from "./pages/Electronic/CarElectronics/CarAirPurifiers";
import HomeElectronics from "./pages/Electronic/HomeElectronics";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Homepage />} />



              {/*Electronic*/}
              <Route path="/mobileacc" element={<MobileAcc />} />
              <Route path="/homeelectronics" element={<HomeElectronics />} />
              <Route path="/computersaccessories" element={<ComputersAccessories />} />
              <Route path="/audioentertainment" element={<AudioEntertainment />} />
              <Route path="/kitchenappliances" element={<KitchenAppliances />} />
              <Route path="/carelectronics" element={<CarElectronics />} />

              {/* Mobile Accessories */}
              <Route element={<MobileAcclayout />}>
                <Route path="/mobileacc/mobilephone" element={<MobilePhones />} />
                <Route path="/mobileacc/charges" element={<ChargesAndCovers />} />
                <Route path="/mobileacc/headphones" element={<HeadPhones />} />
                <Route path="/mobileacc/phoneCase" element={<PhoneCaseAndCover />} />
                <Route path="/mobileacc/screenprotector" element={<ScreenProtector />} />
                <Route path="/mobileacc/smartwatch" element={<SmartWatch />} />
                <Route path="/mobileacc/phoneholders" element={<PhoneHolders />} />
              </Route>

              {/* Home Electronics */}
              <Route element={<HomeElectroniclayout />}>
                <Route path="/homeelectronic/televishion" element={<Televisions />} />
                <Route path="/homeelectronic/hometheter" element={<HomeTheater />} />
                <Route path="/homeelectronic/refrigerators" element={<Refrigerators />} />
                <Route path="/homeelectronic/aircondition" element={<AirConditioners />} />
                <Route path="/homeelectronic/washingmachine" element={<WashingMachines />} />
              </Route>

              {/* Computers Accessories */}
              <Route element={<ComputersAccessorieslayout />}>
                <Route path="/computersaccessories/laptops" element={<Laptops />} />
                <Route path="/computersaccessories/monitors" element={<Monitors />} />
                <Route path="/computersaccessories/keyboardsmice" element={<HeadPhones />} />
                <Route path="/computersaccessories/printers" element={<Printers />} />
                <Route path="/computersaccessories/harddrives" element={<HardDrives />} />
              </Route>

              {/* Audio Entertainment */}
              <Route element={<AudioEntertainmentlayout />}>
                <Route path="/audioentertainment/headphones" element={<Headphones />} />
                <Route path="/audioentertainment/bluetoothspeakers" element={<BluetoothSpeakers />} />
                <Route path="/audioentertainment/soundbars" element={<Soundbars />} />
                <Route path="/audioentertainment/microphones" element={<Microphones />} />
                <Route path="/audioentertainment/audiointerfaces" element={<AudioInterfaces />} />
              </Route>

              {/* Kitchen Appliances */}
              <Route element={<KitchenApplianceslayout />}>
                <Route path="/kitchenappliances/coffeemakers" element={<CoffeeMakers />} />
                <Route path="/kitchenappliances/inductioncooktops" element={<InductionCooktops />} />
                <Route path="/kitchenappliances/microwaveovens" element={<MicrowaveOvens />} />
                <Route path="/kitchenappliances/mixergrinders" element={<MixerGrinders />} />
                <Route path="/kitchenappliances/toasters" element={<Toasters />} />
              </Route>

              {/* Car Electronics */}
              <Route element={<CarElectronicslayout />}>
                <Route path="/carelectronics/carstereos" element={<CarStereos />} />
                <Route path="/carelectronics/dashcams" element={<DashCams />} />
                <Route path="/carelectronics/parkingcameras" element={<ParkingCameras />} />
                <Route path="/carelectronics/carchargers" element={<CarChargers />} />
                <Route path="/carelectronics/carairpurifiers" element={<CarAirPurifiers />} />
              </Route>

            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Homepage from "./pages/home.page";
import RootLayout from "./Layout/root-layout.layout";
import MainLayout from "./Layout/main.layout";
import "./index.css";

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
import BedRoomlayout from "./Layout/Furnitures/BedRoom.layout";
import DiningRoomlayout from "./Layout/Furnitures/DiningRoom.layout";
import Kidslayout from "./Layout/Furnitures/Kids.layout";
import LivingRoomlayout from "./Layout/Furnitures/LivingRoom.layout";
import OfficeRoomlayout from "./Layout/Furnitures/OfficeRoom.layout";
import OutDoorlayout from "./Layout/Furnitures/OutDoor.layout";
import Accessorieslayout from "./Layout/Fashion.jsx/Accessories.layout";
import FootWarelayout from "./Layout/Fashion.jsx/FootWare.layout";
import KidslayoutF from "./Layout/Fashion.jsx/Kids.layout";
import Menlayout from "./Layout/Fashion.jsx/Men.layout";
import Womenlayout from "./Layout/Fashion.jsx/Women.layout";
import Artlayout from "./Layout/Books/Art.layout";
import Businesslayout from "./Layout/Books/Business.layout";
import Childernlayout from "./Layout/Books/Childern.layout";
import Educationlayout from "./Layout/Books/Education.layout";
import Fictionlayout from "./Layout/Books/Fiction.layout";
import BedRoom from "./pages/Furnitures/BedRoom";
import DiningRoom from "./pages/Furnitures/DiningRoom";
import Kids from "./pages/Furnitures/Kids";
import LivingRoom from "./pages/Furnitures/LivingRoom";
import OfficeRoom from "./pages/Furnitures/OfficeRoom";
import OutDoor from "./pages/Furnitures/OutDoor";
import Beds from "./pages/Furnitures/BedRoom/Beds";
import BedsideTables from "./pages/Furnitures/BedRoom/BedsideTables";
import Dressers from "./pages/Furnitures/BedRoom/Dressers";
import Mattresses from "./pages/Furnitures/BedRoom/Mattresses";
import Wardrobes from "./pages/Furnitures/BedRoom/Wardrobes";
import BarUnits from "./pages/Furnitures/DiningRoom/BarUnits";
import CrockeryUnits from "./pages/Furnitures/DiningRoom/CrockeryUnits";
import DiningChairs from "./pages/Furnitures/DiningRoom/DiningChairs";
import DiningTables from "./pages/Furnitures/DiningRoom/DiningTables";
import Sideboards from "./pages/Furnitures/DiningRoom/Sideboards";
import Bookshelves from "./pages/Furnitures/Kids/Bookshelves";
import KidsBeds from "./pages/Furnitures/Kids/KidsBeds";
import KidsChairs from "./pages/Furnitures/Kids/KidsChairs";
import StudyTables from "./pages/Furnitures/Kids/StudyTables";
import ToyStorage from "./pages/Furnitures/Kids/ToyStorage";
import CoffeeTables from "./pages/Furnitures/LivingRoom/CoffeeTables";
import Recliners from "./pages/Furnitures/LivingRoom/Recliners";
import Sofas from "./pages/Furnitures/LivingRoom/Sofas";
import TVUnits from "./pages/Furnitures/LivingRoom/TVUnits";
import FilingCabinets from "./pages/Furnitures/OfficeRoom/FilingCabinets";
import OfficeChairs from "./pages/Furnitures/OfficeRoom/OfficeChairs";
import OfficeTables from "./pages/Furnitures/OfficeRoom/OfficeTables";
import Workstations from "./pages/Furnitures/OfficeRoom/Workstations";
import GardenTables from "./pages/Furnitures/OutDoor/GardenTables";

import OutdoorBenches from "./pages/Furnitures/OutDoor/OutdoorBenches";
import OutdoorSwings from "./pages/Furnitures/OutDoor/OutdoorSwings";
import PatioSets from "./pages/Furnitures/OutDoor/PatioSets";
import Hammocks from "./pages/Furnitures/OutDoor/Hammocks";
import Accessories from "./pages/Fashion/Accessories";
import FootWare from "./pages/Fashion/FootWare";
import Men from "./pages/Fashion/Men";
import Women from "./pages/Fashion/Women";
import Bags from "./pages/Fashion/Accessories/Bags";
import Belts from "./pages/Fashion/Accessories/Belts";
import Jewelry from "./pages/Fashion/Accessories/Jewelry";
import Sunglasses from "./pages/Fashion/Accessories/Sunglasses";
import Watches from "./pages/Fashion/Accessories/Watches";
import Boots from "./pages/Fashion/FootWare/Boots";
import CasualShoes from "./pages/Fashion/FootWare/CasualShoes";
import FormalShoes from "./pages/Fashion/FootWare/FormalShoes";
import Sandals from "./pages/Fashion/FootWare/Sandals";
import SportsShoes from "./pages/Fashion/FootWare/SportsShoes";
import EthnicWear from "./pages/Fashion/Kids/EthnicWear";
import Footwear from "./pages/Fashion/Kids/Footwear";
import Frocks from "./pages/Fashion/Kids/Frocks";
import Pants from "./pages/Fashion/Kids/Pants";
import TShirts from "./pages/Fashion/Kids/TShirts";
import Jackets from "./pages/Fashion/Men/Jackets";
import Jeans from "./pages/Fashion/Men/Jeans";
import Shirts from "./pages/Fashion/Men/Shirts";
import Dresses from "./pages/Fashion/Women/Dresses";
import Handbags from "./pages/Fashion/Women/Handbags";
import Kurtis from "./pages/Fashion/Women/Kurtis";
import Sarees from "./pages/Fashion/Women/Sarees";
import Tops from "./pages/Fashion/Women/Tops";
import Art from "./pages/Books/Art";
import Business from "./pages/Books/Business";
import Childern from "./pages/Books/Childern";
import Education from "./pages/Books/Education";
import Fiction from "./pages/Books/Fiction";
import ArtCraft from "./pages/Books/Art/ArtCraft";
import DIYProject from "./pages/Books/Art/DIYProject";
import Gardening from "./pages/Books/Art/Gardening";
import Music from "./pages/Books/Art/Music";
import Photograpy from "./pages/Books/Art/Photograpy";
import Finance from "./pages/Books/Business/Finance";
import Law from "./pages/Books/Business/Law";
import Management from "./pages/Books/Business/Management";
import Marketing from "./pages/Books/Business/Marketing";
import Strategy from "./pages/Books/Business/Strategy";
import ActivityBooks from "./pages/Books/Childern/ActivityBooks";
import Comics from "./pages/Books/Childern/Comics";
import LearningBooks from "./pages/Books/Childern/LearningBooks";
import SchoolBooks from "./pages/Books/Childern/SchoolBooks";
import Storybooks from "./pages/Books/Childern/Storybooks";
import Dictionaries from "./pages/Books/Education/Dictionaries";
import ExamGuides from "./pages/Books/Education/ExamGuides";
import LanguageBooks from "./pages/Books/Education/LanguageBooks";
import ReferenceManuals from "./pages/Books/Education/ReferenceManuals";
import Textbooks from "./pages/Books/Education/Textbooks";
import HistoricalFiction from "./pages/Books/Fiction/HistoricalFiction";
import Mystery from "./pages/Books/Fiction/Mystery";
import Novels from "./pages/Books/Fiction/Novels";
import Romance from "./pages/Books/Fiction/Romance";
import SciFi from "./pages/Books/Fiction/SciFi";
import Biographies from "./pages/Books/non-Fiction/Biographies";
import Fitness from "./pages/Books/non-Fiction/Fitness";
import SelfHelp from "./pages/Books/non-Fiction/SelfHelp";
import Travel from "./pages/Books/non-Fiction/Travel";
import TrueCrime from "./pages/Books/non-Fiction/TrueCrime";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { store } from "./lib/store";
import PostAdd from "./pages/PostAdd";
import DashBoard from "./pages/DashBoard";
import CategoryMangement from "./pages/CategoryMangement";
import OrderManagement from "./pages/OrderManagement";
import ProductManagement from "./pages/ProductManagement";
import UserManagement from "./pages/UserManagement";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import SearchPage from "./pages/SearchPage";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Homepage />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/postadd" element={<PostAdd/>}/>
              <Route path="/dashbord" element={<DashBoard/>}/>
              <Route path="/dashbord/categorymange" element={<CategoryMangement/>}/>
              <Route path="/dashbord/ordermange" element={<OrderManagement/>}/>
              <Route path="/dashbord/productmange" element={<ProductManagement/>}/>
              <Route path="/dashbord/usernamge" element={<UserManagement/>}/>
               <Route path="/product/:id" element={<ProductDetails />} />
               <Route path="/cart" element={<Cart />} />
               <Route path="/serch" element={<SearchPage/>}/>
               
              {/*------------- Electronic section ---------------------------*/}
              <Route path="/electronic/mobileacc" element={<MobileAcc />} />
              <Route path="/electronic/homeelectronics" element={<HomeElectronics />} />
              <Route path="/electronic/computersaccessories" element={<ComputersAccessories />} />
              <Route path="/electronic/audioentertainment" element={<AudioEntertainment />} />
              <Route path="/electronic/kitchenappliances" element={<KitchenAppliances />} />
              <Route path="/electronic/carelectronics" element={<CarElectronics />} />
              {/* Mobile Accessories */}
              
              <Route element={<MobileAcclayout />}>
              
                <Route path="/electronic/mobileacc/mobilephone" element={<MobilePhones />} />
                <Route path="/electronic/mobileacc/charges" element={<ChargesAndCovers />} />
                <Route path="/electronic/mobileacc/headphones" element={<HeadPhones />} />
                <Route path="/electronic/mobileacc/phoneCase" element={<PhoneCaseAndCover />} />
                <Route path="/electronic/mobileacc/screenprotector" element={<ScreenProtector />} />
                <Route path="/electronic/mobileacc/smartwatch" element={<SmartWatch />} />
                <Route path="/electronic/mobileacc/phoneholders" element={<PhoneHolders />} />
                
              </Route>
              {/* Home Electronics */}
              <Route element={<HomeElectroniclayout />}>
                <Route path="/electronic/homeelectronic/televishion" element={<Televisions />} />
                <Route path="/electronic/homeelectronic/hometheter" element={<HomeTheater />} />
                <Route path="/electronic/homeelectronic/refrigerators" element={<Refrigerators />} />
                <Route path="/electronic/homeelectronic/aircondition" element={<AirConditioners />} />
                <Route path="/electronic/homeelectronic/washingmachine" element={<WashingMachines />} />
              </Route>
              {/* Computers Accessories */}
              <Route element={<ComputersAccessorieslayout />}>
                <Route path="/electronic/computersaccessories/laptops" element={<Laptops />} />
                <Route path="/electronic/computersaccessories/monitors" element={<Monitors />} />
                <Route path="/electronic/computersaccessories/keyboardsmice" element={<HeadPhones />} />
                <Route path="/electronic/computersaccessories/printers" element={<Printers />} />
                <Route path="/electronic/computersaccessories/harddrives" element={<HardDrives />} />
              </Route>
              {/* Audio Entertainment */}
              <Route element={<AudioEntertainmentlayout />}>
                <Route path="/electronic/audioentertainment/headphones" element={<Headphones />} />
                <Route path="/electronic/audioentertainment/bluetoothspeakers" element={<BluetoothSpeakers />} />
                <Route path="/electronic/audioentertainment/soundbars" element={<Soundbars />} />
                <Route path="/electronic/audioentertainment/microphones" element={<Microphones />} />
                <Route path="/electronic/audioentertainment/audiointerfaces" element={<AudioInterfaces />} />
              </Route>

              {/* Kitchen Appliances */}
              <Route element={<KitchenApplianceslayout />}>
                <Route path="/electronic/kitchenappliances/coffeemakers" element={<CoffeeMakers />} />
                <Route path="/electronic/kitchenappliances/inductioncooktops" element={<InductionCooktops />} />
                <Route path="/electronic/kitchenappliances/microwaveovens" element={<MicrowaveOvens />} />
                <Route path="/electronic/kitchenappliances/mixergrinders" element={<MixerGrinders />} />
                <Route path="/electronic/kitchenappliances/toasters" element={<Toasters />} />
              </Route>

              {/* Car Electronics */}
              <Route element={<CarElectronicslayout />}>
                <Route path="/electronic/carelectronics/carstereos" element={<CarStereos />} />
                <Route path="/electronic/carelectronics/dashcams" element={<DashCams />} />
                <Route path="/electronic/carelectronics/parkingcameras" element={<ParkingCameras />} />
                <Route path="/electronic/carelectronics/carchargers" element={<CarChargers />} />
                <Route path="/electronic/carelectronics/carairpurifiers" element={<CarAirPurifiers />} />
              </Route>











             {/*------------- Furnitures ---------------------------*/}
             <Route path="/furnitures/bedroom " element={<BedRoom />} />
              <Route path="/furnitures/diningroom" element={<DiningRoom />} />
              <Route path="/furnitures/kids" element={<Kids />} />
              <Route path="/furnitures/livingroom" element={<LivingRoom />} />
              <Route path="/furnitures/officeroom" element={<OfficeRoom />} />
              <Route path="/furnitures/outdoor" element={<OutDoor />} />
              {/* BedRoom */}
              <Route element={<BedRoomlayout />}>
                <Route path="/furnitures/bedroom/beds" element={<Beds />} />
                <Route path="/furnitures/bedroom/bedsidetables" element={<BedsideTables />} />
                <Route path="/furnitures/bedroom/dressers" element={<Dressers />} />
                <Route path="/furnitures/bedroom/mattresses" element={<Mattresses />} />
                <Route path="/furnitures/bedroom/wardrobes" element={<Wardrobes/>} />
              </Route>
              {/* DiningRoom */}
              <Route element={<DiningRoomlayout />}>
                <Route path="/furnitures/diningroom/barunits" element={<BarUnits />} />
                <Route path="/furnitures/diningroom/crockeryunits" element={<CrockeryUnits />} />
                <Route path="/furnitures/diningroom/diningchairs" element={<DiningChairs />} />
                <Route path="/furnitures/diningroom/diningtables" element={<DiningTables />} />
                <Route path="/furnitures/diningroom/sideboards" element={<Sideboards />} />
              </Route>
              {/* Kids */}
              <Route element={<Kidslayout />}>
                <Route path="/furnitures/kids/bookshelves" element={<Bookshelves />} />
                <Route path="/furnitures/kids/kidsbeds" element={<KidsBeds />} />
                <Route path="/furnitures/kids/kidschairs" element={<KidsChairs />} />
                <Route path="/furnitures/kids/studytables" element={<StudyTables />} />
                <Route path="/furnitures/kids/toystorage" element={<ToyStorage />} />
              </Route>
              {/* Living Room */}
              <Route element={<LivingRoomlayout />}>
                <Route path="/furnitures/livingroom/coffeetables" element={<CoffeeTables />} />
                <Route path="/furnitures/livingroom/recliners" element={<Recliners />} />
                <Route path="/furnitures/livingroom/sofas" element={<Sofas />} />
                <Route path="/furnitures/livingroom/tvunits" element={<TVUnits/>} />
              </Route>

              {/* Office Room */}
              <Route element={<OfficeRoomlayout/>}>
                <Route path="/furnitures/officeroom/bookshelves" element={<Bookshelves />} />
                <Route path="/furnitures/officeroom/filingcabinets" element={<FilingCabinets />} />
                <Route path="/furnitures/officeroom/officechairs" element={<OfficeChairs />} />
                <Route path="/furnitures/officeroom/officetables" element={<OfficeTables/>} />
                <Route path="/furnitures/officeroom/workstations" element={<Workstations />} />
              </Route>

              {/* OutDoor */}
              <Route element={<OutDoorlayout />}>
                <Route path="/furnitures/outdoor/gardentables" element={<GardenTables />} />
                <Route path="/furnitures/outdoor/hammocks " element={<Hammocks/>} />
                <Route path="/furnitures/outdoor/outdoorbenches" element={<OutdoorBenches />} />
                <Route path="/furnitures/outdoor/outdoorswings" element={<OutdoorSwings />} />
                <Route path="/furnitures/outdoor/patiosets" element={<PatioSets />} />
              </Route>







              {/*------------- Fashion ---------------------------*/}
             <Route path="/fashion/accessories" element={<Accessories />} />
              <Route path="/fashion/footware" element={<FootWare />} />
              <Route path="/fashion/kids" element={<Kids />} />
              <Route path="/fashion/men" element={<Men />} />
              <Route path="/fashion/women" element={<Women />} />
              {/* Accseries */}
              <Route element={<Accessorieslayout />}>
                <Route path="/fashion/accessories/bags" element={<Bags />} />
                <Route path="/fashion/accessories/belts" element={<Belts />} />
                <Route path="/fashion/accessories/bands" element={<HeadPhones />} />
                <Route path="/fashion/accessories/jewelry" element={<Jewelry />} />
                <Route path="/fashion/accessories/sunglasses" element={<Sunglasses />} />
                <Route path="/fashion/accessories/watches" element={<Watches />} />
              </Route>
              {/* FootWare */}
              <Route element={<FootWarelayout />}>
                <Route path="/fashion/footware/boots" element={<Boots/>} />
                <Route path="/fashion/footware/casualshoes" element={<CasualShoes />} />
                <Route path="/fashion/footware/formalshoes" element={<FormalShoes/>} />
                <Route path="/fashion/footware/sandals" element={<Sandals />} />
                <Route path="/fashion/footware/sportsshoes" element={<SportsShoes />} />
              </Route>
              {/* Kids */}
              <Route element={<KidslayoutF />}>
                <Route path="/fashion/kids/ethnicWear" element={<EthnicWear />} />
                <Route path="/fashion/kids/footwear" element={<Footwear />} />
                <Route path="/fashion/kids/frocks" element={<Frocks />} />
                <Route path="/fashion/kids/pants" element={<Pants />} />
                <Route path="/fashion/kids/tshirts" element={<TShirts />} />
              </Route>
              {/* Men */}
              <Route element={<Menlayout />}>
                <Route path="/fashion/men/jackets" element={<Jackets/>} />
                <Route path="/fashion/men/jeans" element={<Jeans />} />
                <Route path="/fashion/men/shirts" element={<Shirts />} />
                <Route path="/fashion/men/tshirts" element={<TShirts />} />
                <Route path="/fashion/men/watches" element={<Watches/>} />
              </Route>

              {/* Women */}
              <Route element={<Womenlayout />}>
                <Route path="/fashion/women/dresses" element={<Dresses />} />
                <Route path="/fashion/women/handbags" element={<Handbags/>} />
                <Route path="/fashion/women/kurtis" element={<Kurtis />} />
                <Route path="/fashion/women/sarees" element={<Sarees />} />
                <Route path="/fashion/women/tops" element={<Tops/>} />
              </Route>









              {/*------------- Books ---------------------------*/}
             <Route path="books/art" element={<Art/>} />
              <Route path="books/business" element={<Business />} />
              <Route path="books/children" element={<Childern/>} />
              <Route path="books/education" element={<Education />} />
              <Route path="books/fiction" element={<Fiction/>} />
              <Route path="books/nonfiction" element={<nonFiction />} />
              {/* Art  */}
              <Route element={<Artlayout />}>
                <Route path="books/art/artCraft" element={<ArtCraft/>} />
                <Route path="books/art/dIYProject " element={<DIYProject />} />
                <Route path="books/art/gardening" element={<Gardening/>} />
                <Route path="books/art/music" element={<Music />} />
                <Route path="books/art/photograpy " element={<Photograpy />} />
              </Route>
              {/* Bussiness */}
              <Route element={<Businesslayout/>}>
                <Route path="books/business/finance" element={<Finance />} />
                <Route path="books/business/law" element={<Law/>} />
                <Route path="books/business/management" element={<Management />} />
                <Route path="books/business/marketing" element={<Marketing />} />
                <Route path="books/business/strategy" element={<Strategy/>} />
              </Route>
              {/* Children  */}
              <Route element={<Childernlayout/>}>
                <Route path="books/children/activitybooks" element={<ActivityBooks />} />
                <Route path="books/children/comics" element={<Comics />} />
                <Route path="books/children/learningBooks" element={<LearningBooks />} />
                <Route path="books/children/schoolBooks" element={<SchoolBooks />} />
                <Route path="books/children/storybooks" element={<Storybooks />} />
              </Route>
              {/* Education */}
              <Route element={<Educationlayout />}>
                <Route path="books/education/Dictionaries" element={<Dictionaries />} />
                <Route path="books/education/ExamGuides" element={<ExamGuides />} />
                <Route path="books/education/languagebooks" element={<LanguageBooks/>} />
                <Route path="books/education/referencemanual" element={<ReferenceManuals/>} />
                <Route path="books/education/textbooks" element={<Textbooks/>} />
              </Route>

              {/* Fiction */}
              <Route element={<Fictionlayout/>}>
                <Route path="books/fiction/historicalfiction" element={< HistoricalFiction/>} />
                <Route path="books/fiction/mystery" element={< Mystery/>} />
                <Route path="books/fiction/novels" element={<Novels/>} />
                <Route path="books/fiction/romance" element={<Romance/>} />
                <Route path="books/fiction/sciFi" element={<SciFi/>} />
              </Route>

              {/* non fiction */}
              <Route element={<nonFictionlayout />}>
                <Route path="books/nonfiction/biographies" element={<Biographies/>} />
                <Route path="books/nonfiction/fitness" element={<Fitness/>} />
                <Route path="books/nonfiction/selfhelp" element={<SelfHelp/>} />
                <Route path="books/nonfiction/travel" element={<Travel/>} />
                <Route path="books/nonfiction/truecrime" element={<TrueCrime/>} />
              </Route>
            </Route>
            </Route>
          
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

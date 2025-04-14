import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App.jsx";
import Homepage from "./pages/home.page";
import RootLayout from "./Layout/root-layout.layout";
import MainLayout from "./Layout/main.layout";
import "./index.css";
import { store } from "./redux/store";
import MobileAcc from "./pages/Electronic/MobileAcc.jsx";
import Electronic from "./Layout/Electronic.layout.jsx";
import MobilePhones from "./pages/Electronic/MobileAcc/MobilePhones.jsx";
import ChargesAndCovers from "./pages/Electronic/MobileAcc/ChargesAndCovers.jsx";
import HeadPhones from "./pages/Electronic/MobileAcc/HeadPhones.jsx";
import PhoneCaseAndCover from "./pages/Electronic/MobileAcc/PhoneCaseAndCover.jsx";
import ScreenProtector from "./pages/Electronic/MobileAcc/ScreenProtector.jsx";
import SmartWatch from "./pages/Electronic/MobileAcc/SmartWatch.jsx";
import PhoneHolders from "./pages/Electronic/MobileAcc/PhoneHolders.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Homepage />} />
              <Route path="/mobileacc" element={<MobileAcc />} />
              <Route element={<Electronic/>}>
              <Route path="/mobilephone" element={<MobilePhones/>}/>
              <Route path="/charges" element={<ChargesAndCovers/>}/>
              <Route path="/headphones" element={<HeadPhones/>}/>
              <Route path="/phoneCase" element={<PhoneCaseAndCover/>}/>
              <Route path="/screenprotector" element={<ScreenProtector/>}/>
              <Route path="/smartwatch" element={<SmartWatch/>}/>
              <Route path="/phoneholders" element={<PhoneHolders/>}/>
            </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
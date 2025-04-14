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
import MobilePhoes from "./pages/Electronic/MobileAcc/MobilePhoes.jsx";


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
              <Route path="/mobilephone" element={<MobilePhoes/>}/>
            </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
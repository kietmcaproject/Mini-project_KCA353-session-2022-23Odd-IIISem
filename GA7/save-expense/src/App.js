import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login/Login";
import SignUp from "./components/Login/SignUp";
import ContactUs from "./components/ContactUs/ContactUs";
import Savings from "./components/Savings/Savings";
import Transactions from "./components/Transaction/Transactions";
import Spendings from "./components/Spendings/Spendings";
import SetGoal from "./components/SetGoal/SetGoal";
import Income from "./components/Income/Income";
import SideBar from "./components/SideBar/SideBar";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import History from "./components/History/History";

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div>
      <div className="./App">
        <BrowserRouter>
          <div className="content">
            <Routes>
              <Route exact="true" path="/" element={<Home />}></Route>
              <Route exact="true" path="/login" element={<Login />}></Route>
              <Route
                exact="true"
                path="/contactUs"
                element={<ContactUs />}
              ></Route>
              <Route exact="true" path="/signUp" element={<SignUp />}></Route>
              <Route exact="true" path="/savings" element={<Savings />}></Route>
              <Route
                exact="true"
                path="/spendings"
                element={<Spendings />}
              ></Route>
              <Route exact="true" path="/sidebar" element={<SideBar />}></Route>

              <Route exact="true" path="/aboutUs" element={<AboutUs />}></Route>

              <Route
                exact="true"
                path="/setgoals"
                element={<SetGoal />}
              ></Route>

              <Route exact="true" path="/history" element={<History />}></Route>
              <Route
                exact="true"
                path="/transactions"
                element={<Transactions />}
              ></Route>
              <Route exact="true" path="/income" element={<Income />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

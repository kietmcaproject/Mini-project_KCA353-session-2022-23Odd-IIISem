import React, { useEffect } from "react";
import { CreateContainer, Header, MainContainer } from "./components";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { useStateValue } from "./context/StateProvider";
import { actionType } from "./context/reducer";
import AdminPanel from "./components/AdminPanel";
import Login from "./components/login/Login";
import AboutUs from "./components/aboutus/AboutUs";
import ContactUs from "./components/contactus/ContactUs";
import ErrorPage from "./components/ErrorPage";
import AllUsers from "./components/AllUsers";
import AllItems from "./components/AllItems";
import AllOrders from "./components/AllOrders";
import Checkout from "./components/Checkout";

const App = () => {
  const [{ foodItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AnimatePresence>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />

        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/" element={<MainContainer />} />
            <Route path="/adminPanel" element={<AdminPanel />} />
            <Route path="/createItem" element={<CreateContainer />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/allUsers" element={<AllUsers />} />
            <Route path="/allItems" element={<AllItems />} />
            <Route path="/allOrders" element={<AllOrders />} />
            <Route path="/checkout" element={<Checkout />} />

            {/* <Route path="/*" element={<ErrorPage />} /> */}
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
};

export default App;

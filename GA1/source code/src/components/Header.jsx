import React, { useState } from "react";
import Logo from "../img/logo.png";
import { MdShoppingBasket, MdLogout } from "react-icons/md";
import Avatar from "../img/avatar.png";
import { motion } from "framer-motion";
import { actionType } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";
import { Link } from "react-router-dom";
import { signOut, getAuth } from "firebase/auth";
import { app } from "../firebase.config";
import { getAdminMails } from "../utils/firebaseFunctions";
import { useEffect } from "react";

const Header = () => {
  const [{ user, cartShow, cartItems }, dispatch] = useStateValue();
  const [isMenu, setisMenu] = useState(false);
  const firebaseAuth = getAuth(app);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const adminMails = getAdminMails();
    adminMails.then((data) => {
      if (data.includes(user.email)) setIsAdmin(true);
      else setIsAdmin(false);
    });
  }, [isAdmin]);

  const toggleMenu = () => {
    setisMenu(!isMenu);
  };

  const logout = () => {
    setisMenu(false);
    signOut(firebaseAuth);
    localStorage.clear();

    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  return (
    <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary">
      {/* desktop and tablet*/}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="w-8 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-bold">FoodHack</p>
        </Link>
        <div className="flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-8 "
          >
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              <a href="#menu">Menu</a>
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              <Link to={"/contact"}>Contact Us</Link>
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              <Link to={"/about"}>About Us</Link>
            </li>
          </motion.ul>

          <div
            className="relative flex items-center justify-center"
            onClick={showCart}
          >
            <MdShoppingBasket className="text-textColor text-2xl cursor-pointer" />
            {cartItems && cartItems.length > 0 && (
              <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full flex items-center bg-cartNumBg text-center justify-center">
                <p className="text-sm text-white font-semibold">
                  {cartItems.length}
                </p>
              </div>
            )}
          </div>

          <div className="relative ">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : Avatar}
              className="w-10 min-w-[40px] h-10 min-h-[40px] drop- shadow-xl cursor-pointer rounded-full"
              alt="userprofile"
              onClick={toggleMenu}
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
              >
                {user ? (
                  isAdmin && (
                    <Link to={"/adminPanel"}>
                      <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
                        Admin Panel
                      </p>
                    </Link>
                  )
                ) : (
                  <Link to={"/login"}>
                    <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
                      Login
                    </p>
                  </Link>
                )}
                <p
                  className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                  onClick={logout}
                >
                  Logout
                  <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="flex items-center justify-between md:hidden w-full h-full">
        <div
          className="relative flex items-center justify-center"
          onClick={showCart}
        >
          <MdShoppingBasket className="text-textColor text-2xl cursor-pointer" />
          {cartItems && cartItems.length > 0 && (
            <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full flex items-center bg-cartNumBg text-center justify-center">
              <p className="text-sm text-white font-semibold">
                {cartItems.length}
              </p>
            </div>
          )}
        </div>

        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="w-8 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-bold">
            KIET Amul Parlour
          </p>
        </Link>

        <div className="relative ">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : Avatar}
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop- shadow-xl cursor-pointer rounded-full"
            alt="userprofile"
            onClick={toggleMenu}
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
            >
              {user &&
                (user.email === "atif.2124mca1052@kiet.edu" ||
                  user.email === "brahm.2124mca1099@kiet.edu") && (
                  <Link to={"/createItem"}>
                    <p
                      className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base "
                      onClick={() => setisMenu(false)}
                    >
                      Admin Panel
                    </p>
                  </Link>
                )}

              <ul className="flex flex-col">
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2 "
                  onClick={() => setisMenu(false)}
                >
                  Home
                </li>
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2 "
                  onClick={() => setisMenu(false)}
                >
                  Menu
                </li>
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2 "
                  onClick={() => setisMenu(false)}
                >
                  About
                </li>
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2 "
                  onClick={() => setisMenu(false)}
                >
                  Services
                </li>
              </ul>

              <p
                className="m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-200  gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base"
                onClick={logout}
              >
                Logout
                <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

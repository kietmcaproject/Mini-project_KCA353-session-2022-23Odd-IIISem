import React from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useRef } from "react";
import NotFound from "../img/NotFound.svg";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import { useState } from "react";
import ZoomedItem from "./ZoomedItem";

const RowContainer = ({ flag, data, scrollValue }) => {
  const RowContainer = useRef();

  const [items, setItems] = useState([]);

  const [{ cartItems }, dispatch] = useStateValue();
  const addtocart = () => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: items,
    });
    localStorage.setItem("cartItems", JSON.stringify(items));
  };

  useEffect(() => {
    RowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);

  useEffect(() => {
    addtocart();
  }, [items]);

  return (
    <div
      ref={RowContainer}
      className={`w-full flex items-center gap-3 my-12 scroll-smooth ${
        flag
          ? "overflow-x-scroll scrollbar-thin"
          : "overflow-x-hidden flex-wrap justify-center scrollbar-thin"
      }`}
    >
      {data && data.length > 0 ? (
        data.map((item) => (
          <motion.div
            key={item.id}
            className="w-300 h-[250px] min-w-[300px] md:w-340 md:min-w-[340px]  bg-cardOverlay rounded-lg p-2 my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-between"
            whileHover={{ scale: 1.2, zIndex: 2 }}
          >
            <ZoomedItem item={item} />
            <div className="w-full flex items-center justify-between">
              <motion.div className="w-40 h-40 -mt:8 drop-shadow-2xl">
                <img
                  src={item?.imageURL}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md"
                onClick={() => setItems([...cartItems, item])}
              >
                <MdShoppingBasket className="text-white" />
              </motion.div>
            </div>

            <div className="w-full flex flex-col items-end justify-end">
              <p className="text-textColor font-semibold text-base md:text-lg">
                {item?.title}
              </p>
              <p className="mt-2 text-sm text-gray-500 ">
                Calories: {item?.calories}
              </p>
              <div className="flex items-center gap-8">
                <p className="text-lg text-headingColorading font-semibold ">
                  <span className="text-sm text-red-500 ">Rs.</span>{" "}
                  {item?.price}
                </p>
              </div>
            </div>
          </motion.div>
        ))
      ) : (
        <div className="w-full flex items-center justify-center">
          <img src={NotFound} className="h-340 " />
          <p className="text-xl text-headingColor font-semibold my-2">
            Items Not Available
          </p>
        </div>
      )}
    </div>
  );
};

export default RowContainer;

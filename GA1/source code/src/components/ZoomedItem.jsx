import Popup from "reactjs-popup";
import { motion } from "framer-motion";
import { MdShoppingBasket } from "react-icons/md";

const ZoomedItem = (props) => {
  const item = props.item;
  return (
    <Popup
      trigger={
        <button className="bg-red-300 text-black w-min justify -m-4 ml-64 p-2">
          Details
        </button>
      }
      position="center center"
    >
      <motion.div className="w-[700px] h-[450px] min-w-[300px] md:w-340 md:min-w-[340px]  bg-cardOverlay rounded-lg p-2 my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-between">
        <div className="w-full flex items-center justify-between">
          <motion.div
            className="w-[250px] h-[250px] mt:8 drop-shadow-2xl"
            whileHover={{ scale: 1.2 }}
          >
            <img
              src={item?.imageURL}
              alt=""
              className="w-full h-full object-contain"
            />
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.75 }}
            className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md"
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
              <span className="text-sm text-red-500 ">Rs.</span> {item?.price}
            </p>
          </div>
        </div>
      </motion.div>
    </Popup>
  );
};

export default ZoomedItem;

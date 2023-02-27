import { Link } from "react-router-dom";
import { MdAdd } from "react-icons/md";
import { getAdminMails } from "../utils/firebaseFunctions";
import ErrorPage from "./ErrorPage";
import { useEffect } from "react";
import { useState } from "react";
import { useStateValue } from "../context/StateProvider";

function AdminPanel() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [{ user }] = useStateValue();

  useEffect(() => {
    const adminMails = getAdminMails();
    adminMails.then((data) => {
      if (data.includes(user.email)) setIsAdmin(true);
      else setIsAdmin(false);
    });
  }, [isAdmin]);

  return isAdmin ? (
    <div className="text-center">
      <h2>Admin Panel</h2>
      <h3>ITEMS</h3>
      <Link to={"/allItems"}>
        <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
          See All Items
        </p>
      </Link>
      <Link to={"/createItem"}>
        <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
          Add Items
          <MdAdd />
        </p>
      </Link>
      <h3>USERS</h3>
      <Link to={"/allUsers"}>
        <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
          See All Users
        </p>
      </Link>
      <h3>ORDERS</h3>
      <Link to={"/allOrders"}>
        <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
          See All Orders
        </p>
      </Link>
    </div>
  ) : (
    <ErrorPage />
  );
}

export default AdminPanel;

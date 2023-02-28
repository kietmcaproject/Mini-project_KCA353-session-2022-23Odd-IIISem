import { NavLink } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="bg-img">
      <div className="page">
        <div className="topnav">
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/aboutUs">AboutUs</NavLink>
          <NavLink to="/contactUs">Contact</NavLink>
        </div>
      </div>
    </div>
  );
};
export default Home;

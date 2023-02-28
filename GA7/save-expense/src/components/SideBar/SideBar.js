import React from "react";
import { NavLink } from "react-router-dom";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div>
      <input type="checkbox" id="check" />
      <label htmlFor="check">
        <i className="fas fa-times" id="cancel"></i>
        <i className="fas fa-bars" id="btn"></i>
      </label>
      <div className="sidebar">
        <header>
          <i className="fa fa-rupee-sign"> &nbsp;&nbsp; Bachat💰</i>
        </header>
        <NavLink to="/transactions">
          <i className="fa fa-credit-card" style={{ color: "green" }}></i>
          <span>Transactions</span>
        </NavLink>
        <NavLink to="/income">
          <i className="fa fa-calculator" style={{ color: "green" }}></i>
          <span>Income</span>
        </NavLink>

        <NavLink to="/spendings">
          <i className="fa fa-archive" style={{ color: "green" }}></i>
          <span>Expense</span>
        </NavLink>

        <NavLink to="/savings">
          <i className="fa fa-briefcase" style={{ color: "green" }} />
          <span>Savings</span>
        </NavLink>
        <NavLink to="/setgoals">
          <i className="fas fa-bullseye" style={{ color: "green" }}></i>
          <span>Set Goals</span>
        </NavLink>
        <NavLink to="/history">
          <i className="fa fa-credit-card" style={{ color: "green" }}></i>
          <span>History</span>
        </NavLink>
        <NavLink to="/">
          <i className="fa fa-arrow-circle-left" style={{ color: "green" }}></i>
          <span>Log Out</span>
        </NavLink>
      </div>
    </div>
  );
};
export default SideBar;

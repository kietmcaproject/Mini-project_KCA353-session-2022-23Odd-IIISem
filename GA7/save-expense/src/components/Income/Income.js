import "./Income.css";
import SideBar from "../SideBar/SideBar";
import { useRef } from "react";
import swal from "sweetalert";
import React from "react";

import "reactjs-popup/dist/index.css";
const Income = () => {
  const incomeRef = useRef("");
  const sourceRef = useRef("");
  const dateRef = useRef("");

  async function submitHandler(event) {
    event.preventDefault();
    const incomeData = {
      income: incomeRef.current.value,
      sourceIncome: sourceRef.current.value,
      incomeDate: dateRef.current.value,
    };
    const response = await fetch("http://localhost:8080/income/", {
      method: "POST",
      body: JSON.stringify(incomeData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      swal({
        title: "💰💰",
        text: "Added Income SuccessFully",
        icon: "success",
        button: "Ok!",
      });

      return response.json();
    }
  }

  return (
    <div className="income-page">
      <form onSubmit={submitHandler}>
        <SideBar />

        <div className="new-expense">
          <div className="new-expense__control">
            <label>Source Of Income</label>
            <select required={true} ref={sourceRef}>
              <option value="BUSINESS">Business Income</option>
              <option value="SALARY">Salary Income</option>
              <option value="INTEREST">Interest Income</option>
              <option value="RENTAL">Rental Income</option>
              <option value="STOCK">Dividend/Capital Gains Income</option>
              <option value="OTHERS">Others</option>
            </select>
          </div>
          <div className="new-expense__control">
            <label>Income</label>
            <input type="number" required={true} ref={incomeRef} />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" required={true} ref={dateRef} />
          </div>
          <div className="new-expense__actions">
            <button type="submit"> Add Income</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Income;

import React, { useRef } from "react";
import SideBar from "../SideBar/SideBar";
import "./Spendings.css";
import swal from "sweetalert";

const Spendings = () => {
  const incomeRef = useRef("");
  const categoryRef = useRef("");
  const expenseDateRef = useRef("");

  async function submitHandler(event) {
    event.preventDefault();
    const expenseData = {
      category: categoryRef.current.value,
      amount: incomeRef.current.value,
      expenseDate: expenseDateRef.current.value,
    };

    const response = await fetch("http://localhost:8080/expense/", {
      method: "POST",
      body: JSON.stringify(expenseData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      swal({
        title:
          "Either you don't add goal to this month or you have reached your target limit for this month",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      });
    } else {
      swal({
        title: "🫤🫤",
        text: "Added Expense SuccessFully",
        icon: "success",
        button: "Ok!",
      });
    }
  }
  return (
    <div className="expense-page">
      <form onSubmit={submitHandler}>
        <SideBar />
        <div className="new-expense">
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Category</label>
              <select ref={categoryRef} required={true}>
                <option value="CLOTHES">Clothes</option>
                <option value="FOOD">Food</option>
                <option value="FUEL">Fuel</option>
                <option value="SHOPPING">Shopping</option>
                <option value="TRAVEL">Travel</option>
                <option value="MEDICINE">Medicine</option>
                <option value="SCHOOLFEES">SchoolFees</option>
                <option value="OTHERS">Others</option>
              </select>
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input type="number" ref={incomeRef} required={true} />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2019-01-01"
                max="2023-12-31"
                ref={expenseDateRef}
                required={true}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button type="submit"> Add Expense</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Spendings;

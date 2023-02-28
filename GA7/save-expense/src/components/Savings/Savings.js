import React, { useRef, useState } from "react";
import SideBar from "../SideBar/SideBar";

import "./Savings.css";
const Savings = () => {
  const fromExpenseDateRef = useRef("");
  const toExpenseDateRef = useRef("");
  const [expenses, setExpenses] = useState([]);
  const [income, setIncome] = useState([]);
  const [totalExpense, setTotalExpense] = useState(null);
  const [totalIncome, setTotalIncome] = useState(null);

  async function submitHandler(event) {
    event.preventDefault();

    const expense_details = {
      fromDate: fromExpenseDateRef.current.value,
      toDate: toExpenseDateRef.current.value,
    };
    const request = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(expense_details),
    };
    fetch("http://localhost:8080/expense/groupByCategory", request)
      .then((response) => response.json())
      .then((detail) => {
        setExpenses(detail);
        setTotalExpense(0);
        if (detail.length > 0) {
          let expense = detail[detail.length - 1];
          setTotalExpense(expense.totalSum);
        }
      });

    fetch("http://localhost:8080/income/groupBySourceIncome", request)
      .then((response) => response.json())
      .then((incomeDetail) => {
        setIncome(incomeDetail);
        setTotalIncome(0);
        if (incomeDetail.length > 0) {
          let income = incomeDetail[incomeDetail.length - 1];
          setTotalIncome(income.totalSum);
        }
      });
  }
  return (
    <div className="save-page">
      <SideBar />

      <div className="new-expense ">
        <div className="new-expense__control">
          <label>Enter From Date:</label>
          <input type="date" required={true} ref={fromExpenseDateRef} />
        </div>
        <div className="new-expense__control">
          <label>Enter To Date:</label>
          <input type="date" required={true} ref={toExpenseDateRef} />
        </div>
        <div className="new-expense__actions">
          <button type="submit" onClick={submitHandler}>
            Submit
          </button>
        </div>
        <table className="content-table table table-hover">
          <tbody>
            {totalIncome > totalExpense && (
              <tr className="table-success">
                <td colSpan={2}>
                  <div
                    style={{
                      color: "blue",
                      fontWeight: "bold",
                    }}
                  >
                    Your Savings ::💸 &#x20b9; {totalIncome - totalExpense}
                  </div>
                </td>
              </tr>
            )}
            {totalIncome < totalExpense && (
              <tr>
                <td colSpan={2}>
                  <div style={{ color: "red", background: "lightyellow" }}>
                    😢😢😢{totalIncome - totalExpense}
                  </div>
                </td>
              </tr>
            )}
            {totalIncome === 0 && totalExpense === 0 && (
              <tr>
                <td colSpan={2}>
                  <div
                    style={{
                      color: "red",
                      fontWeight: "bold",
                      background: "white",
                      fontSize: "large",
                      fontStyle: "italic",
                    }}
                  >
                    There is no Income or Expense transaction during the
                    selected period. Please select any other period.
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Savings;

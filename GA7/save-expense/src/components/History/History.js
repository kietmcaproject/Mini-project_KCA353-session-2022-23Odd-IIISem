import React, { useState, useRef } from "react";
import SideBar from "../SideBar/SideBar";
import "./History.css";

const History = () => {
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
    <div className="transPage">
      <SideBar />
      <div className="new-expense">
        <div className="new-expense__control">
          <h5>Enter range to see transactions</h5>
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

        <div className="show">
          <table className="content-table">
            <tbody>
              {income.map((income, index) => (
                <tr key={index} className="sourceIncome">
                  <td className="td-left">{income.sourceIncome}</td>
                  <td className="td-right"> &#x20b9; {income.groupedSum}</td>
                </tr>
              ))}
              {expenses.map((expense, index) => (
                <tr key={index} className="sourceExpense">
                  <td className="td-left">{expense.category}</td>
                  <td className="td-right"> &#x20b9; {expense.groupedSum}</td>
                </tr>
              ))}
              <tr>
                <td colSpan={2}>
                  {totalIncome > 0 && (
                    <div style={{ color: "green", fontWeight: "bold" }}>
                      Total Income is :: &#x20b9; {totalIncome}
                    </div>
                  )}
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  {totalExpense > 0 && (
                    <div
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        background: "lightblue",
                      }}
                    >
                      Total Expense is :: &#x20b9; {totalExpense}
                    </div>
                  )}
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  {totalIncome > totalExpense && (
                    <div
                      style={{
                        color: "blue",
                        background: "lightgrey",
                        fontWeight: "bold",
                      }}
                    >
                      You have now ::💸 &#x20b9; {totalIncome - totalExpense}
                    </div>
                  )}
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  {totalIncome < totalExpense && (
                    <div style={{ color: "red", background: "lightyellow" }}>
                      😢😢😢{totalIncome - totalExpense}
                    </div>
                  )}
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  {totalIncome === 0 && totalExpense === 0 && (
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
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default History;

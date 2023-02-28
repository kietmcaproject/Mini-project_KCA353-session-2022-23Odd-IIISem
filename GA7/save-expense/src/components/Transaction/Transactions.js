import React, { useState, useEffect } from "react";
import SideBar from "../SideBar/SideBar";
import "./Transactions.css";

const Transactions = () => {
  const now = new Date();
  const [expenses, setExpenses] = useState([]);
  const [income, setIncome] = useState([]);
  const [totalExpense, setTotalExpense] = useState(null);
  const [totalIncome, setTotalIncome] = useState(null);
  useEffect(() => {
    submitHandler();
  }, []);

  async function submitHandler() {
    const expense_details = {
      fromDate: new Date(now.getFullYear(), now.getMonth(), 1),
      toDate: new Date(now.getFullYear(), now.getMonth() + 1, 0),
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
      <h5 style={{ color: "tomato", textAlign: "center" }}>
        Your current month transactions are:
      </h5>
      <div className="new-expense">
        <div className="show">
          <table className="content-table table table-hover">
            <tbody>
              {income.map((income, index) => (
                <tr key={index} className="sourceIncome table-secondary">
                  <td
                    className="td-left"
                    style={{ color: "green", fontWeight: "bold" }}
                  >
                    {income.sourceIncome}
                  </td>
                  <td
                    className="td-right"
                    style={{ color: "green", fontWeight: "bold" }}
                  >
                    &#x20b9; {income.groupedSum}
                  </td>
                </tr>
              ))}
              {expenses.map((expense, index) => (
                <tr key={index} className="sourceExpense table-danger">
                  <td
                    className="td-left"
                    style={{ color: "red", fontWeight: "bold" }}
                  >
                    {expense.category}
                  </td>
                  <td
                    className="td-right"
                    style={{ color: "red", fontWeight: "bold" }}
                  >
                    &#x20b9; {expense.groupedSum}
                  </td>
                </tr>
              ))}
              {totalIncome > 0 && (
                <tr className="table-info">
                  <td colSpan={2}>
                    <div style={{ color: "green", fontWeight: "bold" }}>
                      Total Income is :: &#x20b9; {totalIncome}
                    </div>
                  </td>
                </tr>
              )}
              {totalExpense > 0 && (
                <tr className="table-warning">
                  <td colSpan={2}>
                    <div
                      style={{
                        color: "red",
                        fontWeight: "bold",
                      }}
                    >
                      Total Expense is :: &#x20b9; {totalExpense}
                    </div>
                  </td>
                </tr>
              )}
              {totalIncome > totalExpense && (
                <tr className="table-success">
                  <td colSpan={2}>
                    <div
                      style={{
                        color: "blue",
                        fontWeight: "bold",
                      }}
                    >
                      You have now ::💸 &#x20b9; {totalIncome - totalExpense}
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
    </div>
  );
};
export default Transactions;

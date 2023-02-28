import React, { useRef } from "react";
import SideBar from "../SideBar/SideBar.js";
import swal from "sweetalert";
import "reactjs-popup/dist/index.css";

const SetGoal = () => {
  const goalMonthRef = useRef("");
  const targetRef = useRef("");
  async function submitHandler(event) {
    event.preventDefault();
    const setGoalData = {
      goalMonth: goalMonthRef.current.value,
      target: targetRef.current.value,
      goalYear: "2023",
    };
    const response = await fetch("http://localhost:8080/setGoals/", {
      method: "POST",
      body: JSON.stringify(setGoalData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      swal({
        title: "🎯",
        text: "Added Goal SuccessFully",
        icon: "success",
        button: "Ok!",
      });

      return response.json();
    }
  }

  return (
    <div>
      <SideBar />
      <div className="new-expense">
        <form onSubmit={submitHandler}>
          <div className="new-expense__control">
            <label>Select Month:</label>
            <select required={true} ref={goalMonthRef}>
              <option value="JANUARY">January</option>
              <option value="FEBRUARY">February</option>
              <option value="MARCH">March</option>
              <option value="APRIL">April</option>
              <option value="MAY">May</option>
              <option value="JUNE">June</option>
              <option value="JULY">July</option>
              <option value="AUGUST">August</option>
              <option value="SEPTEMBER">September</option>
              <option value="OCTOBER">October</option>
              <option value="NOVEMBOR">Novembor</option>
              <option value="DECEMBER">December</option>
            </select>

            <label>Enter Spending Target:</label>
            <input type="number" required={true} ref={targetRef} />
            <div className="new-expense__actions">
              <button type="submit"> Add Target</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SetGoal;

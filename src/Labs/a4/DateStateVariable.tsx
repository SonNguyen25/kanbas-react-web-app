import React, { useState } from "react";
function DateStateVariable() {
  const [startDate, setStartDate] = useState(new Date());
  const dateObjectToHtmlDateString = (date: Date) => {
    return `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? 0 : ""}${
      date.getMonth() + 1
    }-${date.getDate() + 1 < 10 ? 0 : ""}${date.getDate() + 1}`;
  };
  return (
    <div>
      <h2>Date State Variables</h2>
      <h3>{JSON.stringify(startDate)}</h3>
      <h3>{dateObjectToHtmlDateString(startDate)}</h3>
      <input
        className="form-control"
        type="date"
        value={dateObjectToHtmlDateString(startDate)}
        onChange={(e) => setStartDate(new Date(e.target.value))}
      />
    </div>
  );
}
export default DateStateVariable;
// import useState

// declare and initialize with today's date
// utility function to convert date object
// to YYYY-MM-DD format for HTML date
// picker





// display raw date object
// display in YYYY-MM-DD format for input
// of type date


// set HTML input type date
// update when you change the date with
// the date picker


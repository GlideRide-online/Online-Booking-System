import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateSelector = ({ selectedDate, handleDateChange }) => {
  return (
    <>
      <div className="mb-4">
        <label className="block text-lg font-semibold mb-4 font-mono">
          Select Date:
        </label>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy" // Customize date format
          className="w-full p-2 border rounded shadow-md"
        />
      </div>
    </>
  );
};

export default DateSelector;

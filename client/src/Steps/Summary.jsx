import React from "react";
import { Link } from "react-router-dom";
import { useBooking } from "../contexts/BookingDataContext";

const Summary = () => {
  const { state } = useBooking();
  console.log(state);
  return (
    <>
      <div>Summary</div>
      <Link to="/thankyou">
        <button className="h-10 px-5 text-green-700 transition-colors duration-150 border border-gray-300 rounded-lg focus: shadow-outline hover:bg-green-500 hover:text-green-100">
          Book Now!
        </button>
      </Link>
    </>
  );
};

export default Summary;

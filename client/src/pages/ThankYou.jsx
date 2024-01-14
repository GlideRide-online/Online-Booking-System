import React from "react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  const clearLocalstorage = () => {
    localStorage.clear();
  };
  return (
    <>
      <div className="container md:mt-10 mt-40 mx-auto">
        <div className="flex flex-col items-center">
          <div className="text-green-400">
            <svg class="w-24 h-24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="8" fill="currentColor"/>
              <path d="M 6.5 10.5 L 9 13 L 13.5 8.5" fill="none" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

          </div>
          <div className="mt-3 text-xl font-semibold uppercase text-green-500">
            Congratulations!
          </div>
          <div className="text-lg font-semibold text-gray-500">
            Your Ride Has been Booked Successfully
            <h1>
              Please Check Your mail(spam included), we have sent you the
              details.
            </h1>
          </div>
          <Link className="mt-10" to="/">
            <button
              onClick={clearLocalstorage}
              className="h-10 px-5 text-green-700 transition-colors duration-150 border border-gray-300 rounded-lg focus: shadow-outline hover:bg-green-500 hover:text-green-100"
            >
              Close
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ThankYou;

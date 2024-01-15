import React from "react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  const clearLocalstorage = () => {
    localStorage.clear();
  };
  return (
    <>
      <div className="container mx-auto md:mt-10 mt-40">
        <div className="flex flex-col items-center">
          <div className="text-green-400">
            <svg
              className="w-24 h-24"
              fill="currentColor"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 
                208-208S370.9 48 256 48zm-32.1 281.7c-2.4 2.4-5.8 4.4-8.8
                4.4s-6.4-2.1-8.9-4.5l-56-56 17.8-17.8 47.2 47.2L340 177.3l17.5
                18.1-133.6 134.3z"
              />
            </svg>
          </div>
          <div className="mt-3 text-xl font-semibold uppercase text-green-500">
            Congratulations!
          </div>
          <div className="text-lg font-semibold text-gray-500 text-center">
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

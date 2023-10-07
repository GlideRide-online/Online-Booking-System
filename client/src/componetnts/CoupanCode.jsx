import React from "react";

const CoupanCode = () => {
  return (
    <>
      <div className="mx-auto max-w-md p-4 bg-white rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Enter Coupon Code(if any)"
          value=""
          className="w-full p-2 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        <button className="mt-2 w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
          Apply Coupon
        </button>
      </div>
    </>
  );
};

export default CoupanCode;

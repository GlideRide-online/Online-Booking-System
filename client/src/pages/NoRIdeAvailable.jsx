import { message } from "antd";
import React, { useState } from "react";

const NoRIdeAvailable = () => {
  const [whatsappNumber, setWhatsappNumber] = useState("");

  const handleNumberChange = (e) => {
    setWhatsappNumber(e.target.value);
  };
  const addToWaitingList = (e) => {
    e.preventDefault();
    console.log("User's WhatsApp number:", whatsappNumber);
    message.success("Thanks for your Patience!");
    setWhatsappNumber("");
  };
  return (
    <form onSubmit={addToWaitingList}>
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          No Rides Available
        </h2>
        <p className="text-gray-600 mb-4">
          We're sorry, but currently, there are no rides available.
        </p>
        <p className="text-gray-600 mb-4">
          We Will Notify You Once rides will be available
        </p>
        <div className="my-4">
          <label
            htmlFor="whatsappNumber"
            className="block text-gray-600 text-sm"
          >
            WhatsApp Number
          </label>

          <input
            type="text"
            id="whatsappNumber"
            className="block w-full bg-gray-100 text-gray-800 border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-400"
            placeholder="Enter your WhatsApp number"
            value={whatsappNumber}
            onChange={handleNumberChange}
            required
          />
        </div>
        <button className="bg-yellow-500 text-black font-sans px-4 py-2 rounded-md">
          Notify Me
        </button>
      </div>
    </form>
  );
};

export default NoRIdeAvailable;

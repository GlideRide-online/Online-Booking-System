import { message } from "antd";
import React from "react";

const NoRIdeAvailable = () => {
  const addToWaitingList = (e) => {
    e.preventDefault();
    sendMessage();
    message.success("Thanks for your Patience!");
  };
  const sendMessage = () => {
    // let number = whatsappNumber.replace(/[^\w\s]/gi, "").replace(/ /g, "");
    let url = `https://web.whatsapp.com/send?phone=${process.env.REACT_APP_NUMBER}`;
    url += `&text=${encodeURI(
      "Hi Glideride! Please add me to waiting list and Notify me as soon as ride is possible"
    )}&app_absent=0`;
    window.open(url);
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
            Click Here to add You to our waiting List
          </label>
        </div>
        <button className="bg-yellow-500 text-black font-sans px-4 py-2 rounded-md">
          Add Me!
        </button>
      </div>
    </form>
  );
};

export default NoRIdeAvailable;

import React from "react";
import axios from "axios";
import { message } from "antd";

const DisableUiButton = () => {
  const handleDisable = async () => {
    console.log("ui disable");
    try {
      const res = await axios.post("https://glideride.onrender.com/updateUi", {
        booleanValue: true,
      });
      message.success("Ui Disabled successfully");
      console.log(res.data);
    } catch (error) {
      console.error("Error sending boolean value:", error);
    }
  };
  const handleActivate = async () => {
    console.log("Ui Activated");
    try {
      const res = await axios.post("https://glideride.onrender.com/updateUi", {
        booleanValue: false,
      });
      message.success("Ui Activated successfully");
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <button
          onClick={handleDisable}
          className="bg-yellow-500 text-black font-sans px-4 py-2 rounded-md"
        >
          Disable Ride
        </button>
        <br></br>
        <button
          onClick={handleActivate}
          className="bg-yellow-500 text-black font-sans px-4 py-2 rounded-md"
        >
          Active Ui
        </button>
      </div>
    </>
  );
};

export default DisableUiButton;

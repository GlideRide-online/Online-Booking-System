import React from "react";
import Loader from "../assests/loading-bike.gif";

const Loading = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        {/* You can customize the loading animation or message */}
        <img src={Loader} alt="Loading" />
      </div>
    </>
  );
};

export default Loading;

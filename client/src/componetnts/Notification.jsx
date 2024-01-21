// Notification.js

import React, { useState, useEffect } from "react";

const Notification = ({ message, duration, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [timer, setTimer] = useState(duration);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 1) {
          clearInterval(interval);
          setIsVisible(false);
          onClose();
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [duration, onClose]);

  return (
    <>
      {isVisible && (
        <div className="fixed  font-roboto bottom-0 right-0 mb-4 mr-4 p-4 bg-black text-white rounded-md shadow-md">
          <p>{message}</p>
          <p className="mt-2 text-sm">{`${timer} seconds`}</p>
        </div>
      )}
    </>
  );
};

export default Notification;

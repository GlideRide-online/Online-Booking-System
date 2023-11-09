import React from "react";
import { Navigate } from "react-router-dom";
const ShowUi = ({ children }) => {
  if (!localStorage.getItem("ShowUi")) {
    return <Navigate to="/" />;
  } else {
    return <Navigate to="/NoRideAvailable" />;
  }
};

export default ShowUi;

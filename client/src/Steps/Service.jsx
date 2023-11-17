import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import jwtDecode from "jwt-decode";
import img from "../assests/service.png";
import { Link } from "react-router-dom";
import { useBooking } from "../contexts/BookingDataContext";
import { message } from "antd";
const Service = () => {
  const location = useLocation();
  const [selectedService, setSelectedService] = useState(null);
  const [user, setUser] = useState(null);
  const { dispatch } = useUser();
  const { fetch } = useBooking();
  const services = [
    {
      id: 1,
      name: "4 Hour Rental",
      price: "₹169",
      securtiy: "₹85",
      duration: 4,
    },
    {
      id: 2,
      name: "6 Hour Rental",
      price: "₹249",
      securtiy: "₹125",
      duration: 6,
    },
    {
      id: 3,
      name: "8 Hour Rental",
      price: "₹329",
      securtiy: "₹165",
      duration: 8,
    },
  ];
  const handleServiceSelect = (service) => {
    setSelectedService(service);
    fetch({ type: "UPDATE_STEP1", payload: service });
    message.success("Service Selected");
  };
  useEffect(() => {
    // Create a flag to track whether the effect has already run
    let isMounted = true;

    // Extract the token from the URL
    const token = new URLSearchParams(location.search).get("token");
    localStorage.setItem("token", token);
    if (isMounted && token) {
      // Decode the JWT token to access user details
      const decodedUser = jwtDecode(token);
      setUser(decodedUser);

      // Dispatch an action to update the user state
      dispatch({ type: "SET_USER", payload: decodedUser.user });
    }

    // Clean up the flag on component unmount
    return () => {
      isMounted = false;
    };
  }, [location.search, dispatch]);

  return (
    <>
      {!user ? (
        <>
          <div className="bg-slate-200 shadow-md rounded-lg p-8 max-w-sm w-full">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Error</h2>
            <p className="text-black mb-4">Please login to proceed further.</p>
            {/* Add a button or link to your login page here */}
            <Link to="/">
              <button className="bg-yellow-400 text-black py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 inline-block">
                Homepage
              </button>
            </Link>
          </div>
        </>
      ) : (
        <>
          <h2 className="text-3xl font-bold text-black mb-6 font-mono">
            Select a Service
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`border p-4 cursor-pointer transition duration-300 ${
                  selectedService === service
                    ? "bg-slate-500"
                    : "border-gray-300 hover:border-black hover:transform hover:scale-105"
                }`}
                onClick={() => handleServiceSelect(service)}
              >
                <div className="flex">
                  {/* Left-hand side: Image */}
                  <img
                    src={img}
                    alt={service.name}
                    className="w-24 h-24 rounded-lg mr-4" // Adjust width and height as needed
                  />
                  {/* Right-hand side: Service name and price */}
                  <div>
                    <h3 className="text-lg font-semibold font-mono">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 font-mono">
                      Price - {service.price}
                    </p>
                    <p className="text-gray-600 font-mono">
                      Security - {service.securtiy}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Service;

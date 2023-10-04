import React, { useState } from "react";
import img from "../assests/service.png";

const Service = () => {
  const [selectedService, setSelectedService] = useState(null);
  const services = [
    {
      id: 1,
      name: "4 Hour Rental",
      price: "₹169",
      securtiy: "₹85",
    },
    {
      id: 2,
      name: "6 Hour Rental",
      price: "₹249",
      securtiy: "₹125",
    },
    {
      id: 3,
      name: "8 Hour Rental",
      price: "₹329",
      securtiy: "₹165",
    },
  ];
  const handleServiceSelect = (service) => {
    setSelectedService(service);
    localStorage.setItem("selectedService", JSON.stringify(service));
    console.log(service);
  };
  return (
    <>
      <h2 className="text-3xl font-bold text-black mb-6">Select a Service</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map((service) => (
          <div
            key={service.id}
            className={`border p-4 cursor-pointer transition duration-300 ${
              selectedService === service
                ? "border-black transform scale-105"
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
                <h3 className="text-lg font-semibold">{service.name}</h3>
                <p className="text-gray-600">Price - {service.price}</p>
                <p className="text-gray-600">Security - {service.securtiy}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Service;

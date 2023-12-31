import React from "react";
import axios from "axios";
import { useBooking } from "../contexts/BookingDataContext";
import { message } from "antd";
// import CoupanCode from "../componetnts/CoupanCode";
import { useNavigate } from "react-router-dom";
import img from "../assests/service.png";

const Summary = () => {
  const { state } = useBooking();
  const navigate = useNavigate();
  const priceString = state.step1Data.securtiy;
  const numericValue = Number(priceString.replace(/[^0-9]/g, ""));
  function formatDate(date) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString(undefined, options);
  }
  const sentEmail = async () => {
    const config = {
      SecureToken: "75ad2317-2c13-4dc2-9966-67851d975a53",
      To: state.step3Data.email,
      From: "contact@glideride.online",
      Subject: "Congratulations on Booking Your ride",
      Body: `
      <p>Dear ${state.step3Data.name},</p>
      <p>Thank you for booking your ride with Glideride Online!</p>
      <p>Your Booking Ride Details:</p>
      <ul>
        <li>Date: ${state.step2Data.date}</li>
        <li>Time Slot: ${state.step2Data.timeSlot.start} to ${state.step2Data.timeSlot.end}</li>
        <li>Service Price: ${state.step1Data.price} (to be paid at the time of pickup)</li>
        <li>Security Deposit: ${state.step1Data.securtiy}(already paid)</li>
      </ul>
      <p>We hope you have a fantastic experience with us. Feel free to contact us if you have any questions or need assistance.</p>
      <p>Safe travels!</p>
      <p>Contact: 7310691665 (Call Us for any query)
    `,
    };
    if (window.Email) {
      const respone = await window.Email.send(config);
      console.log(respone);
    }
  };
  const sentEmailToAdmin = async () => {
    const config = {
      SecureToken: "75ad2317-2c13-4dc2-9966-67851d975a53",
      To: "jainakshat423@gmail.com",
      From: "contact@glideride.online",
      Subject: "Congratulations! You Got A Ride!",
      Body: `
      <p>Dear Administrator,</p>
      <p>You Have you got ride to give!</p>
      <p>Booking Ride Details:</p>
      <ul>
        <li>Date: ${state.step2Data.date}</li>
        <li>Time Slot: ${state.step2Data.timeSlot.start} to ${state.step2Data.timeSlot.end}</li>
        <li>Service Price: ${state.step1Data.price} (to be paid at the time of pickup)</li>
        <li>Security Deposit: ${state.step1Data.securtiy}(already paid)</li>
      </ul>
      <p> Customer Details</p>
      <ul>
      <li>Customer Name : ${state.step3Data.name}</li>
      <li> Customer Whatsapp : ${state.step3Data.phoneNumber}</li>
      <li> Customer College : ${state.step3Data.collegeName}</li>
      <li> Customer College Year : ${state.step3Data.collegeYear}</li>
      </ul>
      <p>We hope you have a fantastic experience with us. Feel free to contact us if you have any questions or need assistance.</p>
      <p>Safe travels!</p>
      <p>Contact: 7310691665 (Call Us for any query)
    `,
    };
    if (window.Email) {
      const respone = await window.Email.send(config);
      console.log(respone);
    }
  };
  const handleReload = () => {
    window.location.reload();
  };
  const initPayment = (data) => {
    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID,
      amount: data.amount,
      currency: data.currency,
      name: "GlideRide",
      description: "Most Affordable Rental Service",
      image: img,
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyUrl = `${process.env.REACT_APP_SECRETROUTE}/api/checkout/verify`;
          const { data } = await axios.post(verifyUrl, response);

          if (data.success) {
            sentEmail();
            sentEmailToAdmin();
            navigate("/thankyou");
          } else {
            console.log("something went wrong");
          }
        } catch (error) {
          console.log(error);
        }
      },
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
        name: state.step3Data.name, //your customer's name
        email: state.step3Data.email,
        contact: state.step3Data.phoneNumber, //Provide the customer's phone number for better conversion rates
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };
  const handlePayment = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SECRETROUTE}/api/checkout/orders`,
        { amount: numericValue }
      );
      initPayment(response.data.order);
    } catch (error) {
      console.log(error);
    }
  };

  // const handleTestPayment = async () => {
  //   sentEmail();
  //   sentEmailToAdmin();
  //   navigate("/thankyou");
  // };

  return (
    <>
      {!state.step3Data ? (
        <>
          {message.error("PLease save your details In Previous Step")}
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md font-semibold transition duration-300"
            onClick={handleReload}
          >
            Reload
          </button>
        </>
      ) : (
        <>
          {message.info("Please Check All Your Details before Payment")}
          <div className="bg-gray-100 font-bold p-4 md:p-8 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-4">
            <h2 className="text-3xl font-semibold mb-4 font-mono">Summary</h2>
            <div className="mb-4">
              <h3 className="text-lg font-mono text-blue-600">
                Service Selected:
              </h3>
              <p className="text-gray-700 font-mono">{state.step1Data.name}</p>
            </div>
            <div>
              <h3 className="text-lg  font-mono text-blue-600">Date:</h3>
              <p className="text-gray-700 font-mono">
                {formatDate(state.step2Data.date)}
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-mono text-blue-600">Time Slot:</h3>
              <p className="text-gray-700 font-mono">
                {state.step2Data.timeSlot.start} to{" "}
                {state.step2Data.timeSlot.end}
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-mono text-blue-600">
                Personal Details:
              </h3>
              <p className="text-gray-700 font-mono">
                Name: {state.step3Data.name}
              </p>
              <p className="text-gray-700 font-mono">
                Email: {state.step3Data.email}
              </p>
              <p className="text-gray-700 font-mono">
                Phone Number: {state.step3Data.phoneNumber}
              </p>
              <p className="text-gray-700 font-mono">
                Gender: {state.step3Data.gender}
              </p>
              <p className="text-gray-700 font-mono">
                Age: {state.step3Data.age}
              </p>
              <p className="text-gray-700 font-mono">
                College Name: {state.step3Data.collegeName}
              </p>
              <p className="text-gray-700 font-mono">
                College Year: {state.step3Data.collegeYear}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-mono text-blue-600">
                Amount to Be Paid
              </h3>
              <p className="text-gray-700 pt-2 font-mono">
                Price - {state.step1Data.price}
              </p>
              <p className="text-gray-700 pt-2 font-mono">
                To be Paid Now(security) - {state.step1Data.securtiy}
              </p>
            </div>
            {/* <div>
              <h3 className="text-lg font-medium">Coupan Code</h3>
              <CoupanCode />
            </div> */}
            <div className="mt-6 grid gap-1">
              <button
                className="bg-blue-500 font-mono hover:bg-blue-600 text-white px-6 py-2 rounded-md font-semibold transition duration-300"
                onClick={handlePayment}
              >
                Pay Now {state.step1Data.securtiy}
              </button>
              <button
                onClick={handleReload}
                className="bg-blue-500 font-mono hover:bg-blue-600 text-white px-6 py-2 rounded-md font-semibold transition duration-300"
              >
                Fill Details Again
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Summary;

import React from "react";
import Booking from "./pages/Booking";
import BookingForm from "./pages/BookingForm";
import Navbar from "./componetnts/Navbar";
import ThankYou from "./pages/ThankYou";
import { UserProvider } from "./contexts/UserContext";
import { BookingProvider } from "./contexts/BookingDataContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <BookingProvider>
          <UserProvider>
            <Routes>
              <Route path="/" element={<Booking />} />
              <Route
                path="/book-ride"
                element={
                  <BookingForm />
                }
              />
              <Route path="/thankyou" element={<ThankYou />} />
            </Routes>
          </UserProvider>
        </BookingProvider>
      </BrowserRouter>
    </>
  );
};

export default App;

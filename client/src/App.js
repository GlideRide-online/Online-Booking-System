import React from 'react'
import Booking from './pages/Booking'
import BookingForm from './pages/BookingForm';
import Navbar from './componetnts/Navbar';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Booking />} />
          <Route path="/book-ride" element={<BookingForm />} />

        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
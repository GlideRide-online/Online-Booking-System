import React, { useState, useEffect } from "react";
import { useBooking } from "../contexts/BookingDataContext";
import DateSelector from "../componetnts/DateSelector";
import { message } from "antd";

const TimeSlot = () => {
  const { state } = useBooking();
  const { fetch } = useBooking();
  const [selectedDate, setSelectedDate] = useState();
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const duration = state.step1Data.duration;

  const handleDateChange = (date) => {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    if (date < currentDate) {
      message.error("Please select a date after the current date");
    } else {
      setSelectedDate(date);
      const timeSlots = calculateTimeSlots(duration, date);
      setAvailableTimeSlots(timeSlots);
    }
  };

  const handleTimeSlotSelect = (slot) => {
    setSelectedTimeSlot(slot);
    message.success("Time Selected");
  };

  const calculateTimeSlots = (duration, date) => {
    const timeSlots = [];
    const startTime = new Date(date);
    startTime.setHours(7, 0, 0); // Set start time to 7:00 AM
    const endTime = new Date(date);
    endTime.setHours(23, 30, 0); // Set end time to 11:30 PM
    const interval = duration * 60 * 60 * 1000; // Convert duration to milliseconds

    while (startTime.getTime() + interval <= endTime.getTime()) {
      const slotStart = new Date(startTime);
      const slotEnd = new Date(startTime.getTime() + interval);
      timeSlots.push({
        start: slotStart.toLocaleTimeString([], {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }),
        end: slotEnd.toLocaleTimeString([], {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }),
      });
      startTime.setTime(startTime.getTime() + 60 * 60 * 1000); // Move forward by 30 minutes
    }

    return timeSlots;
  };
  useEffect(() => {
    if (selectedDate && selectedTimeSlot) {
      const bookingData = {
        date: selectedDate,
        timeSlot: selectedTimeSlot,
      };
      fetch({ type: "UPDATE_STEP2", payload: bookingData });
    } else if (selectedDate && !state.step1Data.name) {
      message.error("Please Select Service");
    }
  }, [selectedDate, selectedTimeSlot, fetch, state.step1Data.name]);

  return (
    <>
      <div className="bg-gray-100 p-8 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Select Your Booking Slot</h2>

        {/* Service selection component */}
        <DateSelector
          selectedDate={selectedDate}
          handleDateChange={handleDateChange}
        />

        {/* Render available time slots in a grid */}
        <div className="grid grid-cols-3 gap-3 mt-4 hover:cursor-pointer">
          {availableTimeSlots.map((slot, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition-transform duration-300 cursor-pointer ${
                selectedTimeSlot === slot ? "bg-blue-300" : "bg-white"
              }`}
              onClick={() => handleTimeSlotSelect(slot)}
            >
              <span className="text-lg">
                {slot.start} - {slot.end}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TimeSlot;

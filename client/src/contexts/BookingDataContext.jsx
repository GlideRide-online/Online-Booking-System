import { createContext, useContext, useReducer } from "react";

const BookingContext = createContext();

const initialState = {
  step1Data: {}, // Data for step 1
  step2Data: {}, // Data for step 2
  // Add more properties for each step as needed
};

function bookingReducer(state, action) {
  switch (action.type) {
    case "UPDATE_STEP1":
      return { ...state, step1Data: action.payload };
    case "UPDATE_STEP2":
      return { ...state, step2Data: action.payload };
    case "UPDATE_STEP3":
      return { ...state, step3Data: action.payload };
    default:
      return state;
  }
}

export function useBooking() {
  return useContext(BookingContext);
}

export function BookingProvider({ children }) {
  const [state, fetch] = useReducer(bookingReducer, initialState);

  return (
    <BookingContext.Provider value={{ state, fetch }}>
      {children}
    </BookingContext.Provider>
  );
}

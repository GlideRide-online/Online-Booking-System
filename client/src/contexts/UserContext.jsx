import { createContext, useContext, useReducer } from "react";

const UserContext = createContext();

// Define user-related actions
const setUser = (state, user) => {
  return { ...state, user };
};

const initialState = { user: null };

function userReducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      return setUser(state, action.payload);
    default:
      return state;
  }
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}

export function UserProvider({ children }) {
  const [userstate, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ userstate, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

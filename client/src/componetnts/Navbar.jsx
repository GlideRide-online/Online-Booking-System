import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [token, setToken] = useState("");
  const navStyle = {
    backgroundColor: "black",
    zIndex: 9999,
  };

  const buttonStyle = {
    backgroundColor: "black", // Button background color
    color: "#FFFFFF", // Button font color
    padding: "8px 16px",
    margin: "0 10px",
    transition: "background-color 0.3s",
    fontFamily: "Pacifico, cursive", // Font family (use your chosen font)
  };

  const buttonHoverStyle = {
    // backgroundColor: '#00BFFF',
  };
  useEffect(() => {
    let isMounted = true;
    const token = new URLSearchParams(location.search).get("token");
    if (token && isMounted) {
      setToken(token);
    }
    return () => {
      isMounted = false;
    };
  }, [setToken, location.search]);
  return (
    <nav className="py-4" style={navStyle}>
      <>
        {token ? (
          <>
            <div className="flex justify-center items-center">
              <h2 className="text-white font-mono ">
                Please Don't Refresh the Page!!
              </h2>
            </div>
          </>
        ) : (
          <>
            <div className="text-center">
              <a href="https://glideride.online/">
                <button
                  className="hover:bg-blue-500"
                  style={{ ...buttonStyle }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor =
                      buttonHoverStyle.backgroundColor;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor =
                      buttonStyle.backgroundColor;
                  }}
                >
                  Explore More
                </button>
              </a>
              <a href="https://www.instagram.com/glideride.online/">
                <button
                  className="hover:bg-blue-500"
                  style={{ ...buttonStyle }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor =
                      buttonHoverStyle.backgroundColor;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor =
                      buttonStyle.backgroundColor;
                  }}
                >
                  Follow Us
                </button>
              </a>
            </div>
          </>
        )}
      </>
    </nav>
  );
};

export default Navbar;

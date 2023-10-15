import React, { useState, useEffect } from "react";
import Loading from "../componetnts/Loading";
import bgimg2 from "../assests/2.jpg";
const Booking = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const containerStyle = {
    backgroundColor: "#0A192F", // Background color
  };

  const textStyle = {
    color: "black", // Text color
    fontFamily: "Pacifico, cursive", // Font family (use your chosen font)
  };

  let buttonStyle = {
    backgroundColor: "black", // Accent color for buttons
    color: "white", // Text color for buttons
    // Add more button styling properties as needed
    border: "none",
    padding: "12px 24px",
    borderRadius: "20px",
    transition: "background-color 0.3s, transform 0.3s",
  };
  // CSS for the hover effect
  const buttonHoverStyle = {
    backgroundColor: "#1A1110", // New background color on hover
    transform: "scale(1.05)", // Enlarge the button on hover
  };

  useEffect(() => {
    // Simulate a delay to mimic loading (you can replace this with actual data loading)
    const image = new Image();
    image.src = bgimg2;
    image.onload = () => {
      setImageLoaded(true);
    };
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the delay as needed
    return () => clearTimeout(loadingTimeout);
  }, []);

  const googleLogin = async () => {
    window.open("http://localhost:4000/auth/google", "_self");
  };
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div
            className={`min-h-screen bg-cover bg-center bg-no-repeat${
              imageLoaded ? "" : "hidden"
            }`}
            style={{ backgroundImage: `url(${bgimg2})`, ...containerStyle }}
          >
            <div className=" bg-opacity-10 min-h-screen flex items-center justify-center">
              <div className="text-center" style={textStyle}>
                <h1 className="text-4xl font-bold mb-4">
                  Book your ride within 5 mins
                </h1>
                <p className="text-lg">
                  Explore our affordable bike rental service
                </p>

                <button
                  onClick={googleLogin}
                  className="py-2 px-4 rounded-full mt-4"
                  style={{
                    ...buttonStyle,
                    ...(isHovered ? buttonHoverStyle : {}),
                  }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <i className="fab fa-google mr-2"></i> Proceed with Google
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Booking;

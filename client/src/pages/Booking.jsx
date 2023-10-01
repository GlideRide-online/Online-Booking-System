import React,{useState} from "react";

// import bgimg from "../assests/bike_background.jpg";
import bgimg2 from "../assests/2.jpg";
const Booking = () => {
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
    border: 'none',
    padding: '12px 24px',
    borderRadius: '20px',
    transition: 'background-color 0.3s, transform 0.3s',
  };
   // CSS for the hover effect
   const buttonHoverStyle = {
    backgroundColor: '#1A1110', // New background color on hover
    transform: 'scale(1.05)', // Enlarge the button on hover
  };
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
    
     <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgimg2})`, ...containerStyle }}
    >
       
      <div className=" bg-opacity-10 min-h-screen flex items-center justify-center">
        <div className="text-center" style={textStyle}>
          <h1 className="text-4xl font-bold mb-4">
            Book your ride within 5 mins
          </h1>
          <p className="text-lg">Explore our affordable bike rental service</p>
          <button
            className="py-2 px-4 rounded-full mt-4"
            style={{ ...buttonStyle, ...(isHovered ? buttonHoverStyle : {}) }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
    </>
   
  );
};

export default Booking;

import React from 'react'

const Navbar = () => {
    const navStyle = {
        backgroundColor: 'black', 
        zIndex:9999,
      };
    
      const buttonStyle = {
        backgroundColor: 'black', // Button background color
        color: '#FFFFFF', // Button font color
        padding: '8px 16px',
        margin: '0 10px',
        transition: 'background-color 0.3s',
        fontFamily: 'Pacifico, cursive', // Font family (use your chosen font)
      };
    
      const buttonHoverStyle = {
        // backgroundColor: '#00BFFF',
      };
  return (
    <nav className="py-4" style={navStyle}>
    <div className="text-center">
      <button
        className="hover:bg-blue-500"
        style={{ ...buttonStyle }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = buttonStyle.backgroundColor;
        }}
      >
        Explore More
      </button>
      <button
        className="hover:bg-blue-500"
        style={{ ...buttonStyle }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = buttonStyle.backgroundColor;
        }}
      >
        Follow Us
      </button>
      
    </div>
  </nav>
  )
}

export default Navbar
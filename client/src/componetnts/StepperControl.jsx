import React from "react";

const StepperControl = ({ handleClick, steps, currentStep }) => {
  const textStyle = {
    fontFamily: "Pacifico, cursive", // Font family (use your chosen font)
  };
  return (
    <>
      <div className="container flex justify-around mt-4 mb-8">
        {/* back button */}
        <button
          onClick={() => handleClick()}
          className={`bg-white text-slate-400 uppercase py-2 px-4
rounded-xl  cursor-pointer border-2 border-slate-
hover:bg-black hover:text-white transition duration-200
ease-in-out ${currentStep === 1 ? "opcity-50 cursor-not-allowed" : ""}`}
          style={textStyle}
        >
          Back
        </button>

        {/* next button */}
        <button
          onClick={() => handleClick("next")}
          className="bg-yellow-400 Itext-white uppercase py-2 px-4
rounded-xl font-semibold cursor-pointer hover:bg-black
hover:text-white transition duration-200 ease-in-out"
          style={textStyle}
        >
          {currentStep === steps.length - 1 ? "Confirm" : "Next"}
        </button>
      </div>
    </>
  );
};

export default StepperControl;

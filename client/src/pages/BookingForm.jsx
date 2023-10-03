import React, { useState } from "react";
import { StepperContext } from "../contexts/StepperContext";
import Stepper from "../componetnts/Stepper";
import StepperControl from "../componetnts/StepperControl";

import Service from "../Steps/Service";
import TimeSlot from "../Steps/TimeSlot";
import PersonalDetails from "../Steps/PersonalDetails";
import Summary from "../Steps/Summary";
const BookingForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState("");
  const [finalData, setFinalData] = useState([]);
  const steps = ["Service", "Date & Time Slot", " Details", "Summary"];
  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Service />;
      case 2:
        return <TimeSlot />;
      case 3:
        return <PersonalDetails />;
      case 4:
        return <Summary />;
      default:
    }
  };
  const handleClick = (direction) => {
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;
    //check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };
  return (
    <>
      <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
        {/* Stepper */}
        <div className="container horizontal mt-5">
          <Stepper steps={steps} currentStep={currentStep} />
        </div>
        {/* Display Components */}
        <div className="my-10 p-10">
          <StepperContext.Provider
            value={{ userData, setUserData, finalData, setFinalData }}
          >
            {displayStep(currentStep)}
          </StepperContext.Provider>
        </div>
        {/* Stepper Controls */}
        {currentStep !== steps.length && (
          <StepperControl
            handleClick={handleClick}
            steps={steps}
            currentStep={currentStep}
          />
        )}
      </div>
    </>
  );
};

export default BookingForm;

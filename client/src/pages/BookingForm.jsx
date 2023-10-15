import React, { useEffect, useState } from "react";
import Stepper from "../componetnts/Stepper";
import StepperControl from "../componetnts/StepperControl";
import Loading from "../componetnts/Loading";
import Service from "../Steps/Service";
import TimeSlot from "../Steps/TimeSlot";
import { useLocation } from "react-router-dom";

import PersonalDetails from "../Steps/PersonalDetails";
import Summary from "../Steps/Summary";
const BookingForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const steps = ["Service", "Date & Time Slot", " Details", "Summary"];
  // const token = localStorage.getItem("token");
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
  const token = new URLSearchParams(location.search).get("token");
  const handleClick = (direction) => {
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;
    //check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust the delay as needed

    // Clean up the timeout on unmount
    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
            {/* Stepper */}
            <div className="container horizontal mt-5">
              <Stepper steps={steps} currentStep={currentStep} />
            </div>
            {/* Display Components */}
            <div className="my-10 p-10">{displayStep(currentStep)}</div>
            {/* Stepper Controls */}
            {token ? (
              <>
                {currentStep !== steps.length && (
                  <StepperControl
                    handleClick={handleClick}
                    steps={steps}
                    currentStep={currentStep}
                  />
                )}
              </>
            ) : (
              <>{console.log("You Are Not login")}</>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default BookingForm;

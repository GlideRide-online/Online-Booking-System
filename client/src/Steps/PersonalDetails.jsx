import React, { useState } from "react";
import { useUser } from "../contexts/UserContext";
import { useBooking } from "../contexts/BookingDataContext";
import { message } from "antd";

const PersonalDetails = () => {
  const { userstate } = useUser();
  const { fetch, state } = useBooking();
  const [name, setName] = useState(userstate.user.firstName);
  const [email, setEmail] = useState(userstate.user.email);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [collegeYear, setCollegeYear] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const fullname = userstate.user.firstName + " " + userstate.user.lastName;

  const handleSave = (e) => {
    e.preventDefault();
    if (
      name &&
      email &&
      phoneNumber &&
      collegeName &&
      collegeYear &&
      gender &&
      age
    ) {
      const userPersonalData = {
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        collegeName: collegeName,
        collegeYear: collegeYear,
        gender: gender,
        age: age,
      };
      fetch({ type: "UPDATE_STEP3", payload: userPersonalData });
    }
    message.success("Saved Succesfully");
  };

  return (
    <>
      {state.step2Data.timeSlot ? (
        <>
          <div className="bg-gray-100 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Personal Details</h2>
            <form onSubmit={handleSave} autoComplete="off">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full mt-1 p-2 rounded-md border border-gray-300"
                  placeholder="John Doe"
                  value={fullname}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full mt-1 p-2 rounded-md border border-gray-300"
                  placeholder="john@example.com"
                  value={userstate.user.email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="off"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="gender"
                  className="block text-lg font-medium text-gray-700"
                >
                  Gender
                </label>
                <select
                  id="gender"
                  className="w-full mt-1 p-2 rounded-md border border-gray-300"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="age"
                  className="block text-lg font-medium text-gray-700"
                >
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  className="w-full mt-1 p-2 rounded-md border border-gray-300"
                  placeholder="Enter Age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phoneNumber"
                  className="block text-lg font-medium text-gray-700"
                >
                  Whatsapp Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  className="w-full mt-1 p-2 rounded-md border border-gray-300"
                  placeholder="123-456-7890"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phoneNumber"
                  className="block text-lg font-medium text-gray-700"
                >
                  College Name
                </label>
                <input
                  type="text"
                  id="college"
                  className="w-full mt-1 p-2 rounded-md border border-gray-300"
                  placeholder="123-456-7890"
                  value={collegeName}
                  onChange={(e) => setCollegeName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phoneNumber"
                  className="block text-lg font-medium text-gray-700"
                >
                  College Year
                </label>
                <input
                  type="number"
                  id="collegeyear"
                  className="w-full mt-1 p-2 rounded-md border border-gray-300"
                  placeholder="123-456-7890"
                  value={collegeYear}
                  onChange={(e) => setCollegeYear(e.target.value)}
                  required
                />
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </>
      ) : (
        <>{message.error("Please Time Slot Before Moving Forward")}</>
      )}
    </>
  );
};

export default PersonalDetails;

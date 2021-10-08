import React from "react";
import PhoneCard from "./Cards/PhoneCard";
import LocationCard from "./Cards/LocationCard";
import ClockCard from "./Cards/ClockCard";

const Contact = () => {
  return (
    <div className="flex flex-col bg-white w-80 rounded-lg md:min-w-96 md:min-h-96 md:w-96 shadow-md">
      <div className="flex justify-center items-center bg-night_blue rounded-t-lg p-2">
        <div className="rounded-full bg-white w-12 h-12 flex justify-center items-center">
          <img
            src="/svgs/contact.svg"
            alt="contact svg"
            width="30 px"
            height="38 px"
          />
        </div>
      </div>
      <div className="p-4 flex flex-col justify-around">
        <PhoneCard />
        <div className="mt-4">
          <LocationCard />
        </div>
        <div className="mt-4">
          <ClockCard />
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import PhoneCard from "./Cards/PhoneCard";
import LocationCard from "./Cards/LocationCard";
import ClockCard from "./Cards/ClockCard";

const Contact = () => {
  return (
    <div className="flex flex-col bg-white h-80 w-80 rounded-lg">
      <div className="flex justify-center items-center bg-new_yellow h-16 rounded-t-lg">
        <div className="rounded-full bg-white w-12 h-12 flex justify-center items-center">
          <img
            src="/svgs/contact.svg"
            alt="contact svg"
            width="30 px"
            height="38 px"
          />
        </div>
      </div>
      <div className="h-full px-4 py-2 flex flex-col justify-around">
        <PhoneCard />
        <LocationCard />
        <ClockCard />
      </div>
    </div>
  );
};

export default Contact;

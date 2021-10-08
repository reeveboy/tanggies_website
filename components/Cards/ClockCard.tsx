import React from "react";

const Card = () => {
  return (
    <div className="p-2 border shadow-md rounded-lg flex">
      <div className="w-1/5 flex items-center justify-center">
        <div className="rounded-full bg-night_blue h-9 w-9 md:h-12 md:w-12 flex justify-center items-center text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-clock h-5 w-5 md:h-7 md:w-7"
            viewBox="0 0 16 16">
            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col px-1 justify-center w-4/5">
        <h1
          className="uppercase text-night_blue  text-lg md:text-xl md:leading-5"
          style={{ fontWeight: 900 }}>
          Hours Of Operation
        </h1>
        <span className=" font-light text-tiny leading-tight md:text-sm md:mt-1">
          10.30AM – 11PM
        </span>
      </div>
    </div>
  );
};

export default Card;

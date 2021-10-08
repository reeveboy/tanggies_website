import React from "react";

const Card = () => {
  return (
    <div className="p-2 border shadow-md rounded-lg flex">
      <div className="w-1/5 flex items-center justify-center">
        <div className="rounded-full bg-night_blue h-9 w-9 md:h-12 md:w-12 flex justify-center items-center text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-geo-alt h-5 w-5 md:h-7 md:w-7"
            viewBox="0 0 16 16">
            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col px-1 justify-center w-4/5">
        <h1
          className="uppercase text-night_blue text-lg md:text-2xl"
          style={{ fontWeight: 900 }}>
          Address
        </h1>
        <span className="font-light text-tiny leading-tight md:text-sm">
          Opposite Novotel Goa Dona Sylvia Resort Hotel, Cavelossim, Goa -
          403731, India
        </span>
      </div>
    </div>
  );
};

export default Card;

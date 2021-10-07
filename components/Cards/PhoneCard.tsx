import React from "react";

const Card = () => {
  return (
    <div className="p-2 border shadow-md rounded-lg flex">
      <div className="w-1/5 flex items-center justify-center">
        <div className="rounded-full bg-cyan h-9 w-9 md:h-12 md:w-12 flex justify-center items-center text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-telephone h-5 w-5 md:h-7 md:w-7"
            viewBox="0 0 16 16">
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col px-1 justify-center w-4/5">
        <h1
          className="uppercase text-brown text-lg md:text-2xl"
          style={{ fontWeight: 900 }}>
          Quick Contact
        </h1>
        <span className=" font-light text-tiny leading-tight md:text-sm">
          +918806296994 – +919822384178 <br />
          <a href="mailto:info@tanggiesgoa.com">info@tanggiesgoa.com</a>
        </span>
      </div>
    </div>
  );
};

export default Card;

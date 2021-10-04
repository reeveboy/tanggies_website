import React from "react";

const ContactForm = () => {
  return (
    <div className="flex flex-col bg-white w-80 rounded-lg md:min-w-96 md:w-96 md:min-h-96">
      <div className="flex justify-center items-center bg-new_yellow rounded-t-lg p-2">
        <div className="rounded-full bg-white w-12 h-12 flex justify-center items-center">
          <img
            src="/svgs/paper_plane.svg"
            alt="contact svg"
            width="30 px"
            height="38 px"
          />
        </div>
      </div>
      <div className="px-4 py-3 flex flex-col items-center overflow-y-auto overflow-x-hidden">
        <span className="text-lighter_black font-extrabold text-sm md:text-lg">
          SOMETHING ON YOUR MIND?
        </span>
        <span className="text-cyan text-tiny md:text-sm">
          Please fill this form in a decent manner
        </span>
        <form className="flex flex-col justify-between w-full m-2">
          <div className="flex flex-col text-tiny md:text-base">
            <span className="text-cyan font-semibold">Name</span>
            <input className="border rounded-sm md:px-2 md:py-1" type="text" />
          </div>
          <div className="flex flex-col text-tiny md:text-base mt-1">
            <span className="text-cyan font-semibold">Email</span>
            <input className="border rounded-sm md:px-2 md:py-1" type="email" />
          </div>
          <div className="flex flex-col text-tiny md:text-base mt-1">
            <span className="text-cyan font-semibold">Message</span>
            <textarea
              className="border rounded-sm md:text-sm md:px-2 md:py1"
              rows={2}
              cols={60}
              name="message"></textarea>
          </div>
          <div className="flex justify-center items-center mt-3">
            <button className="bg-nice_pink px-2 py-1 text-tiny text-white rounded-sm font-semibold md:rounded-md md:py-2 md:px-3 md:text-xs">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

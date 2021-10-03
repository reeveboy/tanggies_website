import React from "react";

const ContactForm = () => {
  return (
    <div className="flex flex-col bg-white h-80 w-80 rounded-lg">
      <div className="flex justify-center items-center bg-new_yellow h-16 rounded-t-lg">
        <div className="rounded-full bg-white w-12 h-12 flex justify-center items-center">
          <img
            src="/svgs/paper_plane.svg"
            alt="contact svg"
            width="30 px"
            height="38 px"
          />
        </div>
      </div>
      <div className="h-full px-4 py-2 flex flex-col items-center">
        <span className="text-lighter_black font-extrabold text-sm">
          SOMETHING ON YOUR MIND?
        </span>
        <span className="text-cyan text-tiny">
          Please fill this form in a decent manner
        </span>
        <form className="flex flex-col justify-between h-full w-full m-4">
          <div className="flex flex-col">
            <span className="text-cyan text-tiny font-semibold">Name</span>
            <input className="border h-5 text-tiny rounded-sm" type="text" />
          </div>
          <div className="flex flex-col">
            <span className="text-cyan text-tiny font-semibold">Email</span>
            <input className="border h-5 text-tiny rounded-sm" type="email" />
          </div>
          <div className="flex flex-col">
            <span className="text-cyan text-tiny font-semibold">Message</span>
            <textarea
              className="border text-tiny rounded-sm"
              rows={4}
              cols={60}
              name="message"></textarea>
          </div>
          <div className="flex justify-center items-center mt-3">
            <button className="bg-nice_pink px-2 py-1 text-tiny text-white rounded-sm font-semibold">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

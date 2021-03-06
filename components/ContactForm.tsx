import React, { useState } from "react";

const ContactForm = () => {
  // States for contact form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  //   Form validation state
  const [errors, setErrors] = useState({});

  const [showSuccess, setSuccess] = useState(false);
  const [showFail, setFail] = useState(false);

  const [isSubmitting, setSubmitting] = useState(false);

  // Validation check method
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (name.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    return isValid;
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  //   Handling form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    setFail(false);
    setSuccess(false);

    setSubmitting(true);

    let isValidForm = handleValidation();

    if (isValidForm) {
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          name: name,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        setSubmitting(false);
        setFail(true);
        return;
      }

      if (res.status === 200) {
        setName("");
        setEmail("");
        setMessage("");
        setSuccess(true);
      }
    }
    setSubmitting(false);
  };

  return (
    <div className="flex flex-col bg-white w-80 rounded-lg md:min-w-96 md:w-96 md:min-h-96 shadow-md">
      <div className="flex justify-center items-center bg-night_blue rounded-t-lg p-2">
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
        <span className="text-night_blue text-tiny md:text-sm">
          Please fill this form in a decent manner
        </span>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-between w-full m-2">
          <div className="flex flex-col text-tiny md:text-base">
            <span className="text-brownish_black font-semibold">Name</span>
            <input
              onChange={handleNameChange}
              className="border rounded-sm md:px-2 md:py-1"
              type="text"
              value={name}
            />
          </div>
          <div className="flex flex-col text-tiny md:text-base mt-1">
            <span className="text-brownish_black font-semibold">Email</span>
            <input
              onChange={handleEmailChange}
              className="border rounded-sm md:px-2 md:py-1"
              type="email"
              value={email}
            />
          </div>
          <div className="flex flex-col text-tiny md:text-base mt-1">
            <span className="text-brownish_black font-semibold">Message</span>
            <textarea
              onChange={handleMessageChange}
              className="border rounded-sm md:text-sm md:px-2 md:py1"
              rows={2}
              cols={60}
              name="message"
              value={message}
            />
          </div>
          <div className="flex justify-center items-center mt-3">
            <button
              disabled={isSubmitting}
              onClick={handleSubmit}
              className="bg-night_blue hover:bg-dark_blue px-2 py-1 text-tiny text-white rounded-sm font-semibold md:rounded-md md:py-2 md:px-3 md:text-xs">
              SUBMIT
            </button>
          </div>
          <div className="text-xs text-center">
            <span hidden={!showSuccess} className="text-green-400">
              Your message was sent successfully
            </span>
            <span hidden={!showFail} className="text-red-400">
              Your message did not go through
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

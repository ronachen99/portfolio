import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { validateEmail } from "../utils/helpers";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else setMessage(inputValue);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("._. i think... something is wrong with your email");
      return;
    } else if (!name) {
      setErrorMessage("._. who am i replying back to?");
      return;
    } else if (!message) {
      setErrorMessage("._. i can't reply to an empty message");
      return;
    }

    emailjs
      .sendForm(
        "service_azh9bqr",
        "template_7ge2zuc",
        form.current,
        "KickBnWaloU9Ti4kT"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert(`Thank you ${name}! I will get back to your email ASAP!`);
          form.current.reset();
          setName("");
          setEmail("");
          setMessage("");
          setErrorMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="flex flex-col m-8 space-y-8 items-center">
      <h2 className="flex m-8 rounded-lg justify-center text-6xl px-4 py-2 text-indigo-600 bg-zinc-800  bg-opacity-75">
        contact_me
      </h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-zinc-200"
            >
              first_and_last_name
            </label>
            <div className="mt-2">
              <input
                value={name}
                name="name"
                onChange={handleInputChange}
                type="text"
                placeholder="Banana Cat"
                className="block w-full rounded-md border-0 py-1.5 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-zinc-200"
            >
              valid_email
            </label>
            <div className="mt-2">
              <input
                value={email}
                name="email"
                onChange={handleInputChange}
                type="email"
                placeholder="bananacat@gmail.com"
                className="block w-full rounded-md border-0 py-1.5 text-zinc-900
              shadow-sm ring-1 ring-inset ring-zinc-300
              placeholder:text-zinc-400 focus:ring-2 focus:ring-inset
              focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-zinc-200"
            >
              your_message
            </label>
            <div className="mt-2">
              <textarea
                value={message}
                name="message"
                onChange={handleInputChange}
                rows={4}
                placeholder="I would like to know..."
                className="block w-full rounded-md border-0 py-1.5 text-zinc-900
              shadow-sm ring-1 ring-inset ring-zinc-300
              placeholder:text-zinc-400 focus:ring-2 focus:ring-inset
              focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <button
            type="submit"
            className=" bg-opacity-75 bg-zinc-800 text-indigo-600 rounded-lg px-4 py-2 hover:bg-indigo-500 hover:text-white"
          >
            send_email
          </button>
        </div>
      </form>
      {errorMessage && (
        <div>
          <p className="text-red-600">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;

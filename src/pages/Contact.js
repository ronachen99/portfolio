import React, { useState } from "react";

// Here we import a helper function that will check if the email is valid
import { validateEmail } from "../utils/helpers";

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, name, and password
    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else setMessage(inputValue);
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the name is empty. If so we set an error message to be displayed on the page.
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
    // We want to exit out of this code block if something is wrong so that the user can correct it

    alert(`Thank you ${name}! I will get back to your email ASAP!`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="flex flex-col m-8 space-y-8 items-center">
      <h2 className="flex m-8 rounded-lg justify-center text-6xl px-4 py-2 text-green-600 bg-gray-800">
        contact_me
      </h2>
      <form>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-200"
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
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-200"
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
                className="block w-full rounded-md border-0 py-1.5 text-gray-900
              shadow-sm ring-1 ring-inset ring-gray-300
              placeholder:text-gray-400 focus:ring-2 focus:ring-inset
              focus:ring-green-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-200"
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
                className="block w-full rounded-md border-0 py-1.5 text-gray-900
              shadow-sm ring-1 ring-inset ring-gray-300
              placeholder:text-gray-400 focus:ring-2 focus:ring-inset
              focus:ring-green-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <button
            type="button"
            className="bg-gray-800 text-green-600 rounded-lg px-4 py-2 hover:bg-green-500 hover:text-white"
            onClick={handleFormSubmit}
          >
            send_email
          </button>
        </div>
      </form>
      {errorMessage && (
        <div>
          <p className="text-green-600">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;

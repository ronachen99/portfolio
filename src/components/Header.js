// imports the React library allowing to use REACt components and functionalities
import React from "react";

// takes in two props that is being destructured
function Header({ currentPage, handlePageChange }) {
  return (
    // parent div that aligns the the two children div at the start and the end of the container
    // the first inner div is the title
    // the second inner div is the nav bar
    // based on the currentPage prop, sets the conditional class active
    // pass the current page as arg to the handlePageChange function

    <div className="flex flex-col sm:flex-row justify-between">
      <div className="flex m-8 rounded-lg lowercase justify-center text-5xl px-4 py-2 text-indigo-500 bg-gray-300">
        Rona's Portfolio
      </div>
      <div className="flex m-8">
        <ul className="flex space-x-4">
          <li>
            <a
              href="#about"
              onClick={() => handlePageChange("About")}
              className={`nav-link ${
                currentPage === "About"
                  ? "bg-indigo-500 text-white"
                  : "bg-gray-300 text-indigo-500"
              } rounded-lg px-4 py-2 hover:bg-indigo-400 hover:text-white`}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              onClick={() => handlePageChange("Portfolio")}
              className={`nav-link ${
                currentPage === "Portfolio"
                  ? "bg-indigo-500 text-white"
                  : "bg-gray-300 text-indigo-500"
              } rounded-lg px-4 py-2 hover:bg-indigo-400 hover:text-white`}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              className={`nav-link ${
                currentPage === "Contact"
                  ? "bg-indigo-500 text-white"
                  : "bg-gray-300 text-indigo-500"
              } rounded-lg px-4 py-2 hover:bg-indigo-400 hover:text-white`}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#resume"
              onClick={() => handlePageChange("Resume")}
              className={`nav-link ${
                currentPage === "Resume"
                  ? "bg-indigo-500 text-white"
                  : "bg-gray-300 text-indigo-500"
              } rounded-lg px-4 py-2 hover:bg-indigo-400 hover:text-white`}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;

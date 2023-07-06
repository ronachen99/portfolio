// imports the React library allowing to use REACt components and functionalities
import React from "react";

// takes in two props that is being destructured
function Header({ currentPage, handlePageChange }) {
  return (
    // parent div that aligns the the two children div at the start and the end of the container
    // the first child is the title
    // the second inner div is the nav bar
    // based on the currentPage prop, sets the conditional class active
    // pass the current page as arg to the handlePageChange function

    <div className="flex flex-col items-center sm:flex-row sm:justify-between bg-gray-900">
      <h1 className="flex m-8 rounded-lg lowercase justify-center text-6xl px-4 py-2 text-green-600 bg-gray-800">
        rona_s_portfolio
      </h1>
      <div className="flex m-8">
        <ul className="flex space-x-4 text-lg">
          <li>
            <a
              href="#about"
              onClick={() => handlePageChange("About")}
              className={`${
                currentPage === "About"
                  ? "bg-green-600 text-white"
                  : "bg-gray-800 text-green-600"
              } rounded-lg px-4 py-2 hover:bg-green-500 hover:text-white`}
            >
              aboutMe
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              onClick={() => handlePageChange("Portfolio")}
              className={`${
                currentPage === "Portfolio"
                  ? "bg-green-600 text-white"
                  : "bg-gray-800 text-green-600"
              } rounded-lg px-4 py-2 hover:bg-green-500 hover:text-white`}
            >
              portfolio
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              className={`${
                currentPage === "Contact"
                  ? "bg-green-600 text-white"
                  : "bg-gray-800 text-green-600"
              } rounded-lg px-4 py-2 hover:bg-green-500 hover:text-white`}
            >
              contact
            </a>
          </li>
          <li>
            <a
              href="#resume"
              onClick={() => handlePageChange("Resume")}
              className={`${
                currentPage === "Resume"
                  ? "bg-green-600 text-white"
                  : "bg-gray-800 text-green-600"
              } rounded-lg px-4 py-2 hover:bg-green-500 hover:text-white`}
            >
              resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;

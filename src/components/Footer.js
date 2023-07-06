import React from "react";
import {
  PiPhoneCallLight,
  PiPaperPlaneTiltLight,
  PiGithubLogoLight,
  PiLinkedinLogoLight,
  PiInstagramLogoLight,
  PiStackOverflowLogoLight,
} from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center space-y-8 justify-center">
      <div className="flex justify-between space-x-8 text-green-600 text-2xl">
        <a href="tel:6476295955">
          <PiPhoneCallLight className="cursor-pointer" />
        </a>
        <a href="mailto:rona.chen@hotmail.com">
          <PiPaperPlaneTiltLight className="cursor-pointer" />
        </a>
        <a
          href="https://github.com/ronachen99"
          target="_blank"
          rel="noreferrer"
        >
          <PiGithubLogoLight className="cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/ronachen99/"
          target="_blank"
          rel="noreferrer"
        >
          <PiLinkedinLogoLight className="cursor-pointer" />
        </a>
        <a
          href="https://www.instagram.com/rctuzi/"
          target="_blank"
          rel="noreferrer"
        >
          <PiInstagramLogoLight className="cursor-pointer" />
        </a>
        <a
          href="https://stackoverflow.com/users/21621172/rona-chen"
          target="_blank"
          rel="noreferrer"
        >
          <PiStackOverflowLogoLight className="cursor-pointer" />
        </a>
      </div>
      <div className="flex text-green-900">
        <p>last_updated_on: 07/06/2023 00:00:00 UTC</p>
      </div>
    </footer>
  );
};

export default Footer;

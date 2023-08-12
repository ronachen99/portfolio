import React from "react";
import { SiAdobeacrobatreader } from "react-icons/si";

export default function Resume() {
  return (
    <div className="flex flex-col m-8 space-y-8 items-center">
      <h2 className="flex m-8 rounded-lg justify-center text-6xl px-4 py-2 text-indigo-600 bg-zinc-800  bg-opacity-75">
        resume
      </h2>
      <p className="flex text-center text-indigo-600 text-4xl ">
        click on the icon to download my resume{" "}
        <a href="./resume.pdf" download className="flex items-center ml-2">
          <SiAdobeacrobatreader className="cursor-pointer" />
        </a>{" "}
      </p>
      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
        <div className="space-y-8 bg-zinc-800 rounded-lg px-4 py-2 text-zinc-400  bg-opacity-75">
          <h3 className="text-indigo-600 text-4xl">frontend_proficiencies</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>React</li>
            <li>JQuery</li>
            <li>Responsive Design</li>
            <li>Handlebars</li>
          </ul>
        </div>
        <div className="space-y-8 bg-zinc-800 rounded-lg px-4 py-2 text-zinc-400  bg-opacity-75">
          <h3 className="text-indigo-600 text-4xl">css_libraries</h3>
          <ul>
            <li>Bootstrap</li>
            <li>Bulma</li>
            <li>Animate CSS</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
        <div className="space-y-8 bg-zinc-800 rounded-lg px-4 py-2 text-zinc-400 bg-opacity-75">
          <h3 className="text-indigo-600 text-4xl">backend_proficiencies</h3>
          <ul>
            <li>JavaScript</li>

            <li>APIs</li>
            <li>Node.Js</li>
            <li>Express</li>
            <li>Apollo Server</li>
          </ul>
        </div>
        <div className="space-y-8 bg-zinc-800 rounded-lg px-4 py-2 text-zinc-400 bg-opacity-75">
          <h3 className="text-indigo-600 text-4xl">databases</h3>
          <ul>
            <li>MySQL & Sequelize</li>
            <li>MongoDB & MonGoose</li>
            <li>IndexedDB</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

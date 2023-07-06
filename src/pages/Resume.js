import React from "react";

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <p>
        Click on this{" "}
        <a href="./resume.pdf" download>
          ⚝
        </a>{" "}
        to download my resume!
      </p>
      <h2>Front-end Proficiencies</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>JQuery</li>
        <li>Responsive Design</li>
        <li>Bootstrap</li>
        <li>Bulma</li>
        <li>Animate CSS</li>
      </ul>
      <h2>Back-end Proficiencies</h2>
      <ul>
        <li>APIs</li>
        <li>Node.Js</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, MonGoose</li>
        <li>Handlebars</li>
      </ul>
    </div>
  );
}

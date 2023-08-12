import React from "react";

export default function About() {
  return (
    <div className="flex flex-col m-8 space-y-8 items-center">
      <h2 className="flex m-8 rounded-lg justify-center text-6xl px-4 py-2 text-indigo-600 bg-zinc-800 bg-opacity-75">
        about_me
      </h2>
      <div className="flex flex-col space-y-8 items-center">
        <div className="flex space-x-8">
          <div className="rounded-lg overflow-hidden bg-zinc-800 p-8 bg-opacity-75">
            <img
              src="./images/S1.jpg"
              alt="Rona and Yuki"
              className="w-64 h-auto cursor-not-allowed"
            />
          </div>
          <div className="rounded-lg overflow-hidden bg-zinc-800 p-8 bg-opacity-75">
            <img
              src="./images/S2.jpg"
              alt="Rona and Sesame"
              className="w-64 h-auto cursor-not-allowed"
            />
          </div>
        </div>
        <div>
          <p className="flex rounded-lg justify-center  text-lg text-justify px-4 py-2 text-zinc-400 bg-zinc-800 bg-opacity-75">
            Greetings! I'm Rona Chen, an aspiring fullstack JavaScript developer
            with a passion for frontend design. My educational background
            includes a BASc with a specialization in Autism and Behavioral
            Science. However, after working in this field for about a year, I
            felt mentally and physically drained. That's when I decided to step
            back and embark on a new learning journey. It was during this time
            that I discovered U of T's Full Stack Bootcamp. I'm thrilled to
            share with you some of the projects I've accomplished throughout my
            bootcamp experience. I am eager to connect with fellow developers,
            mentors, and professionals who share my passion for web development.
            If you are seeking a dedicated individual with a strong interest in
            becoming a Full Stack JavaScript Developer with a focus on frontend
            design, I would love to chat and explore potential opportunities.
          </p>
        </div>
      </div>
    </div>
  );
}

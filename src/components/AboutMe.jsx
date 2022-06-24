import React from "react";
import useTyping from "../hooks/useTyping";

function AboutMe() {
  let aboutText = useTyping("I am a developer, designer & student.");
  let interestText = useTyping("I love playing with javascript and python.");

  return (
    <div className="mockup-code mx-auto container">
      <h1 className="text-center text-xl font-bold">My Brief Intro</h1>
      <div className="py-2">
        <pre data-prefix="~>" className="text-success">
          <code>whois</code>
        </pre>
        <pre data-prefix="~">
          <code>I am Sargam Poudel.</code>
        </pre>
        <pre data-prefix=" ">
          <code>{aboutText}</code>
        </pre>
      </div>
      <div className="py-2">
        <pre data-prefix="~>" className="text-success">
          <code>whereami</code>
        </pre>
        <pre data-prefix="~">
          <code>Currently Bhadrapur, Jhapa</code>
        </pre>
      </div>
      <div className="py-2">
        <pre data-prefix="~>" className="text-success">
          <code>languages</code>
        </pre>
        <pre data-prefix="~">
          <code>Python & Javascript</code>
        </pre>
      </div>
      <div className="py-2">
        <pre data-prefix="~>" className="text-success">
          <code>techstack</code>
        </pre>
        <pre data-prefix="~">
          <code>MERN & FARM stack</code>
        </pre>
      </div>
      <div className="py-2">
        <pre data-prefix="~>" className="text-success">
          <code>interests</code>
        </pre>
        <pre data-prefix="~">
          <code>chess, puzzles, mathematics...</code>
        </pre>
      </div>
      <div className="py-2">
        <pre data-prefix="~>" className="text-success">
          <code>socials</code>
        </pre>
        <pre data-prefix="~">
          <code>
            gh:
            <a className="link link-accent" href="https://github.com/devsargam">
              devsargam
            </a>{" "}
            ig:
            <a
              className="link link-accent"
              href="https://instagram.com/sargam.ts"
            >
              sargam.ts
            </a>
          </code>
        </pre>
      </div>
    </div>
  );
}

export default AboutMe;

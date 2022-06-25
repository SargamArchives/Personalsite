import React, { useEffect, useState } from "react";
import useTyping from "../hooks/useTyping";

const responses = [
  { key: "help", trigger: "birthday, study, favseries, favmovie," },
  { key: "help", trigger: "whichos" },
  { key: "birthday", trigger: "March 5" },
  { key: "study", trigger: "Trinity International College" },
  { key: "favseries", trigger: "Breaking Bad" },
  { key: "favmovie", trigger: "Interstellar" },
  { key: "whichos", trigger: "manjaro" },
];

function AboutMe() {
  const [moreInfo, setMoreInfo] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    responses.forEach((res) => {
      if (input.toLowerCase() === res.key) {
        setMoreInfo((oldInfo) => [...oldInfo, res]);
        setInput("");
      }
    });
  }, [input]);
  let aboutText = useTyping("I am a developer, designer & student.");

  return (
    <div id="intro" className="mockup-code mx-auto container">
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
      {moreInfo.length > 0 &&
        moreInfo.map((info, id) => (
          <li key={id} className="py-2">
            <pre data-prefix="~>" className="text-success">
              <code>{info.key}</code>
            </pre>
            <pre data-prefix="~">
              <code>{info.trigger}</code>
            </pre>
          </li>
        ))}
      <div className="py-2">
        <pre data-prefix="~>" className="text-warning">
          <code>Type help to know more.</code>
        </pre>
      </div>

      <pre data-prefix="~>" className="text-success">
        <code>
          <input
            className="input input-ghost w-full max-w-xs"
            type="text"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            placeholder="Type here"
          />
        </code>
      </pre>
    </div>
  );
}

export default AboutMe;

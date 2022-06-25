import React, { useState } from "react";

const projects = [
  {
    name: "Confessout",
    desc: "Confession site made with react and flask",
    repo: "confessout",
  },

  {
    name: "Snake",
    desc: "OG snake game with plain javascript",
    repo: "SnakeGame",
  },

  {
    name: "Indium Bot",
    desc: "simple discord bot with python",
    repo: "Indium-bot",
  },

  {
    name: "Flappy Bird",
    desc: "flappy bird game with pygame",
    repo: "flappybird",
  },
];

const Project = ({ projectName, projectDesc, projectUrl }) => {
  return (
    <div className="card w-96 bg-neutral shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{projectName}</h2>
        <p>{projectDesc}</p>
        <div className="card-actions justify-end">
          <a href={`https://github.com/devsargam/${projectUrl}`}>
            <button className="btn btn-primary">View Project</button>
          </a>
        </div>
      </div>
    </div>
  );
};

function Projects() {
  return (
    <div id="projects" className="text-center">
      <h1 className="text-2xl lg:text-4xl mb-5 lg:mb-10">
        Projects that I've worked on
      </h1>
      <article className="container flex justify-center mx-auto ">
        <div className=" grid place-content-center grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-20">
          {projects.length === 0 ? (
            <div>I haven't built any projects.</div>
          ) : (
            projects.map((item, id) => {
              return (
                <Project
                  projectName={item.name}
                  projectDesc={item.desc}
                  projectUrl={item.repo}
                  key={id}
                />
              );
            })
          )}
        </div>
      </article>
    </div>
  );
}

export default Projects;

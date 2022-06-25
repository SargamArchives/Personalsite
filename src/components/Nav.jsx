import React from "react";
import dp from "../assets/dp.jpg";

const Nav = () => {
  return (
    <nav className="container mx-auto">
      <div class="navbar bg-base-100 z-10">
        <div class="flex-1">
          <a class="btn btn-ghost normal-case text-xl">Sargam Poudel</a>
        </div>
        <div class="flex-none">
          <ul class="menu p-0 hidden sm:menu-horizontal">
            <li>
              <a href="#intro">Intro</a>
            </li>
            <li>
              <a href="#languages">Languages</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

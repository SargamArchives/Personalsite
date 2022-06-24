import React from "react";
import dp from "../assets/dp.jpg";

const Nav = () => {
  return (
    <nav className="container mx-auto">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Sargam Poudel</a>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={dp} />
            </div>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">Whoami?</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

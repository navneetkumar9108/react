import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4 px-8 bg-gray-800 ">
      <h2 className="text-2xl font-bold">
        <Link to="/">MyShop</Link>
      </h2>
      <div className="flex gap-8">
        {/* <a className="text-lg font-medium" href="/">
          Home
        </a>
        <a className="text-lg font-medium" href="/about">
          About
        </a>
        <a className="text-lg font-medium " href="/product">
          Product
        </a> */}
        <Link className="text-lg font-medium" to="/">
          Home
        </Link>
        <Link className="text-lg font-medium" to="/about">
          About
        </Link>
        <Link className="text-lg font-medium " to="/courses">
          Courses
        </Link>
        {/* <NavLink className="text-lg font-medium" to="/courses">
          Courses
        </NavLink> */}
        <Link className="text-lg font-medium " to="/product">
          Product
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

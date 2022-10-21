import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
// import { BsPerson } from "react-icons/bs";
// import { BiSearch } from "react-icons/bi";

const Navbar = () => {
  const [hamState, setHamState] = useState(false);
  const [logo, setLogo] = useState(false);
  const location = useLocation();

  const toggleHamburger = () => {
    setHamState(!hamState);
    setLogo(!logo);
  };
  return (
    <div
      className={`flex w-full justify-between items-center h-20 p-4 absolute z-10 ${
        location.pathname === "/" ? "text-white" : " text-black  shadow-md"
      }`}
    >
      <h1 onClick={toggleHamburger} className={logo ? "hidden" : "block"}>
        TRAVEL BLOG.
      </h1>
      <div className="hidden sm:flex space-x-10">
        <Link to={"/"}>Home</Link>
        <Link to={"/blog"}>Blog</Link>
        <Link to={"/destinations"}>Destinations</Link>
      </div>
      {/* <div className={`hidden sm:flex`}>
        <BiSearch className="mr-4" size={20} />
        <BsPerson size={20} />
      </div> */}
      {/* Hamburger Menu */}
      <div
        onClick={toggleHamburger}
        className="sm:hidden z-10 absolute right-4"
      >
        {hamState ? (
          <AiOutlineClose size={20} className="cursor-pointer text-black" />
        ) : (
          <HiOutlineMenuAlt4 size={20} className="cursor-pointer" />
        )}
      </div>
      {/* Mobile Menu */}
      <div
        onClick={toggleHamburger}
        className={`absolute left-${
          hamState ? "0" : "[-100%]"
        } top-0 p-5 bg-gray-100/90 w-full text-black`}
      >
        <h1>TRAVEL BLOG.</h1>
        <div className="flex flex-col gap-8 mt-4">
          <Link to={"/"} className="border-b">
            Home
          </Link>
          <Link to={"/blog"} className="border-b">
            Blog
          </Link>
          <Link to={"/destinations"} className="border-b">
            Destinations
          </Link>
        </div>
        <div className="flex justify-between mt-8">
          <FaFacebook className="icon" />
          <FaTwitter className="icon" />
          <FaInstagram className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

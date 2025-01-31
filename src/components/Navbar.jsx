import React from "react";
import logo from "../assets/l.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


const Navbar = () => {
  return (
    <nav className="mb-5 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 ml-14 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin
          onClick={() =>
            (window.location.href =
              "https://www.linkedin.com/in/komathi-m-76417424a/")
          }
          className="cursor-pointer text-black-600 hover:text-white transition duration-300"
        />
        <FaGithub
          onClick={() =>
            (window.location.href = "https://github.com/Komathi08")
          }
          className="cursor-pointer text-black-600 hover:text-white transition duration-300"
        />
        <FaInstagram
          onClick={() =>
            (window.location.href = "https://www.instagram.com/yourprofile")
          }
          className="cursor-pointer text-black-600 hover:text-white transition duration-300"
        />
        <FaSquareXTwitter
          onClick={() =>
            (window.location.href = "https://x.com/komathi_M2003")
          }
          className="cursor-pointer text-black-600 hover:text-white transition duration-300"
        />
      </div>
    </nav>
  );
};

export default Navbar;

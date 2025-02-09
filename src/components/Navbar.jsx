import React from "react";
import logo from "../assets/l.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import resume from "../assets/komathi.pdf";

const Navbar = () => {
  const handleResumeClick = () => {
    // Open the resume in a new tab
    window.open(resume, "_blank");
  };

  return (
    <nav className="mb-5 flex items-center justify-between py-6 px-3 sm:px-2">
      {/* Logo */}
      <div className="flex flex-shrink-0 items-center">
        <img className="w-10" src={logo} alt="logo" />
      </div>

      {/* Resume Button and Social Icons */}
      <div className="flex items-center justify-center gap-2 sm:gap-2 text-2xl">
        {/* Resume Button */}
        <button
          onClick={handleResumeClick}
          className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 sm:px-2 py-2 "
        >
          Resume
        </button>

        {/* Social Icons */}
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
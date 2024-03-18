import React, { useState } from "react";
import "./navbar.css";
import QuillAuditsLogo from "../../../Assets/Icon.svg";
import Arrow from "../../../Assets/Arrow.svg";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="py-5">
      <nav className="flex flex-col lg:flex-row justify-between lg:items-center  font-jost font-400">
        <div className="flex  gap-2 items-center cursor-pointer justify-between  w-full md:w-auto px-5 lg:px-0">
        <div className="flex gap-2 items-center">
          <div className="w-8 md:w-9 ">
            <img src={QuillAuditsLogo} alt="Logo" className="h-full w-full" />
          </div>
          <span className="text-white text-lg tracking-wider font-jost hidden md:block">
            QuillAudits
          </span>
        </div>
          
          <div className="lg:hidden">
            <button className="px-2 py-2 text-xs font-500  text-white rounded-md ">
              Request An Audit
            </button>
          </div>
          <div>
            {showMenu ? (
              <RxCross1
                className="text-white text-2xl lg:hidden"
                onClick={toggleMenu}
              />
            ) : (
              <RxHamburgerMenu
                className="text-white text-2xl lg:hidden"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>

        <div className={`${showMenu ? "block" : "hidden"} mt-5 px-5 lg:mt-0 md:px-0 lg:block`}>
          <ul className="text-[#FFFFFF] flex justify-center flex-col md:flex-row gap-8 ">
            <li className="flex gap-2 items-center">
              <span>Services</span>
              <img src={Arrow} alt="Arrow" className="h-2" />
            </li>
            <li>Pricing</li>
            <li>Our Audits</li>
            <li className="flex gap-2 items-center">
              <span>Tools</span>
              <img src={Arrow} alt="Arrow" className="h-2" />
            </li>
            <li className="flex gap-2 items-center">
              <span>Resources</span>
              <img src={Arrow} alt="Arrow" className="h-2" />
            </li>
            <li>Refer-Earn-Secure</li>
          </ul>
        </div>
        <div className="hidden lg:block">
          <button className="px-5 py-2 text-md font-500  text-white rounded-md ">
            Request An Audit
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

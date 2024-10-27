"use client";

import NavButton from "./button";
import linkedIn from "../../assets/linkedIn.svg";
import Logo from "@/app/assets/logo.svg";

// import Logo from "./assets";s
function Navbar() {
  return (
    <nav className="bg-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 justify-between">
        <div className="relative flex h-16 items-center justify-between flex-end ">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden justify-around"></div>
          <img className="h-8 w-auto" src={Logo} alt="Your Company" />
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              <a
                href="#"
                className="rounded-md px-3 py-2 text-sm font-medium  hover:bg-red-600 hover:text-white text-black"
                aria-current="page"
              >
                Home
              </a>
              <a
                href="#"
                className="rounded-md px-3 py-2 text-sm font-medium  hover:bg-red-600 hover:text-white text-black"
              >
                About Us
              </a>
              <a
                href="#"
                className="rounded-md px-3 py-2 text-sm font-medium  hover:bg-red-600 hover:text-white text-black"
              >
                What we do
              </a>
              <a
                href="#"
                className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-red-600 hover:text-white"
              >
                Why join us
              </a>
              <a
                href="#"
                className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-red-600 hover:text-white"
              >
                Career
              </a>
              <a className="rounded-md px-3 py-2 text-sm font-medium text-black">
                |
              </a>
              {/* <div className="text-black">|</div> */}
              <a
                href="#"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-red-600 hover:text-white"
              >
                <img src={linkedIn} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

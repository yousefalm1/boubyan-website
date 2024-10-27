"use client";

import NavButton from "./button";
import linkedIn from "../../assets/linkedIn.svg";
import Logo from "@/app/assets/logo.svg";
import Image from "next/image";

// import Logo from "./assets";s
function Navbar() {
  return (
    <nav className="bg-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 justify-between">
        <div className="relative flex h-16 items-center justify-between flex-end ">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden justify-around"></div>
          <Image
            src={Logo}
            alt="logo"
            width={150}
            height={150}
            className="pt-5"
          />
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4 pt-10">
              <a
                href="#"
                className="rounded-md px-3 py-2 text-sm font-medium text-black 
                
             hover:bg-red-600 hover:text-white focus:bg-red-600 focus:text-white 
             active:bg-red-600 active:text-white"
              >
                Home
              </a>
              <a
                href="#"
                className="rounded-md px-3 py-2 text-sm font-medium text-black 
             hover:bg-red-600 hover:text-white focus:bg-red-600 focus:text-white 
             active:bg-red-600 active:text-white"
              >
                About Us
              </a>
              <a
                href="#"
                className="rounded-md px-3 py-2 text-sm font-medium text-black 
             hover:bg-red-600 hover:text-white focus:bg-red-600 focus:text-white 
             active:bg-red-600 active:text-white"
              >
                What we do
              </a>
              <a
                href="#"
                className="rounded-md px-3 py-2 text-sm font-medium text-black 
             hover:bg-red-600 hover:text-white focus:bg-red-600 focus:text-white 
             active:bg-red-600 active:text-white"
              >
                Why join us
              </a>
              <a
                href="#"
                className="rounded-md px-3 py-2 text-sm font-medium text-black 
             hover:bg-red-600 hover:text-white focus:bg-red-600 focus:text-white 
             active:bg-red-600 active:text-white"
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
                <Image src={linkedIn} alt="kuwait" width={23} height={23} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

// src/app/Footer/page.js
import React from "react";
import Image from "next/image";
import GrayFrame from "../../assets/Footer.svg";
import BackgroundImage from "../../assets/Footer2.svg";
import LeftSide from "../../assets/leftside.svg";
import RightSide from "../../assets/rightside.svg";
import icone from "../../assets/linkedin-box-fill.svg";
function Footer() {
  return (
    <div className="pt-32 flex justify-between bg-white">
      {/* Left Div */}
      <div className="p-0 absolute w-full h-full z-0">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="p-10 w-1/2 flex flex-col items-start space-y-4 z-10">
        <Image
          src={LeftSide}
          alt="Description of Image"
          width={400}
          height={300}
          className="rounded-md"
        />

        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-blue-600 text-xs">
          <p className="text-xs">join us today</p>
        </button>
      </div>

      {/* Right Div */}
      <div className=" p-10  w-1/2 z-10">
        <Image
          src={RightSide}
          alt="Description of Image"
          width={400}
          height={300}
          className="rounded-md"
        />
        <div className="flex items-center">
          <Image
            src={icone}
            alt="Description of Image"
            width={32}
            height={32}
            className="rounded-md"
          />
          <p className="text-xs ">check our linkedin page</p>
        </div>
      </div>
    </div>
  );
}
export default Footer;

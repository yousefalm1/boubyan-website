import React from 'react';
import kuwait from '../../assets/kuwait_background.svg';
import Image from 'next/image';
const HeroPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${kuwait.src})`,
        backgroundSize: 'fill', // Use 'cover' to fill the entire background
        backgroundPosition: 'center', // Centers the image
        backgroundRepeat: 'no-repeat',
      }}
      className="w-screen h-screen bg-white flex flex-col items-start"
    >
      <hr className="border-red-900" />
      {/* <Image
        src={kuwait}
        alt="Descriptive text for screen readers"
        width={500}
        height={300}
        layout="relative"
      /> */}
      <div className="h-11/12 w-6/12 pl-20 pt-40 items-center flex flex-row justify-center">
        <div className="w-9/12 h-11/12 pl-20 pb-50 ">
          <h1 className="text-4xl text-black">Digital Factory Now at Cairo!</h1>
          <p className="text-1 text-black">
            Boubyan Digital Factory offers a great potential for growth and
            development in a unique environment driven by a strong culture of
            digital innovation.
          </p>
          <div className="pt-10">
            <button className="bg-red-600 rounded pl-5 pr-5 pt-4 pb-4 ">
              Join us today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;

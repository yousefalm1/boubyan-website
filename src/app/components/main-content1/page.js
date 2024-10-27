import Image from "next/image";

import mainContent1Img1 from "../../assets/ibr_img_1.svg";
import mainContent1Img2 from "../../assets/ibr_img_2.svg";

function Ibrahim_section() {
  return (
    <div className="bg-white text-red-500">
      {/* Ibrahim's work starts from here*/}
      <div className="p-3">
        <div className="flex flex-col md:flex-row items-center bg-white ">
          <Image
            src={mainContent1Img1}
            width={400}
            height={400}
            alt="Image for Innovate today for the future"
          />

          <div>
            <h2 className="text-gray-700 font-semibold text-3xl p-3 w-2/3 ">
              We
              <span className="text-red-500"> innovate </span>
              today for the future
            </h2>
            <p className="text-gray-700 p-3 leading-loose">
              Boubyan Group is a leading renowned financial institution that
              provides reliable and sound products and solutions with the
              promise of stable growth, secure and sustainable results.
            </p>

            <p className="text-gray-700 p-3 leading-loose">
              Translating our strong belief in the core role of technology in
              the progress and advancement of all our activities, the Group has
              founded Boubyan Digital Factory to support and strengthen the
              culture of innovation in a digitally driven environment that
              builds on the achieved successes to prepare for future milestones.
            </p>
          </div>
        </div>
      </div>
      <div className="p-3">
        <div className="flex flex-col md:flex-row-reverse items-center bg-white p-3">
          <Image
            src={mainContent1Img2}
            width={400}
            height={400}
            alt="Image for Innovate today for the future"
          />

          <div>
            <h2 className="text-gray-700 font-semibold text-3xl p-3 w-2/3 ">
              We create
              <span className="text-red-500"> solutions </span>
              for a digital world
            </h2>
            <p className="text-gray-700 p-3 leading-loose">
              Boubyan Group is a leading renowned financial institution that
              provides reliable and sound products and solutions with the
              promise of stable growth, secure and sustainable results.
            </p>

            <p className="text-gray-700 p-3 leading-loose">
              Translating our strong belief in the core role of technology in
              the progress and advancement of all our activities, the Group has
              founded Boubyan Digital Factory to support and strengthen the
              culture of innovation in a digitally driven environment that
              builds on the achieved successes to prepare for future milestones.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ibrahim_section;

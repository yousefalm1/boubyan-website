import Image from 'next/image';
import mainContent1 from '@/app/assets/main-content1/main-content1.svg';
import icon1 from '@/app/assets/main-content1/icon1.svg';
import icon2 from '@/app/assets/main-content1/icon2.svg';
import icon3 from '@/app/assets/main-content1/icon3.svg';
import icon4 from '@/app/assets/main-content1/icon4.svg';

const MainContent = () => {
  return (
    <div className="relative w-full mt-14">
      {/* Main Image positioned above the content */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 mt-44">
        <Image
          src={mainContent1}
          alt="main-content1"
          width={618}
          height={468}
        />
      </div>

      <div className="bg-white w-full h-[198px] relative z-0"></div>

      <div className="bg-primary-red w-full h-[901px] relative flex flex-col items-center">
        <div className="relative pt-60  flex flex-col items-center justify-center text-center">
          <h1 className="font-bold text-3xl mb-3">
            You are here because you believe in your exceptional talent.
          </h1>
          <p className="text-base w-[626px]">
            Boubyan Digital Factory offers a great potential for growth and
            development in a unique environment driven by a strong culture of
            digital innovation.
          </p>
        </div>

        <div className="flex items-center justify-center mt-16">
          <div className="w-[298px] h-[210px] p-6 rounded-lg">
            <Image
              src={icon1}
              alt="icon1"
              width={64}
              height={64}
              className="mb-4"
            />
            <h1 className="text-xl font-semibold mb-2">Big Ideas</h1>
            <p className="text-base">
              We’re looking for problem-solvers, makers, and leaders who are
              ready to roll up their sleeves and collaborate to ship solutions
              to our customers.
            </p>
          </div>
          <div className="w-[298px] h-[210px] p-6 rounded-lg">
            <Image
              src={icon2}
              alt="icon1"
              width={64}
              height={64}
              className="mb-4"
            />
            <h1 className="text-xl font-semibold mb-2">
              Something new everyday
            </h1>
            <p className="text-base ">
              You’ll succeed not just in your day-to-day role but in your career
              as a whole through mobility, cross-functional development
              opportunities, and coaching.
            </p>
          </div>
          <div className="w-[298px] h-[210px] p-6 rounded-lg">
            <Image
              src={icon3}
              alt="icon1"
              width={64}
              height={64}
              className="mb-4"
            />
            <h1 className="text-xl font-semibold mb-2">Be mentored</h1>
            <p className="text-sm ">
              You’ll learn from a wide variety of industry leaders, developing
              solutions not only locally, but for the global market alongside
              technology-focused teams in Kuwait.
            </p>
          </div>

          <div className="w-[298px] h-[210px] p-6 rounded-lg">
            <Image
              src={icon4}
              alt="icon1"
              width={64}
              height={64}
              className="mb-4"
            />
            <h1 className="text-xl font-semibold mb-2">Create expereinces</h1>
            <p className="text-sm ">
              You'll create elegant digital experiences that let employees and
              customers take charge and enable Boubyan to drive meaningful
              change for every future.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white h-[839px] flex flex-col items-center justify-center relative">
        <div className="bg-white shadow-2xl rounded-lg  w-[1060px] h-[758px] absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 mt-72 ">
          <div>
            <h1 className="text-[#54585A] flex items-center justify-center font-semibold text-3xl mt-20">
              Different areas of expertise, one powerful team
            </h1>
          </div>

          <div className=" text-[#54585A] grid col-span-2 grid-cols-2 gap-4 mt-20 px-7  ">
            <div className=" w-[471px] h-[113px] mb-14 ">
              <h1 className="font-semibold text-2xl mb-4">Design</h1>
              <p>
                We’re scientists, artists, communicators, technologists, and
                human-centred problem solvers focused on designing things all
                people will love.
              </p>
            </div>

            <div className=" w-[471px] h-[113px] mb-14 ">
              <h1 className="font-semibold text-2xl mb-4">
                Software developments
              </h1>
              <p>
                We believe in the power of data over intuition, and we lead the
                charge in embedding this data-driven approach into everything
                our teams build.
              </p>
            </div>

            <div className=" w-[471px] h-[113px] mb-14">
              <h1 className="font-semibold text-2xl mb-4">Product ownership</h1>
              <p>
                We spend our days focused on driving acquisition, growth, and
                sales through our digital channels — all with a focus on
                data-driven optimization and personalization.
              </p>
            </div>

            <div className=" w-[471px] h-[113px] mb-14">
              <h1 className="font-semibold text-2xl mb-4">
                Data and analytics
              </h1>
              <p>
                We take ownership of business objectives and translate them into
                digital priorities, building excellence in the global digital
                customer experience.
              </p>
            </div>

            <div className=" w-[471px] h-[113px] mb-14 ">
              <h1 className="font-semibold text-2xl mb-4">
                AI & Machine learning{' '}
              </h1>
              <p>
                We work to identify real-life problems and solve them with
                technology to change the way our customers bank, one release at
                a time.
              </p>
            </div>

            <div className=" w-[471px] h-[113px] mb-14 ">
              <h1 className="font-semibold text-2xl mb-4">Management</h1>
              <p>
                The Platform Organization builds modern technology platforms
                that enable our teams to develop applications quickly, securely,
                and efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;

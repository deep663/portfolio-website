import Services1 from "./ServiceCard1";
import Services2 from "./ServiceCards2";

function WhatWeDo() {
  return (
    <>
      <section id="services" className="w-full bg-neutral-950 py-24 h-screen">
        <div className="flex items-center justify-between">
          <div className="w-1/4 ml-16 text-left">
            <h2 className="text-5xl font-bold text-white pl-4 mb-10">
              What can we do for you?
            </h2>
            <p className="text-neutral-500 text-2xl font-bold pl-4 mb-10">
              We have done quit good amount of projects with people to showcase
              our work.
            </p>
            <div className="grid grid-cols-2 gap-6 mx-auto max-w-screen-lg pl-4 pr-16">
              <div>
                <h3 className="text-4xl font-bold text-yellow-400"> 100+ </h3>
                <span className="text-neutral-400 font-normal text-lg">
                  Projects
                </span>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-yellow-400"> 5+ </h3>
                <span className="text-neutral-400 font-normal text-lg">
                  Ratings
                </span>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-yellow-400">5+ </h3>
                <span className="text-neutral-400 font-normal text-lg">
                  Years of experience
                </span>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-yellow-400">50+ </h3>
                <span className="text-neutral-400 font-normal text-lg">
                  Projects completed
                </span>
              </div>
            </div>
            <button className="flex mt-8 text-yellow-400 text-center text-lg font-bold border border-yellow-400 rounded-[50px] px-16 py-4 hover:text-white hover:bg-yellow-500 transition-colors">
              See our Projects
            </button>
          </div>
          <div className="w-4/12 mr-20">
            <Services1 />
          </div>
        </div>
        <div className="mx-16 mt-8">
        <Services2 />
      </div>
      </section>
      
    </>
  );
}

export default WhatWeDo;

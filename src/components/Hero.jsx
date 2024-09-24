import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Model from "../assets/model-image.png";
import { IconEmail, IconInstagram, IconLinkedin, IconTwitter } from "./Icons";

function Hero() {
  const iconsMap = {
    Twitter: <IconTwitter height={24} width={24} className="fill-white" />,
    Instagram: <IconInstagram height={24} width={24} className="fill-white"/>,
    Email: <IconEmail height={24} width={24} />,
    LinkedIn: <IconLinkedin height={24} width={24}/>,
  };
  return (
    <main
      id="home"
      className="flex flex-col items-center pt-24 bg-neutral-800 max-h-[93vh]"
    >
      <div className="flex mx-16 mt-16 h-fit">
        <div className="text-left w-5/12 flex flex-col justify-end my-5 px-12">
          <h1 className="text-8xl font-normal text-neutral-600 mb-5">
            Welcome,
          </h1>
          <h1 className="text-8xl font-semibold font-sans text-white text-wrap mb-5">
            to <span className="text-yellow-400">B</span>inyte
          </h1>
          <hr className="w-3/5 border-2 border-yellow-400 my-5" />
          <p className="text-white text-lg">
            Hey, everyone thanks for visiting our website . Our website
            Binyte.co is an multiple service agency where we provide website
            design services, website development sevices, video editing both
            long form and short form and adding to it we help brands and
            companies to grow on social media platforms.
          </p>
        </div>
        <div className="w-4/12 flex items-end">
          <img src={Model} className="mx-auto" alt="Image of model" />
        </div>
        <div className="text-left w-3/12">
          <div className="bg-neutral-900 bg-opacity-50 rounded-[70px] px-8 py-5">
            <h2 className="text-white text-3xl ml-2">Services</h2>
            <hr className="w-3/5 border-2 border-yellow-400 mb-5" />
            <p className="text-white text-lg">
              We provide multiple services like web designing , web development
              and hosting as well. Our main focus is on the work which we
              provide which also includes social media management for brands and
              startups etc.
            </p>
            <a href="#services" className="flex gap-2 items-center justify-center mt-4 mx-auto w-2/3 text-yellow-400 font-bold rounded-3xl px-4 py-2 hover:text-white hover:bg-yellow-500 transition-colors">
              Know more
              <ArrowRightIcon height={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-around space-x-5 mb-20 bg-neutral-700 w-11/12 m-auto p-10">
        {["Twitter", "Instagram", "Email", "LinkedIn"].map((icon) => (
          <a
            key={icon}
            href={`#${icon.toLowerCase()}`}
            className="text-white font-semibold hover:text-yellow-400 transition-colors w-2/12 bg-neutral-600 py-4 px-4 flex gap-6 justify-start items-center"
          >
            {iconsMap[icon]}
            <span className="text-2xl">{icon}</span>
          </a>
        ))}
      </div>
    </main>
  );
}

export default Hero;

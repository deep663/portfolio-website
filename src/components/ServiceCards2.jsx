import { ArrowRightIcon } from "@heroicons/react/20/solid";

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="bg-neutral-700 text-white p-6 shadow-lg">
      <div className="flex items-center mb-2">
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-lg">
          <img src={icon} alt={`${title} icon`} className="w-8 h-8" />
        </div>
        <h2 className="ml-4 text-xl font-bold">{title}</h2>
      </div>
      <hr className="mb-4" />
      <p className="text-gray-400 mb-6">{description}</p>
      <a href="#" className="text-yellow-400 font-semibold flex items-center hover:text-yellow-500 transition-colors">
        Know more
        <span className="ml-2">
          <ArrowRightIcon className="w-5 h-5" />
        </span>
      </a>
    </div>
  );
};

const Services2 = () => {
  const services = [
    {
      title: "UI UX Design",
      description:
        "Everyone should pay more attention to the ui and ux of a website or software. Having a good and user-friendly interface makes a huge difference.",
      icon: "ui.png",
    },
    {
      title: "Website Development",
      description:
        "Everyone should pay more attention to the ui and ux of a website or software. Having a good and user-friendly interface makes a huge difference.",
      icon: "coding.png",
    },
    {
      title: "App Development",
      description:
        "Everyone should pay more attention to the ui and ux of a website or software. Having a good and user-friendly interface makes a huge difference.",
      icon: "app-development.png",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-24">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
          icon={service.icon}
        />
      ))}
    </div>
  );
};

export default Services2;

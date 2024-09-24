import { ArrowRightIcon } from "@heroicons/react/20/solid";


const ServiceCard = ({ title, description, icon, link }) => {
  return (
    <div className="bg-neutral-800 text-white p-3 shadow-lg flex items-center space-x-4">
      <div className="flex-shrink-0 bg-neutral-700 ">
        <img src={icon} alt={`${title} icon`} className="h-16" />
      </div>
      <div className="flex-grow">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-neutral-400">
          {description}
        </p>
      </div>
      <a href={link} className="text-yellow-400 text-xl pr-4">
        <ArrowRightIcon className="w-6 h-6" />
      </a>
    </div>
  );
};

const Services1 = () => {
  const services = [
    {
      title: "App Design",
      description:
        "Having an app nowadays is very important for business...",
      icon: "../src/assets/app-design.jpg", 
      link: "#",
    },
    {
      title: "Web Design",
      description:
        "Having a website nowadays is very important for business...",
      icon: "../src/assets/web-design.jpg",
      link: "#", 
    },
    {
      title: "Social Media",
      description:
        "Social media is one of the best ways to grow your business...",
      icon: "../src/assets/social-media.jpg", 
      link: "#",
    },
  ];

  return (
    <div className="space-y-6">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
          icon={service.icon}
          link={service.link}
        />
      ))}
    </div>
  );
};

export default Services1;

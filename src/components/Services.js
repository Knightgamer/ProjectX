import React from "react";
import { FaCode, FaMobileAlt, FaPaintBrush, FaRocket } from "react-icons/fa";

const ServiceCard = ({ title, description, Icon }) => (
  <div className="flex flex-col items-center justify-center w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out p-6 flex flex-col items-center">
      <Icon className="w-12 h-12 text-indigo-500 mb-4" />
      <h3 className="mb-3 text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  </div>
);

const servicesData = [
  {
    title: "Web Development",
    description:
      "Creating responsive and dynamic websites tailored to your needs.",
    Icon: FaCode,
  },
  {
    title: "Mobile Applications",
    description:
      "Designing user-friendly mobile applications to enhance customer engagement.",
    Icon: FaMobileAlt,
  },
  {
    title: "Graphic Design",
    description:
      "Crafting visual content to communicate messages and drive engagement.",
    Icon: FaPaintBrush,
  },
  {
    title: "Product Launch",
    description:
      "Strategic marketing services to launch your product successfully.",
    Icon: FaRocket,
  },
  // ... Add more services as needed
];

const Services = () => {
  return (
    <section id="services" className="text-gray-700 body-font bg-gray-100">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap justify-center text-center mb-24">
          <div className="w-full lg:w-2/3">
            <h2 className="text-2xl font-medium title-font mb-4 text-gray-900 sm:text-3xl">
              Our Professional Services
            </h2>
            <p className="lg:w-1/2 mx-auto leading-relaxed text-base">
              Whatever your needs, our wide range of services are here to help
              you achieve your goals with personalized attention and customized
              solutions.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

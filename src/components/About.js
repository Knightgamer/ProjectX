import React from "react";
import projectx from "../assets/projectx.jpg"; 

const About = () => {
  return (
    <section id="about" className="bg-gray-100 p-8 md:p-12 lg:p-16">
      <div className="container mx-auto flex flex-wrap justify-center items-center">
        <div className="md:flex-1 flex justify-center mb-6 md:mb-0 p-4">
          <img
            src={projectx}
            alt="Team celebrating success"
            className="max-w-xs md:max-w-md lg:max-w-lg h-auto rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
          />
        </div>
        <div className="md:flex-1 text-lg text-gray-700 p-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-10">
            About Us
          </h2>
          <p>
            ProjectX is a cutting-edge web platform designed to bring{" "}
            <strong>innovative solutions</strong> to our users. We focus on
            creating user-friendly, responsive, and dynamic applications that
            cater to a diverse range of needs.
          </p>
          <p className="mt-4">
            Our team comprises dedicated professionals with expertise in various
            fields, including web development, design, and user experience. We
            believe in the power of technology to transform and improve people's
            lives.
          </p>
          <p className="mt-4">
            Since our inception in [Year], we have been committed to excellence,
            innovation, and customer satisfaction. Join us on our journey as we
            continue to explore new horizons and push the boundaries of what's
            possible on the web.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
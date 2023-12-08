import React from "react";
import projectx from "../assets/projectx.jpg";

const About = () => {
  return (
    <section id="about" className="bg-gray-100">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 lg:col-span-4">
            <img
              src={projectx}
              alt="About ProjectX"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="md:col-span-7 lg:col-span-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              About Us
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              ProjectX is a cutting-edge web platform designed to bring{" "}
              <strong>innovative solutions</strong> to our users. We focus on
              creating user-friendly, responsive, and dynamic applications that
              cater to a diverse range of needs.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Our team comprises dedicated professionals with expertise in
              various fields, including web development, design, and user
              experience. We believe in the power of technology to transform and
              improve people's lives.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Since our inception in [Year], we have been committed to
              excellence, innovation, and customer satisfaction. Join us on our
              journey as we continue to explore new horizons and push the
              boundaries of what's possible on the web.
            </p>
            <a
              href="#contact"
              className="inline-block focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

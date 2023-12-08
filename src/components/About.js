import React from "react";
import projectx from "../assets/projectx.jpg";
const About = () => {
  return (
    <section id="about" className="bg-gray-100 p-8 md:p-12 lg:p-16">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-10">
          About Us
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 lg:w-2/5 flex justify-center mb-6 md:mb-0">
            <img
              src={projectx}
              alt="About ProjectX"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 lg:w-3/5">
            <p className="text-lg text-gray-700">
              ProjectX is a cutting-edge web platform designed to bring{" "}
              <strong>innovative solutions</strong> to our users. We focus on
              creating user-friendly, responsive, and dynamic applications that
              cater to a diverse range of needs.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              Our team comprises dedicated professionals with expertise in
              various fields, including web development, design, and user
              experience. We believe in the power of technology to transform and
              improve people's lives.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              Since our inception in [Year], we have been committed to
              excellence, innovation, and customer satisfaction. Join us on our
              journey as we continue to explore new horizons and push the
              boundaries of what's possible on the web.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

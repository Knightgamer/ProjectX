import React, { useState } from "react";
import { HiMail, HiPhone } from "react-icons/hi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Update form data
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log(formData);
  };

  return (
    <section id="contact" className="text-gray-700 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Contact Us
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Have any questions? We'd love to hear from you.
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <input
                className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
                placeholder="Name"
                type="text"
                name="name"
                onChange={handleChange}
                value={formData.name}
                required
              />
            </div>
            <div className="p-2 w-1/2">
              <input
                className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
                placeholder="Email"
                type="email"
                name="email"
                onChange={handleChange}
                value={formData.email}
                required
              />
            </div>
            <div className="p-2 w-full">
              <textarea
                className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none h-48 focus:border-indigo-500 text-base px-4 py-2 resize-none block"
                placeholder="Message"
                name="message"
                onChange={handleChange}
                value={formData.message}
                required
              ></textarea>
            </div>
            <div className="p-2 w-full">
              <button
                className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
          <div className="p-4 mt-8 lg:w-1/2 md:w-full mx-auto text-center border-t border-gray-300">
            <div className="flex justify-center items-center">
              <HiMail className="text-indigo-500 w-6 h-6 mr-2" />
              <span className="text-gray-600">contact@projectx.com</span>
            </div>
            <div className="flex justify-center items-center mt-3">
              <HiPhone className="text-indigo-500 w-6 h-6 mr-2" />
              <span className="text-gray-600">(123) 456-7890</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
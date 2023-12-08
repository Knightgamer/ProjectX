import React from "react";
import NavBar from "./NavBar"; // Make sure to import the NavBar component

const Header = () => {
  return (
    <header className="bg-blue-500 text-white">
      <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
        <h1 className="flex title-font font-medium items-center mb-4 md:mb-0">
          <span className="text-xl font-bold">ProjectX</span>
        </h1>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import logoSvg from "../assets/images/smart lights_logo.svg";
import Button from "./Button";

const Header: React.FC = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row items-center justify-around p-4 bg-custom-linear-gradient-for-hero-image w-screen fixed top-0 z-50">
        <img
          src={logoSvg}
          alt="example svg"
          className="h-8 sm:h-16 md:h-7 lg:h-8"
        />
        <div className="flex items-center space-x-6 sm:space-x-8 md:space-x-10 mt-4 sm:mt-0">
          <a
            href="#"
            className="text-sm sm:text-base md:text-sm text-white  font-medium hover:text-blue-500"
          >
            Home
          </a>
          <a
            href="#products"
            className="text-sm sm:text-base md:text-sm text-white font-medium hover:text-blue-500"
          >
            Products
          </a>
          <a
            href="#softwareService"
            className="text-sm sm:text-base md:text-sm text-white font-medium hover:text-blue-500"
          >
            Software Services
          </a>
          {/* <button className="bg-blue-500 text-white py-2 px-4 sm:py-2.5 sm:px-6 md:py-1.5 md:px-9 hover:bg-blue-600">
            Login
          </button> */}
          <Button />
        </div>
      </div>
      <hr className="border-t border-gray-700" />
    </>
  );
};

export default Header;

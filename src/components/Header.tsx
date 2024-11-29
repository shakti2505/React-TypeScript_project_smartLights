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
          <Button />
        </div>
      </div>
      <hr className="border-t border-gray-700" />
    </>
  );
};

export default Header;

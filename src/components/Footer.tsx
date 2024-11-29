import React from "react";
import footerBg from "../assets/images/Footer.png";
import logoSvg from "../assets/images/smart lights_logo.svg";

interface Props {
  // define your props here
}

const Footer: React.FC<Props> = () => {
  return (
    <>
      <div className="relative w-screen">
        {/* Navbar */}
        <div className="absolute z-10 top-0 flex  item-center sm:flex-row items-center justify-between p-2 sm:p-24 w-full">
          {/* Logo */}
          <img
            src={logoSvg}
            alt="example svg"
            className="h-5 sm:h-8 md:h-8 lg:h-9 mt-2"
          />
          {/* Navigation Links */}
          <div className="flex items-center space-x-9 sm:space-x-6 lg:space-x-32 mt-2 sm:mt-0">
            <a
              href="#"
              className="text-xs sm:text-base text-white font-medium hover:text-blue-500"
            >
              Home
            </a>
            <a
              href="#products"
              className="text-xs sm:text-base text-white font-medium hover:text-blue-500"
            >
              Products
            </a>
            <a
              href="#"
              className="text-xs sm:text-base text-white font-medium hover:text-blue-500"
            >
              Follow us
            </a>
          </div>
        </div>
        <div className="absolute z-10 bottom-0 flex flex-col sm:flex-row items-center justify-between p-4 sm:p-24 w-full">
          <div className="flex items-center space-x-1 sm:space-x-6 lg:space-x-12 mt-4 sm:mt-0 lg:border-t lg:border-[#ECEEEE] lg:pt-2">
            <a
              href="#"
              className="text-xs sm:text-base text-white font-medium hover:text-blue-500 px-4 sm:px-6 lg:px-8"
            >
              Privacy Policy
            </a>
            <span className="h-5 w-px bg-white hidden"></span> {/* Divider */}
            <a
              href="#"
              className="text-xs sm:text-base text-white font-medium hover:text-blue-500 px-4 sm:px-6 lg:px-8"
            >
              Terms & Condition
            </a>
            <span className="h-5 w-px bg-white hidden"></span> {/* Divider */}
            <a
              href="#"
              className="text-xs sm:text-base text-white font-medium hover:text-blue-500 px-4 sm:px-6 lg:px-8"
            >
              Cookie Policy
            </a>
          </div>
        </div>

        {/* footer Image */}
        <img src={footerBg} className="object-cover w-full  sm:h-[80vh]" />
      </div>
    </>
  );
};

export default Footer;

import React from "react";
import ButtonWithAni from "./ButtonWithAni";
import SteerLamps from "../assets/images/smart_lights.png";
import ButtonWithSvg from "./ButtonWithSvg";
import NavigationButton from "./NavigationButton";

const Products: React.FC = () => {
  return (
    <>
      <div id="products" className="flex flex-col p-8 lg:p-40 gap-8 bg-custom-gradient-for-product-bg ">
        <div className="flex flex-col items-start gap-3">
          <div className="inline-block text-left bg-custom-linear-gradient-ecosystem-label p-3 border-transparent">
            <p className="text-xl font-medium text-blue-700">Products</p>
          </div>
          <span className="font-bold text-black text-3xl text-left">
            Cutting-edge hardware,
          </span>
          <p className="text-3xl text-black text-left font-thin">
            Offering helping cities optimize resources and achieve smart
            development goals
          </p>
        </div>
        <div className="flex flex-col flex-wrap lg:flex-row items-start gap-4">
          <ButtonWithAni title="Centrizied controll & Monitoring Stystem " />
          <ButtonWithAni title="Nema Mounted VOLC 1160" />
          <ButtonWithAni title="Retrofit Street Light Controller VOLC 2160" />
          <ButtonWithAni title="Retrofit Street Light Controller VOLC 2180" />
          <ButtonWithAni title="Retrofir Street Light Controller VOLC 4180" />
        </div>
        <div className="flex relative lg:flex-row flex-col bg-custom-gradient-for-product-bg">
          <div className="relative">
            <img
              src={SteerLamps}
              className="md:w-screen h-auto lg:h-screen object-cover bg-black"
            />
            {/* Left Navigation Button */}
            <div className="absolute bottom-4 left-4 lg:bottom- lg:left-0 md:left-0 md:bottom-0">
              <NavigationButton
                Icon={() => (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    className="w-5 h-5 lg:w-6 lg:h-6"
                  >
                    <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                  </svg>
                )}
              />
            </div>
            {/* Right Navigation Button */}
            <div className="absolute bottom-4 right-4 lg:bottom-0 lg:right-0 md:right-0 md:bottom-0">
              <NavigationButton
                Icon={() => (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    className="w-5 h-5 lg:w-6 lg:h-6"
                  >
                    <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                  </svg>
                )}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 items-start justify-center p-8 bg-custom-gradient-for-productType-bg relative">
            {/* <div className="absolute bottom-4 right-4 lg:bottom-8 lg:right-8">
              <NavigationButton
                Icon={() => (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    className="w-5 h-5 lg:w-6 lg:h-6"
                  >
                    <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                  </svg>
                )}
              />
            </div> */}
            <p className="text-sx text-[#818181]">Products 1/5</p>
            <p className="text-black text-3xl font-bold text-left">
              Centalized Control & Monitoring System
            </p>
            <p className="text-black text-thin text-xl text-left">
              Desinged indigineously for street lighting projects, the CMS
              offers a complete feeder paner for a group of 30-50 street lights.
            </p>
            <div className="self-start mt-5">
              <ButtonWithSvg title="Know more" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;

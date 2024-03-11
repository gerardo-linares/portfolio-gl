"use client";
import ServiceSlider from "./../../components/ServiceSlider";
const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center ">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8 ">
          {/**texto */}
          <div className=" text-center flex xl:w-[30vh] flex-col lg:text-left mb-4 xl:mb-0">
            <h2 className="h2 xl:mt-8">
              Mis Servicios<span className="text-accent">.</span>
            </h2>
            <p className="mb-4 max-w-[400px] mx-auto lg:mx-0">
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus,
              aliquid.
            </p>
          </div>
          <div className="w-full xl:max-w-[65%]">
            {/**slider */}
            <ServiceSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

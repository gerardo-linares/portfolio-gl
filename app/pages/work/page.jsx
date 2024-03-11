"use client";
import WorkSlider from "./../../components/WorkSlider";
const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center px-1 ">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8 ">
          {/**texto */}
          <div className=" text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <h2 className="h2 xl:mt-12">
              Mis Ultimos Proyectos<span className="text-accent">.</span>
            </h2>
            <p className="mb-4 max-w-[400px] mx-auto lg:mx-0">
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus,
              aliquid.
            </p>
          </div>
          <div className="w-full xl:max-w-[65%]">
            {/**slider */}
            <WorkSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

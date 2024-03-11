import { Swiper, SwiperSlide } from "swiper/react";
// swiper styles

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// icons
import { BsArrowRight } from "react-icons/bs";
// swiper component
import Image from "next/image";

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "CSNET",
          path: "/csnet.png",
        },
        {
          title: "Red Valore",
          path: "/thumb2.jpg",
        },
        {
          title: "Todoconectar",
          path: "/thumb3.jpg",
        },
        {
          title: "unaCosa3d",
          path: "/thumb4.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb4.jpg",
        },
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      className="h-[340px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {" "}
              {slide.images.map((image, index) => {
                return (
                  <div
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                    key={index}
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      {/**imagen */}
                      <Image src={image.path} width={500} height={300} alt="" />
                      {/**gradiente*/}
                      <div className="absolute inset-0 bg-gradient-to-l  from-transparent via-[#b5b5b5] to-[#e8c39e] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      {/**titulo */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          <div className=" delay-100">Ver</div>
                          <div className=" translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                            Proyecto
                          </div>
                          {/**icono */}
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;

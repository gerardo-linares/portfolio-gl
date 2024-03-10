"use client";
//icons
import { useState } from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiMongodb,
  SiFirebase,
  SiExpress,
  SiPostman,
  SiHandlebarsdotjs,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "Herramientas",
    info: [
      {
        title: "Desarrollo Web",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: "Backend",
        icons: [
          ,
          <FaNodeJs />,
          <SiExpress />,
          <SiPostman />,
          <SiHandlebarsdotjs />,
        ],
      },
      {
        title: "Database",
        icons: [<SiMongodb />, <SiFirebase />],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma />],
      },
    ],
  },

  {
    title: "Habilidades",
    info: [
      {
        title: "Apps",
        stage: "Aplicaciones Webs, Ecommerce , Gestión",
      },
      {
        title: "Integraciones",
        stage: " MercadoPago, Chat, Animaciones avanzadas",
      },
      {
        title: "SEO",
        stage: "Tecnicas y Estrategias para los motores de busqueda",
      },
      {
        title: "Desarrollo Web",
        stage: " Websites, Landing Pages",
      },
      {
        title: "Maquetación",
        stage: "Estructura, Estilos, Posicionamiento, Full Responsive ...",
      },
      {
        title: "Diseños - Interface",
        stage: "Wireframes, mostrando al usuario una vista previa.",
      },
    ],
  },
  {
    title: "Formación",
    info: [
      {
        title: "Angular - Academia Coderhouse",
        stage: "2024",
      },
      {
        title: "Backend Node.js | Express | Mongodb - Academia Coderhouse",
        stage: "2023",
      },
      {
        title: "React - Academia Coderhouse",
        stage: "2022",
      },
      {
        title: "Curso de Javascript - Academia Coderhouse",
        stage: "2022",
      },
      {
        title: "Curso de Desarrolo Web - Academia Coderhouse",
        stage: "2022",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 ">
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="h2">
            Dos años de experiencia en{" "}
            <span className="text-accent">Desarrollo</span>Web
          </h2>
          <p className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
            Encontré en la programación un mundo que me lleva a estar
            constantemente motivado por aprender y trabajar en proyectos donde
            pueda crecer profesionalmente. Soy una persona comprometida y con
            una atención especial a los detalles.
          </p>
        </div>
        <div className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className=" py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max items-center text-white/60"
                >
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {" "}
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div className="text-2xl " key={itemIndex}>
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

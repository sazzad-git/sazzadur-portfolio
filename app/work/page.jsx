"use client";

import { useState } from "react";
import "swiper/swiper-bundle.css";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
// import Swiper from "swiper";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// import { SwiperSlide } from "swiper/react";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project",
    description:
      "Ema John Shop is a custom-built e-commerce platform created using React and Firebase, designed for a smooth and secure online shopping experience. Developed with cutting-edge technology, the website offers a user-friendly interface, fast loading times, and seamless navigation.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "React" },
      { name: "firebase" },
    ],
    image: "/assets/work/thumb1.png",
    live: "https://ema-john-firebase.vercel.app/",
    github: "https://github.com/sazzad-git/ema-john-firebase",
  },
  {
    num: "02",
    category: "fullstack",
    title: "project",
    description:
      "Kella Kendra Media House is an innovative digital platform built with React and Node.js, showcasing the creative excellence of a modern media agency. Designed for speed, scalability, and interactivity, the website offers a seamless user experience that highlights the agency's expertise in film production, digital content creation, and storytelling.",
    stack: [{ name: "React" }, { name: "Tailwind.css" }, { name: "Node.js" }],
    image: "/assets/work/thumb2.png",
    live: "https://kalla-kendra-disover-updatephoto-test.netlify.app/",
    github: "https://github.com/sazzad-git/kalla-kendra-3",
  },
  {
    num: "03",
    category: "frontend",
    title: "project",
    description:
      "Gaan-player is a sleek and intuitive audio song player website developed using Next.js. Designed for music lovers, Gaan-player offers a seamless and responsive interface for streaming your favorite tracks. With Next.js ensuring fast performance and server-side rendering, the platform provides a smooth user experience across all devices.",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }],
    image: "/assets/work/thumb3.png",
    live: "https://sazzad-gaan-player.netlify.app/",
    github: "https://github.com/sazzad-git/gaan-player",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 "
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none ">
            <div className="flex flex-col gap-[30px] h-[50%] ">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize ">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white">{project.description}</p>
              {/* stock */}
              <ul className=" flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className=" text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* button */}
              <div className="flex items-center gap-4">
                {/* live project */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5  flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button*/}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5  flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects?.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-contain"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none "
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all "
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;

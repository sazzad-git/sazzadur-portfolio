"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";

import { BsFiletypeScss } from "react-icons/bs";
import {
  FaAngular,
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaVuejs,
} from "react-icons/fa";

import { SiNextdotjs, SiRedux, SiTailwindcss } from "react-icons/si";

// about data
const about = {
  title: "About Me",
  description:
    "Highly seasoned and reliable entry-level web Designer with a strong work ethic and customer service and satisfaction record. Adept multitasker capable of bringing simultaneous web page creation and completion with full accuracy and efficiency. May update web style sheets and pages regularly and as needed. Prepare site update reports for regular submission to management.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Sazzadur Rahman",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+88) 01799530966",
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years",
    },
    {
      fieldName: "Skype",
      fieldValue: "sazzad013",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Bangladeshi",
    },
    {
      fieldName: "Email",
      fieldValue: "sazzadurrahman000@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "English, Bangla",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: `I am a skilled frontend developer with a strong foundation in HTML, CSS, SCSS, JavaScript, and a wide range of modern frameworks and tools including React, Next.js, Vue, Nuxt, Bootstrap, and Tailwind. I have extensive experience building responsive and interactive websites, utilizing best practices to create efficient, user-friendly designs. Over the years, I have successfully developed and launched multiple projects, showcasing my proficiency in both design and development.
    
    I have also gained valuable experience working with Xciteducation Worldwide (Remote) and SoftlabIt, where I contributed to various web projects, collaborating with teams to deliver high-quality digital solutions. My expertise spans across different industries and client requirements, ensuring that I stay updated with the latest trends and technologies in the frontend development space`,
  items: [
    {
      company: "Softlab IT | A global Software development company",
      position: "React app developer",
      duration: "2023 November- 2024 February",
    },
    {
      company: "XcitEducation Worldwide",
      position: "React app developer",
      duration: "2023",
    },
  ],
};
// experience data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description: `I have a diverse educational background in web development and programming, built through a combination of formal courses and self-directed learning. I have completed courses such as Programming Hero, the Reactive Acceleration course by Learn with Sumit, and earned the Meta Front-End Developer Professional Certificate on Coursera.

 In addition to structured learning, I continuously enhance  my skills through platforms like YouTube, Google, Next  Ninja, MDN Web Docs, and W3Schools, keeping up with the  latest advancements in web development. I am also proud to  be a graduate of Dhaka College, which laid the foundation  for my technical and professional growth.`,
  items: [
    {
      company: "Learn with sumit",
      position: "Reactive Acceleration",
      duration: "2023-2024",
    },
    {
      company: "Online Course Platform",
      position: "Programing-hero",
      duration: "2022-2023",
    },
    {
      company: "coursera Online Course Platform Meta",
      position: "frontend professional certificate",
      duration: "2023",
    },
  ],
};

// Skills data
const skills = {
  title: "My skills",
  description:
    "Highly seasoned and reliable entry-level web Designer with a strong work ethic and customer service and satisfaction record. Adept multitasker capable of bringing simultaneous web page creation and completion with full accuracy and efficiency. May update web style sheets and pages regularly and as needed. Prepare site update reports for regular submission to management.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <BsFiletypeScss />,
      name: "Scss",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiRedux />,
      name: "redux.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <FaAngular />,
      name: "Angular",
    },
    {
      icon: <FaVuejs />,
      name: "vue.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

// import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className=" bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 "
                        >
                          <span className=" text-accent">{item.duration}</span>
                          <h3 className=" text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ">
                            {item.position}
                          </h3>
                          <div className=" flex items-center gap-3">
                            {/* dot */}
                            <span className=" w-[6px] h-[6px] rounded-full bg-accent "></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education?.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className=" bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 "
                        >
                          <span className=" text-accent">{item.duration}</span>
                          <h3 className=" text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ">
                            {item.position}
                          </h3>
                          <div className=" flex items-center gap-3">
                            {/* dot */}
                            <span className=" w-[6px] h-[6px] rounded-full bg-accent "></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className=" flex flex-col gap-[30px] ">
                <div className=" flex flex-col gap-[30px] text-center xl:text-left ">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className=" max-w-[600px] text-white/60 mx-auto xl:mx-0 ">
                    {skills.description}
                  </p>
                </div>
                <ul className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] ">
                  {skills?.skillList?.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group ">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px] ">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 ">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;

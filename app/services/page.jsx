"use client";

import { BsArrowDownRight } from "react-icons/bs";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Build responsive and dynamic websites tailored to your needs.",
    href: "https://docs.google.com/document/d/1SFf8pwplLKkkXWcgq5j7e8oupUkF7wH2BtWaKc4upH0",
  },
  {
    num: "02",
    title: "SEO",
    description:
      "search engine optimization—is helping search engines understand your content, and helping users find your site.",
    href: "https://example.com/graphic-design",
  },
  {
    num: "03",
    title: "Logo design",
    description:
      "Enhance your online presence and reach your target audience effectively.",
    href: "https://example.com/digital-marketing",
  },
  {
    num: "04",
    title: "Content Creation",
    description:
      "Produce high-quality content that engages and informs your audience.",
    href: "https://example.com/content-creation",
  },
];

const Services = () => {
  return (
    <section className="min-h-[88vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { DM_Sans } from "next/font/google";
import "swiper/css";
import { basePath } from "@/lib/utils";
import { motion } from "framer-motion";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, x: -50 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
    },
  },
};

const Introdution = ({
  subtitle,
  title,
  description,
  list,
  isReverse = false,
}: {
  isReverse?: boolean;
  subtitle?: string;
  title?: string;
  description?: string;
  list?: string[];
}) => {
  return (
    <div className="container my-20">
      <motion.div
        className={`flex flex-row gap-20 ${
          isReverse ? "flex-row-reverse" : "flex-row"
        }`}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="left w-3/5 overflow-hidden"
          variants={imageVariants}
        >
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="w-full h-full"
          >
            <SwiperSlide>
              <Image
                src={`${basePath}/images/sushi/introduction-1.jpg`}
                alt="Introduction 1"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={`${basePath}/images/sushi/introduction-2.jpg`}
                alt="Introduction 2"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </motion.div>
        <motion.div className="right w-2/5" variants={textVariants}>
          <h2
            className={`${dmSans.className} uppercase text-gray-500 tracking-widest text-md`}
          >
            {subtitle}
          </h2>
          <h1 className="text-5xl uppercase line-height-1 font-bold my-5 leading-[1.2]">
            {title}
          </h1>
          <h4
            className={`${dmSans.className} text-gray-400`}
            dangerouslySetInnerHTML={{ __html: description || "" }}
          ></h4>
          <ul className="list-disc list-inside my-5 uppercase font-semibold space-y-4">
            {list?.map((item, index) => (
              <motion.li variants={listItemVariants} key={index}>
                {item}
              </motion.li>
            ))}
          </ul>
          <motion.button
            className="button-style-1 uppercase mt-10"
            variants={buttonVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Read More
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Introdution;

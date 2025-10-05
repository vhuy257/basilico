"use client";
import React from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { basePath } from "@/lib/utils";

const AboutTwo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const data = [
    {
      image: `${basePath}/images/sushi/service-1.png`,
      title: "Authentic taste",
      imageWidth: 62,
      imageHeight: 62,
      description:
        "Our dishes adhere to the Japanese virtue of serving natural and healthy meals. Fresh and high quality ingredients.",
    },
    {
      image: `${basePath}/images/sushi/service-2.png`,
      title: "PREMIUM INGREDIENTS",
      imageWidth: 47,
      imageHeight: 47,
      description:
        "Our dishes adhere to the Japanese virtue of serving natural and healthy meals. Fresh and high quality ingredients.",
    },
    {
      image: `${basePath}/images/sushi/service-3.png`,
      title: "CREATIVE MENU",
      imageWidth: 36,
      imageHeight: 51,
      description:
        "Our dishes adhere to the Japanese virtue of serving natural and healthy meals. Fresh and high quality ingredients.",
    },
  ];

  return (
    <div ref={ref} className="container mx-auto grid grid-cols-2 gap-8 max-w-6xl">
      <motion.div 
        className="one bg-black flex flex-col gap-8 items-center justify-center pt-[100px px-[50px]"
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="text-white flex flex-row gap-8 items-center justify-center text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.2,
              ease: "easeOut" 
            }}
          >
            <motion.div 
              className="image w-[150px]"
              initial={{ scale: 0.8, rotate: -10 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0.8, rotate: -10 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.2 + 0.3,
                ease: "easeOut" 
              }}
            >
              <Image src={item.image} alt={item.title} width={item.imageWidth} height={item.imageHeight} className="object-contain" />
            </motion.div>
            <motion.div 
              className="content flex flex-col gap-2"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.2 + 0.4,
                ease: "easeOut" 
              }}
            >
              <h1 className="uppercase text-2xl">{item.title}</h1>
              <p className="py-2 text-lg rounded-md">{item.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div 
        className="two bg-gray-200"
        initial={{ opacity: 0, x: 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <motion.div
          initial={{ scale: 1.1 }}
          animate={isInView ? { scale: 1 } : { scale: 1.1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <Image src={`${basePath}/images/sushi/about-2.jpg`} alt="about-2" width={570} height={634} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutTwo;

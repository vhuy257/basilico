"use client";
import React from "react";
import { DM_Sans } from "next/font/google";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { basePath } from "@/lib/utils";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 container flex items-center gap-8 mx-auto relative mt-10">
      <motion.div 
        className="img-section relative w-[758px] h-[689px] min-w-[758px]"
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <Image
            src={`${basePath}/images/sushi/text-1.png`}
            alt="about"
            width={500}
            height={200}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.8, rotate: -5 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="absolute z-20 bottom-0 right-0"
        >
          <Image
            src={`${basePath}/images/sushi/about-1.jpg`}
            alt="about"
            width={500}
            height={500}
          />
        </motion.div>
      </motion.div>
      <motion.div 
        className="container ml-10 relative z-20"
        initial={{ opacity: 0, x: 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <motion.h1
          className={`${dmSans.className} text-sm text-gray-500 font-thin uppercase font-bold`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        >
          About Restaurant
        </motion.h1>
        <motion.h1 
          className="uppercase font-bold text-5xl mt-4 tracking-wider leading-10 mb-5"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        >
          quintessence <br />{" "}
          <span className="mt-5 block">of Japanese cuisine</span>
        </motion.h1>
        <motion.p
          className={`${dmSans.className} text-md text-gray-500 mt-4 max-w-[500px] my-10`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        >
          Sushi Kei - the word Kei means joy, happiness in Japanese. Sushi Kei
          evokes the feeling of joy, excitement and the desire to create the
          highest satisfaction for diners when enjoying fresh and selected
          Japanese dishes at the restaurant. Sushi is balanced between the sour
          taste of vinegar, the characteristic sweetness of fresh fish meat and
          the pungent taste of mustard sauce.
        </motion.p>
        <motion.button 
          className="button-style-1 mt-4 uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Click to read more
        </motion.button>
      </motion.div>
    </section>
  );
};

export default About;

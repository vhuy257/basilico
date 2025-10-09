"use client";
import React, { useEffect, useRef } from "react";
import { DM_Sans } from "next/font/google";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

interface CounterItemProps {
  number: number;
  title: string;
}

const CounterItem = ({ number, title }: CounterItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, number, {
        duration: 2,
        ease: "easeOut",
      });

      return animation.stop;
    }
  }, [isInView, count, number]);

  return (
    <div className="item" ref={ref}>
      <motion.h2 className="text-6xl font-bold">
        {rounded}
      </motion.h2>
      <span className={`text-gray-700 uppercase my-5 tracking-wider mt-5 font-semibold block ${dmSans.className}`}>
        {title}
      </span>
    </div>
  );
};

const Counter = () => {
  const counters = [
    {
      number: 240,
      title: "Clients Every Day",
    },
    {
      number: 1450,
      title: "Order Delivered",
    },
    {
      number: 12,
      title: "hygiene certificate",
    },
    {
      number: 3260,
      title: "happy customer",
    },
  ];

  return (
    <div>
      <div className="container text-center flex flex-row justify-evenly mx-auto items-center gap-20 my-20 border-b border-gray-200 pb-10">
        {counters.map((counter, index) => (
          <CounterItem key={index} number={counter.number} title={counter.title} />
        ))}
      </div>
    </div>
  );
};

export default Counter;

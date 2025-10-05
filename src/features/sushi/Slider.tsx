"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { basePath } from "@/lib/utils";
import Image from "next/image";
import { Zen_Old_Mincho } from "next/font/google";

const zenOldMincho = Zen_Old_Mincho({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Slider = () => {
  const swiperRef = useRef<any>(null);

  return (
    <div className="relative lg:max-w-[1791px] lg:mx-auto">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-full mt-5"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {Array.from({ length: 3 }).map((_, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <div className="flex items-center justify-center w-full h-full relative">
                <Image
                  src={`${basePath}/images/sushi/bg-home-1.jpg`}
                  alt="slider"
                  width={1791}
                  height={771}
                  className="object-contain"
                />
              </div>
              <div className="absolute top-0 left-0 w-full -mt-20 h-full flex flex-col items-center justify-center text-center">
                <div className="text-3xl font-bold text-white mb-4 font-thin tracking-wider mb-5">
                  <div className={`flex flex-col items-center space-y-2 ${zenOldMincho.className}`}>
                    <span>和</span>
                    <span>の</span>
                    <span>味</span>
                  </div>
                </div>
                <h1 className="text-4xl md:text-8xl font-bold text-white mb-6 tracking-wider mt-10">
                  Sushi.
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <button 
        className="swiper-button-prev-custom pr-0 w-[150px] text-right absolute left-0 top-1/2 transform text-lg -translate-y-1/2 z-20 uppercase tracking-wide text-white p-3 transition-all duration-300 backdrop-blur-sm border-b border-white"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        Previous
      </button>
      
      <button 
        className="swiper-button-next-custom w-[150px] pl-0 text-left absolute right-0 top-1/2 transform text-lg -translate-y-1/2 z-20 text-white p-3 transition-all duration-300 backdrop-blur-sm border-b border-white uppercase tracking-wide"
        onClick={() => swiperRef.current?.slideNext()}
      >
        Next
      </button>
      
      <div className="w-full bg-black z-10 flex items-center justify-center py-10">
        <ul className="intro text-white flex gap-10 uppercase">
            <li>347-768-3094</li>
            <li>basilicojapan@gmail.com</li>
            <li>open 8am - 21pm, holiday: closed</li>
            <li>1823 65th Ave, Greeley, Colorado(CO), 80634</li>
        </ul>
      </div>
    </div>
  );
};

export default Slider;

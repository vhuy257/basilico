import React from "react";
import { basePath } from "@/lib/utils";
import Image from "next/image";
import { DM_Sans } from "next/font/google";
import Link from "next/link";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Menu = () => {
  return (
    <div className="our-menu mt-20 relative">
      <Image
        src={`${basePath}/images/sushi/bg-our-menu.jpg`}
        alt="bg-our-menu"
        width={1920}
        height={1080}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div
        className={`wrap container mx-auto grid grid-cols-3 items-center bg-cover bg-center bg-no-repeat p-[120px_75px_50px_100px] text-white relative z-10`}
      >
        <div className="left flex">
          <div className="text-special text-3xl w-[min-content]">
            あ ら ゆ る 味 を
          </div>
          <div className="content">
            <div className="heading-section style-1 pl-10">
              <span className="sub sub-before uppercase text-md text-gray-500 mb-10">
                our menu restaurant
              </span>
              <div className="main wow uppercase text-4xl font-bold mt-4 mb-10">
                CHEF RECOMMENDED
              </div>
              <div className={`line ${dmSans.className} max-w-[500px]`}>
                Sushi is balanced between the sour taste of vinegar, the
                characteristic sweetness of fresh fish meat and the pungent
                taste of mustard sauce, enough fresh and delicious.
              </div>
              <Link href="#" className="button-style-1 white mt-10">
                VIEW ALL MENU
              </Link>
            </div>
          </div>
        </div>

        <div className="center text-center justify-self-center">
            <Image src={`${basePath}/images/sushi/our-menu-2.png`} alt="img-our-menu" width={312} height={677} />
        </div>

        <div className="right">
        </div>
      </div>
      <div className="bottom"></div>
    </div>
  );
};

export default Menu;

import { basePath } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Footer = () => {
  return (
    <div className="footer bg-black text-white py-10">
      <div className="container grid grid-cols-6 mx-auto max-w-[1791px]">
        <div className="left text-center">
          <div className="flex flex-col gap-2 text-3xl">
            <span>司</span>
            <span>の</span>
            <span>美</span>
            <span>味</span>
            <span>し</span>
            <span>さ</span>
          </div>
        </div>
        <div className="center text-center col-span-4">
          <Image
            src={`${basePath}/images/sushi/logo-footer.webp`}
            alt="logo"
            width={163}
            height={154}
            className="mx-auto"
          />
          <div className="text-center">
            <div className="top">
              <ul className="flex flex-row gap-10 uppercase justify-center my-10">
                <li>book a table </li>
                <li>about us</li>
                <li>MENU</li>
                <li>blog</li>
                <li>CONTACT</li>
              </ul>
              <p
                className={`text-center ${dmSans.className} text-md text-gray-400`}
              >
                Maecenas nisl augue, tempor eu ex non, ornare porttitor velit.
                Donec lobortis elit at ante mollis dapibus. Sed a blandit nisi,
                a vehicula arcu.
              </p>
            </div>
            <div className="bottom">
              <div className="flex flex-row gap-10 uppercase justify-center my-10">
                <div>347-768-3094</div>
                <div>basilicojapan@gmail.com</div>
                <div>open 8am - 21pm, holiday: closed</div>
                <div>1823 65th Ave, Greeley, Colorado(CO), 80634</div>
              </div>
            </div>
          </div>

          <div className="copyright">
            <p>Copyright © 2022 7iquid. All Rights Reserved.</p>
          </div>
        </div>
        <div className="right text-center">
          <div className="flex flex-col gap-2 text-3xl">
            <span>司</span>
            <span>の</span>
            <span>美</span>
            <span>味</span>
            <span>し</span>
            <span>さ</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { TiSocialTwitter } from "react-icons/ti";
import { TbMailFilled } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import Link from "next/link";

const Social = () => {
  return (
    <ul className="flex gap-5 social-footer">
      <li>
        <Link href="#">
          <BiLogoFacebook />
        </Link>
      </li>
      <li>
        <Link href="#">
          <TiSocialTwitter />
        </Link>
      </li>
      <li>
        <Link href="#">
          <TbMailFilled />
        </Link>
      </li>
      <li>
        <Link href="#">
          <IoLogoInstagram />
        </Link>
      </li>
    </ul>
  );
};

export default Social;

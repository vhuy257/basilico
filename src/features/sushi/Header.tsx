"use client";
import Image from "next/image";
import Link from "next/link";
import { basePath } from "@/lib/utils";
import { Squeeze as Hamburger } from "hamburger-react";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Pages", href: "/pages" },
  { label: "Menu", href: "/menu" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="py-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="logo">
            <Image
              src={`${basePath}/images/sushi/logo.png`}
              alt="logo"
              width={183}
              height={55}
            />
          </div>
          <div className="menu">
            <ul
              className={`p-0 flex gap-[4.5rem] items-center uppercase font-medium text-lg  menu-primary-menu ${oswald.className}`}
            >
              {menuItems.map((item, index) => (
                <li key={item.label} className="relative">
                  <Link
                    href={item.href}
                    className="relative"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="hamburger">
            <Hamburger />
          </div>
        </div>
      </div>
    </header>
  );
}

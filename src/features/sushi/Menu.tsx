import React from "react";
import { basePath } from "@/lib/utils";
import Image from "next/image";
import { DM_Sans } from "next/font/google";
import Link from "next/link";
import {
  Tabs,
  TabsContent,
  TabsContents,
  TabsList,
  TabsTrigger,
} from "@/components/animate-ui/components/radix/tabs";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dataContent = [
  {
    title: "Aburi Eel with Miso Cream Cheese",
    price: "$42.15",
    description: "Free range eggs, with bacon, chorizo, roasted roma tomatoes.",
  },
  {
    title: "Albacore Tuna Bintoro",
    price: "$30.18",
    description: "Free range eggs, with bacon, chorizo, roasted roma tomatoes.",
  },
  {
    title: "Premium American Beef*",
    price: "$22.52",
    description: "Free range eggs, with bacon, chorizo, roasted roma tomatoes.",
  },
  {
    title: "Seared Beef with Yakiniku Sauce",
    price: "$42.15",
    description: "Free range eggs, with bacon, chorizo, roasted roma tomatoes.",
  },
  {
    title: "Albacore Tuna Bintoro",
    price: "$30.18",
    description: "Free range eggs, with bacon, chorizo, roasted roma tomatoes.",
  },
  {
    title: "Premium American Beef*",
    price: "$22.52",
    description: "Free range eggs, with bacon, chorizo, roasted roma tomatoes.",
  },
  {
    title: "Seared Beef with Yakiniku Sauce",
    price: "$42.15",
    description: "Free range eggs, with bacon, chorizo, roasted roma tomatoes.",
  },
];

const Menu = () => {
  const TabContent = ({ data }: any) => (
    <div className="text-white">
      <div className="title flex justify-between py-4">
        <h3 className={`text-lg font-bold uppercase`}>{data.title}</h3>
        <p>{data.price}</p>
      </div>
      <p className={`py-2 border-t border-slate-700 ${dmSans.className} text-md  text-gray-400`}>{data.description}</p>
    </div>
  );

  return (
    <div className="our-menu mt-20 relative">
      <div
        className={`wrap mx-auto grid grid-cols-5 items-center bg-cover bg-center bg-no-repeat p-[120px_75px_50px_100px] text-white relative z-10`}
      >
        <div className="left flex col-span-2">
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
          <Image
            src={`${basePath}/images/sushi/our-menu-2.png`}
            alt="img-our-menu"
            width={312}
            height={677}
          />
        </div>
        <div className="right col-span-2 max-w-[500px]">
          <Tabs defaultValue="sushi">
            <TabsList className="flex justify-center gap-10">
              <TabsTrigger
                value="sushi"
                className="text-xl uppercase font-thin"
              >
                Sushi
              </TabsTrigger>
              <TabsTrigger value="soup" className="text-xl uppercase font-thin">
                Soup & Noodle
              </TabsTrigger>
              <TabsTrigger
                value="sashimi"
                className="text-xl uppercase font-thin"
              >
                Sashimi
              </TabsTrigger>
              <TabsTrigger
                value="desert"
                className="text-xl uppercase font-thin"
              >
                Desert
              </TabsTrigger>
            </TabsList>
            <TabsContents className="py-6 max-h-[450px]">
              <TabsContent value="sushi" className="flex flex-col gap-6">
                {dataContent.map((item, index) => (
                  <TabContent key={index} data={item} />
                ))}
              </TabsContent>
              <TabsContent value="soup" className="flex flex-col gap-6">
                {dataContent.map((item, index) => (
                  <TabContent key={index} data={item} />
                ))}
              </TabsContent>
              <TabsContent value="sashimi" className="flex flex-col gap-6">
                {dataContent.map((item, index) => (
                  <TabContent key={index} data={item} />
                ))}
              </TabsContent>
              <TabsContent value="desert" className="flex flex-col gap-6">
                {dataContent.map((item, index) => (
                  <TabContent key={index} data={item} />
                ))}
              </TabsContent>
            </TabsContents>
          </Tabs>
        </div>
      </div>
      <div className="bottom"></div>
    </div>
  );
};

export default Menu;

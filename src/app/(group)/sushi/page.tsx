import {
  Introdution,
  Slider,
  About,
  AboutTwo,
  Menu,
  Counter,
} from "@/features/sushi";
import Testimonial from "@/features/sushi/Testimonial";

export default function SushiPage() {
  return (
    <>
      <Slider />
      <About />
      <AboutTwo />
      <Menu />
      <Introdution
        subtitle="restaurant space"
        title="Bring Japanese atmosphere to your dining table"
        description="With the spirit of bringing the quintessence of Japanese cuisine to every party, each dish at Sushi World is decorated and presented in a sophisticated and serious way, bringing beauty and professionalism."
        list={[
          "Japanese style warm space",
          "Immerse yourself in every melody of music and food",
          "Perfect space for private event",
        ]}
      />
      <Introdution
        isReverse
        title="Chiba Kazuhiko A talented chef with long experience"
        subtitle="Culinary Expert"
        description="Chiba expert Kazuhiko always remembers that: 'Eat well for health'. That's why at Sushi Kei, the way to cook dishes always limits the use of sugar and does not use chemical spices, focusing only on highlighting the freshness and natural purity of the food. <br/>  Chef Chiba's dishes conquer all senses with bold Japanese flavors and meticulous and delicate layout, and encapsulates the chef's love for the profession."
      />
      <Counter />
      <Testimonial />
    </>
  );
}

import Header from "@/features/sushi/Header";
import "./global.css";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Sushi - Basilico Restaurant",
  description: "Sushi page - Basilico Restaurant Theme",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={oswald.className}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}

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
        className=""
      >
        {children}
      </body>
    </html>
  );
}

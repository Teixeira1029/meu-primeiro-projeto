import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Meu primeiro projeto",
  description: "Pagina sobre futebol",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

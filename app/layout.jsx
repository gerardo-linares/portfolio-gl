import "./globals.css";
import { Sora } from "next/font/google";
import Nav from "./components/Nav";
import Header from "./components/Header";
import TopLeftImg from "./components/TopLeftImg";

const sora = Sora({
  subsets: ["latin"],
  variable: ["--font-sora"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Portfolio GL",
  description: "Creado con Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} page bg-site text-white bg-cover bg-no-repeat font-sora relative`}
      >
        <TopLeftImg />
        <Nav />
        <Header />
        {children}
      </body>
    </html>
  );
}

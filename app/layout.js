import { Geist, Geist_Mono, Eczar } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Contact from "@/components/Contact";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Achintha Prabasha | Front-end Web Developer Portfolio",
  description:
    "Hi, I'm Achintha Prabasha, a highly skilled front-end web developer from Sri Lanka. I specialize in building responsive, SEO-optimized websites using JavaScript, React, Tailwind CSS, HTML5, and CSS3. Explore my portfolio to see my latest work and projects.",
  keywords:
    "Front-end developer, Web developer, Responsive websites, React JS, Tailwind CSS, HTML5, CSS3, JavaScript, Sri Lanka, Achintha Prabasha portfolio",
  author: "Achintha Prabasha",
};

export const getEczar = Eczar({
  variable: "--font-eczar",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${getEczar.variable} antialiased`}
      >
        {children}
        <Contact />
        <div className="w-full bg-white px-3 flex justify-between items-center py-2">
          <p className="text-black capitalize text-xs">
            design anad develoepd by{" "}
            <span className="font-bold">Achintha Prabasha</span>
          </p>
          <p className="text-xs text-black">
            <span className="font-bold">thefrontenddev33@gmail.com</span>
          </p>
        </div>
      </body>
    </html>
  );
}

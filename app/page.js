import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main className="">
      <NavBar />
      <Hero />
      <About />
      <Projects />
    </main>
  );
}

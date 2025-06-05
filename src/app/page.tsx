import Image from "next/image";
import Hero from "./components/hero";
import Projects from "./components/projects";
import AboutMe from "./components/aboutme";
import Contact from "./components/contact";


export default function Home() {
  return (
    <div className="grid justify-items-center font-mono">
        <Hero />
        <Projects />
        <AboutMe />
        <Contact />
      <footer className="">
      </footer>
    </div>
  );
}

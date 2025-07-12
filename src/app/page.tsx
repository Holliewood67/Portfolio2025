import Hero from "./components/hero";
import Projects from "./components/projects";
import AboutMe from "./components/aboutme";
import Contact from "./components/contact";
import Pricing from "./components/pricing";


export default function Home() {
  return (
    <div className="grid justify-items-center font-mono text-green-400">
        <Hero />
        <Projects />
        <AboutMe />
        <Pricing />
        <Contact />
      <footer className="">
      </footer>
    </div>
  );
}

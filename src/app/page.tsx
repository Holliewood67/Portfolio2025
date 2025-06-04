import Image from "next/image";
import Hero from "./components/hero";
import Projects from "./components/projects";

export default function Home() {
  return (
    <div className="grid justify-items-center">
      <main>
        <Hero />
        <Projects />
        <div>
          <h1>ABOUT ME</h1>
        </div>
        <div>
          <h1>SERVICES</h1>
        </div>
        <div>
          <h1>CONTACT ME</h1>
        </div>
      </main>
      <footer className="">
      </footer>
    </div>
  );
}

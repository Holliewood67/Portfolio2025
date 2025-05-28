import Image from "next/image";
import Hero from "./components/hero";

export default function Home() {
  return (
    <div className="grid justify-items-center">
      <main>
        <Hero />
        <div>
          <h1>This is the PROJECTS section</h1>
        </div>
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

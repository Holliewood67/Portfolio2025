'use client'
import { useInView } from 'react-intersection-observer';

export default function AboutMe() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      id="aboutMe"
      className="min-h-screen w-full flex flex-col items-center justify-center text-center bg-black text-green-400 px-4 py-16 font-mono"
    >
      <div ref={ref} className={inView ? 'slide-top' : 'opacity-0'}>
        <h2 className="text-4xl font-bold mb-8 tracking-widest neon-glow">ABOUT ME</h2>
        <p className="max-w-4xl text-lg md:text-xl leading-relaxed tracking-wide terminal-text">
          I'm <span className="text-green-300 font-bold">Ethan Cantrell</span> — a self-taught web developer, musician,
          and creative based in Tulsa, Oklahoma. I build clean, responsive websites using modern tools like
          <span className="text-green-300"> Next.js</span>, <span className="text-green-300">Tailwind CSS</span>, and
          <span className="text-green-300"> MongoDB</span>.<br /><br />

          Outside of coding, I run <span className="text-green-300">Musical Monsters</span>, a DIY artist collective
          that hosts shows, open mics, and records local talent. I bring that same love of storytelling and design into
          the sites I build — whether it’s a portfolio, small business page, or creative project.<br /><br />

          I believe good websites should be <span className="text-green-300">fast</span>, <span className="text-green-300">simple</span>,
          and actually <span className="text-green-300">fun</span> to use. If you want to work together or just say hey, feel free to reach out.
        </p>
      </div>
    </section>
  );
}

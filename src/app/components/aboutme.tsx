'use client' 
import { useInView } from 'react-intersection-observer';

export default function AboutMe(){
    
    const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // Adjust how much of the section should be visible before triggering
  });

    return(
        <section id="aboutMe" className="min-h-screen flex flex-col w-full items-center text-center justify-center bg-black text-gray-300 px-4 py-12 ">
            <div ref={ref} className={inView ? 'slide-top' : 'opacity-0'}>
                <h2 className="text-4xl font-bold mt-12 mb-12">
                    About Me
                </h2>
                <p className="max-w-4xl text-xl md:text-2xl mb-12">
                    I&apos;m Ethan Cantrell — a self-taught web developer, musician, and creative based in Tulsa, Oklahoma. I build clean, responsive websites using modern tools like Next.js, Tailwind CSS, and MongoDB.

                    Outside of coding, I run Musical Monsters, a DIY artist collective that hosts shows, open mics, and records local talent. I bring that same love of storytelling and design into the sites I build — whether it’s a portfolio, small business page, or creative project.

                    I believe good websites should be fast, simple, and actually fun to use. If you want to work together or just say hey, feel free to reach out.
                </p>
            </div>
        </section>
    )
};
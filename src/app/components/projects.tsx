'use client'
 import { useInView } from "react-intersection-observer";
import ProjectCard from "./project-card";
 
export default function Projects(){
    const projects =[
        {
            title: "My Portfolio",
            description: "This is the website that you currently looking at now, which is my web development portfolio.",
            siteLink: "",
            gitHub: "https://github.com/Holliewood67/Portfolio2025",
            image:"/images/portfolio.jpg"
        },
        {
            title: "Musical Monsters Hub",
            description: "A live booking and EPK site built with Next.js and Tailwind.",
            siteLink: "https://www.MusicalMonstersTulsa.com",
            gitHub: "https://github.com/Holliewood67/musical-monsters",
            image:"/images/mmsitepic.jpg"
        },
    ]

    const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // Adjust how much of the section should be visible before triggering
  });
    return(
        <section id="projects" className="relative w-full py-12 min-h-screen">
            <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
        >
            <source src="/videos/smoke-bg.mp4" type="video/mp4" />
        </video>
            <div ref={ref} className={inView ? 'relative slide-top max-w-6xl mx-auto' : 'max-w-6xl mx-auto opacity-0'}>
                <h2 className="text-4xl font-bold mb-12 text-center neon-glow">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, id) => (
                            <ProjectCard key={id} project={project} />                       
                    ))}
                </div>
            </div>
        </section>
    )
}
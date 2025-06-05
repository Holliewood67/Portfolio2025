export default function Projects(){
    const projects =[
        {
            title: "My Portfolio",
            description: "This is the website that you currently looking at now, which is my web development portfolio.",
            siteLink: "",
            gitHub: "https://github.com/Holliewood67/Portfolio2025",
            image:"/images/portfolio.png"
        },
        {
            title: "Musical Monsters Hub",
            description: "A live booking and EPK site built with Next.js and Tailwind.",
            siteLink: "https://www.MusicalMonstersTulsa.com",
            gitHub: "https://github.com/Holliewood67/musical-monsters",
            image:"/images/mmsitepic.png"
        },
    ]
    return(
        <section id="projects" className="py-12 px-4 bg-gray-400/25 text-white w-full">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, id) => (
                        <div key={id} className="bg-gray-400/25 hover:bg-gray-500/50 rounded-xl overflow-hidden shadow-black shadow-lg hover:shadow-2xl transition-shadow duration-360">
                            <img src={project.image} alt={project.title} className="w-full h-28 object-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-300 mb-4">{project.description}</p>
                                <div className="flex gap-8">
                                <a href={project.gitHub} target="_blank" rel="noopener" className="bg-gray-400/25 rounded-lg p-2 hover:underline" >
                                    View The Code
                                </a>
                                {project.siteLink ? 
                                                                <a href={project.siteLink} target="_blank" rel="noopener" className="bg-gray-400/25 rounded-lg p-2 hover:underline" >
                                    Visit Site
                                </a>
                                : null
                                }
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
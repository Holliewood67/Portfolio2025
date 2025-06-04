export default function Projects(){
    const projects =[
        {
            title: "Musical Monsters Hub",
            description: "A live booking and EPK site built with Next.js and Tailwind.",
            siteLink: "www.MusicalMonstersTulsa.com",
            gitHub: "https://github.com/Holliewood67/musical-monsters",
            image:"/images/mmsitepic.png"
        },
    ]
    return(
        <section id="projects" className="py-20 px-4 bg-gray-800 text-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, id) => (
                        <div key={id} className="bg-gray-700 hover:bg-gray-600 rounded-xl overflow-hidden shadow-black shadow-lg hover:shadow-2xl transition-shadow duration-360">
                            <img src={project.image} alt={project.title} className="w-full h-28 object-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-300 mb-4">{project.description}</p>
                                <a href={project.siteLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline" >
                                    Visit Site →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
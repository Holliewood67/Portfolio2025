import Image from "next/image"

type Project = {
    title: string,
    description: string,
    siteLink?: string,
    gitHub?: string,
    image:string

}

export default function ProjectCard({ project }: { project: Project}) {
    return(
        <div className="hover:bg-green-800/30 border-2 rounded-xl overflow-hidden shadow-black shadow-lg hover:shadow-2xl transition-shadow duration-360">
            <Image src={project.image} alt={project.title} width={600} height={400} className="object-cover border-b-2 border-green-400" />
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

    )
}
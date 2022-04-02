import Image from "next/image"
import Link from "next/link"

import projectGithub from '../../../public/images/project/project-github.svg'
import link from '../../../public/images/project/link.svg'
import heaxagon from '../../../public/images/tech/inner_hexa.svg'

export default function ProjectCard({project}){
    return(
        <article className="flex flex-col relative items-center justify-center text-white border-2 border-cardBorder p-10 rounded-2xl gap-10 bg-aboutBg">
            <div className="absolute -top-16 -left-10 "> 
            <div className="relative">
            <Image src={heaxagon} alt="hexagon"/>
            <div className="absolute top-0 bottom-0 left-0 right-0 m-auto flex items-center justify-center"><Image src={project.icon.src} alt={project.name} height={124} width={124} /></div>
            </div>
            </div>
            <h1 className="text-center uppercase text-xl font-primary">{project.name}</h1>
            <p className="text-center text-xl px-10">{project.description}</p>
            <div className="flex w-full flex-wrap">
                <div className="topics flex justify-around items-center flex-wrap m-auto">
                    {
                        project.keywords.map((topic)=>{
                            return (
                                <span key={topic} className="uppercase text-center px-4 py-2 rounded-3xl bg-aboutBg m-2" >{topic}</span>
                            )
                        })
                    }
                </div>
            <div className="flex items-center justify-around ml-auto gap-6 sm:m-auto sm:gap-4">
                <Link href={project.github}><a  target="_blank"><Image src={projectGithub} alt="github" /></a></Link>
                <Link href={`projects/${project.query}`}><a target="_blank"><Image src={link} alt="link" /></a></Link>
            </div>
            </div>
        </article>
    )
}
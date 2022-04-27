import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import projectGithub from '../../../public/images/project/project-github.svg'
import link from '../../../public/images/project/link.svg'

import WorkImage from "./workImage"

export default function ProjectCard({work}){
    const router = useRouter()
    return (
        <article className="flex flex-col relative items-center justify-center text-white border-2 border-cardBorder p-10 rounded-2xl gap-10 bg-aboutBg w-full sm:p-2" data-aos="zoom-in-up">
            <div className="absolute -top-16 -left-10 sm:-top-10"> 
                <WorkImage work={work} />
            </div>
            <h1 className="text-center uppercase text-xl font-primary">{work.name}</h1>
            <p className="text-center text-xl px-10 sm:px-2 sm:text-sm">{work.description}</p>
            <div className="flex w-full flex-wrap items-center just">
                <div className="topics flex justify-around items-center flex-wrap m-auto sm:hidden">
                    {
                        work.keywords.map((topic)=>{
                            return (
                                <span key={topic} className=" text-center px-4 py-2 rounded-3xl bg-aboutBg m-2 sm:px-2 sm:y-1 sm:text-sm " >{topic}</span>
                            )
                        })
                    }
                </div>
            <div className="flex items-center justify-around ml-auto gap-6 sm:m-auto sm:gap-4">
                <Link href={work.github}><a  target="_blank"><Image src={projectGithub} alt="github" /></a></Link>
                <Link href={{pathname: `${router.pathname}/[slug]`, query: {slug: work.query} }} passHref><a target="_blank"><Image src={link} alt="link" /></a></Link>
            </div>
            </div>
        </article>
    )
}
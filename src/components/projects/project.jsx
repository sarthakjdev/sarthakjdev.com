import SectionHead from "../sectionHead"
import ProjectCard from "./projectCard"
import projectData from "../../data/projects"


export default function Project({project}){
    return (
        <section className="my-20 md:mb-10 mx-20 md:mx-10 gap-y-40 flex flex-col">
            <SectionHead sectionName={'Projects'} />
            {
                projectData.map((project)=>{
                    return (
                        <ProjectCard project={project} key={project.name} />
                    )
                })
            }
        </section>
    )
}
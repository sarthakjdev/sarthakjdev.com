import SectionHead from "../sectionHead"
import ProjectCard from "./projectCard"
import projectData from "../../data/projects"

const categories = [ 'personal & freelanced', 'open source & community']

export default function Project(){
    return (
        <section className="my-20 md:mb-10 mx-20 md:mx-10 gap-y-40 flex flex-col">
            <SectionHead sectionName={'Projects'} />

            {
                categories.map((category)=>{
                    return (
                        <section key={category} className="my-8 md:mb-10 mx-20 md:mx-10 gap-y-40 flex flex-col">
                            <h2 className="uppercase text-center m-auto text-white text-4xl bold my-8 ">{category}</h2>
                            {
                                projectData.map((project)=>{
                                    if (project.catergory.toLocaleUpperCase() === category.toUpperCase()){
                                        return (
                                            <ProjectCard project={project} key={project.name} />
                                        )
                                    }
                                })
                            }
                        </section>
                    )
                })
            }


        </section>
    )
}
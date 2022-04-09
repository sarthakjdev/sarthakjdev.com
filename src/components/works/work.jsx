import SectionHead from "../sectionHead"
import ProjectCard from "./workCard"
import workData from "../../data/works"

const categories = [ 'Personal & Freelanced', 'Open Source & Community']

export default function Project(){
    return (
        <section className="my-20 md:mb-10 mx-20 md:mx-10 gap-y-10 flex flex-col">
            <SectionHead sectionName={'Projects'} />

            {
                categories.map((category)=>{
                    return (
                        <section key={category} className="my-8 md:mb-10 mx-20 md:mx-10 gap-y-20 flex flex-col">
                            <h2 className=" text-center m-auto text-white text-4xl font-extrabold my-8 ">{category}</h2>
                            {
                                workData.map((work)=>{
                                    if (work.catergory.toUpperCase() === category.toUpperCase()){
                                        return (
                                            <ProjectCard work={work} key={work.name} />
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
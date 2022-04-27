import SectionHead from "../sectionHead"
import ProjectCard from "./workCard"
import workData from "../../data/works"

export default function Project(){
    return (
        <section className="my-20 md:mb-10 mx-20 md:mx-10 gap-y-10 flex flex-col mt-32 lg:my-14">
            <SectionHead sectionName={'Products'} />
            <section className="my-20 md:mb-10 mx-20 md:mx-10 gap-y-24 flex flex-col">
                            {/* <h2 className=" text-center m-auto text-white text-4xl font-extrabold my-8 ">{category}</h2> */}
                            {
                                workData.map((work)=>{
                                        return (
                                            <ProjectCard work={work} key={work.name} />
                                        )
                                })
                            }
            </section>
        </section>
    )
}
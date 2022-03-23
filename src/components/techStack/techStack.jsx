import SectionHead from "../sectionHead"
import techData from '../../data/tech'
import TechCard from "./techCard"

export default function TechStackSection({technology}){
    return (
        <section className="flex flex-col my-40 mx-4 sm:mx-auto md:mb-10">
            <SectionHead sectionName={'Tech Stack'} />
            <div className="flex flex-wrap items-center justify-center gap-14 my-14">
            {
                techData.map((tech)=>{
                    return (
                        <TechCard tech={tech} key={tech.name} />
                    )
                })
            }
            </div>
        </section>
    )
}      
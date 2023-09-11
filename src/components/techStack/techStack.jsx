import SectionHead from "../sectionHead"
import techData from '../../data/tech'
import TechCard from "./techCard"
import { useRouter } from "next/router"
import Button from "../buttons/seeMore"

export default function TechStackSection({technology}){
    const router = useRouter()
    return (
        <section className="flex flex-col my-40 mx-4 sm:mx-auto md:mb-10 w-full" id="techstack">
            <SectionHead sectionName={'Tech Stack'} />
            <div className="flex flex-wrap items-center justify-center gap-14 my-14">
            {
                techData.map((tech, index)=>{
                    {
                        if (router.route == '/'){
                            return (
                                index < 4 && <TechCard tech={tech} key={tech.name} />
                            )
                        }else {
                            return (
                                <TechCard tech={tech} key={tech.name} />
                            )
                        }
                    }
                })
            }
            </div>
            {
                router.route == '/' && <Button url={'/about#techstack'} name={"See More"} />
            }
        </section>
    )
}      
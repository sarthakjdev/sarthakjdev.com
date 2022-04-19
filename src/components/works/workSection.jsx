import Image from "next/image"
import Link from "next/link"
import Button from "../button";
import ProjectHead from "./projectHead"
import WorkImage from "./workImage";
export default function ProjectSection({work}){
    return (
        <section className="text-white mt-32 flex  flex-col mx-14">
            <div className="flex items-center justify-around">
                <WorkImage work={work}/>
                <ProjectHead projectName={work.name} />
            </div>
            <div className="my-10">
                <p className="font-primary w-quarter_past m-auto lg:w-90">{work.detailed_desc}</p>
                <div className="flex items-center justify-center gap-6 my-14">
                    {work.github && <Button name={'GitHub'} url={work.github} />}
                    {work.live && <Button name={'Live'} url={work.live} />}
                </div>
            </div>
        </section>
    )
}
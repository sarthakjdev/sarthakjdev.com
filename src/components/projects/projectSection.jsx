import Button from "../buttons/button"
import ProjectHead from "./projectHead"

export default function ProjectSection({work}){
    return (
        <section className="text-white mt-24 flex  flex-col mx-14">
                <ProjectHead projectName={work.name} />
            <div className="my-10 flex flex-col items-center justify--center py-10 px-4 bg-aboutBg border-2 border-cardBorder rounded-xl">
                <p className="font-primary w-quarter_past m-auto lg:w-90 text-center" data-aos="fade-down">{work.detailed_desc}</p>
                <div className="flex items-center justify-center gap-6 my-14">
                    {work.github && <Button name={'GitHub'} url={work.github} />}
                    {work.live && <Button name={'Live'} url={work.live} />}
                </div>
            </div>
        </section>

    )
}
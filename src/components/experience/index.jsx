import SectionHead from "../sectionHead";
import ExperienceCard from "./experienceCard";
import experienceData from "../../data/experience";
import Button from "../buttons/seeMore";
import { useRouter } from "next/router";

export default function ExperienceSection() {
  const router = useRouter();
  return (
    <section className="my-20 md:mb-10 mx-20 md:mx-10 gap-y-10 flex flex-col mt-32 lg:my-14 w-full" id="experience">
      <SectionHead sectionName={"Experience"} />
      <section className="flex justify-evenly my-8 ">
        {experienceData.map((experience, index) => {
          {
            if (router.route == "/") {
              return index < 2 && <ExperienceCard experience={experience} key={experience.name} />;
            } else {
              return <ExperienceCard experience={experience} key={experience.name} />;
            }
          }
        })}
      </section>
      {
                router.route == '/' && <Button url={'/experience'} name={"See More"} />
            }
    </section>
  );
}

import SectionHead from "../sectionHead";
import ProjectCard from "./projectCard";
import projectsData from "../../data/works";
import Button from "../buttons/seeMore";
import { useRouter } from "next/router";

export default function Project() {
  const router = useRouter();
  return (
    <section className="my-20 gap-y-10 flex flex-col mt-32 lg:my-14 w-full m-auto" id="projects">
      <SectionHead sectionName={"Projects"} />
      <section className="flex justify-evenly md:flex-col md:gap-10 md:mt-4 m-auto w-full">
        {projectsData.map((project, index) => {
          {
            if (router.route == "/") {
              return index < 3 && <ProjectCard project={project} key={project.name} />;
            } else {
              return <ProjectCard project={project} key={project.name} />;
            }
          }
        })}
        {}
      </section>
      {
                router.route == '/' && <Button url={'/projects'} name={"See More"} />
            }
    </section>
  );
}

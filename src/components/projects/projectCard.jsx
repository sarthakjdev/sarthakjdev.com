import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../buttons/projectButton";

import Hexa from "../../../public/images/project/hexa.svg";

export default function ProjectCard({ project }) {
  return (
    <Link href={`/projects/${project.query}`}>
      <a >
      <article className="flex flex-col items-center justify-center">
        <div className="relative">
            <Image src={Hexa} alt={'hexa'} />
            <div className="absolute top-10 right-0 bottom-0 left-0 m-auto">
                <div className="flex items-center justify-center gap-4">
                <Image src={project.icon.src} height={100} width={100} alt={project.name} />
                </div>
                <p className="text-white uppercase font-bold text-lg text-center">{project.name}</p>
            </div>
        </div>
        <div className="flex gap-4">
          <Button name={'Visit'} url={project.live} />
          <Button name={'Github'} url={project.github} />
        </div>
    </article>
      </a>
    </Link> 
  );
}

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../buttons/projectButton";

export default function ExperienceCard({ experience }) {
  return (
    <article className="flex gap-4  items-center justify-center w-full md:flex-col">
        <div className="flex flex-col md:mr-auto">
        <span><Image src={experience.icon.src} alt={experience.name} height={experience.icon.height} width={experience.icon.width} /></span>
        <h2 className="text-white font-semibold text-xl w-fit tracking-wide ">{experience.name}</h2>
        </div>
        <hr className="bg-white"  />
        <p className="text-white w-half">
          {experience.description}
        </p>
    </article>
  );
}

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../buttons/projectButton";

export default function ExperienceCard({ experience }) {
  return (
    <article className="flex items-center justify-evenly w-full">
        <Image src={experience.icon.src} alt={experience.name} height={experience.icon.height} width={experience.icon.width} />
        <h2 className="text-white font-bold text-3xl w-fit">{experience.name}</h2>
    </article>
  );
}

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../buttons/projectButton";

export default function ExperienceCard({ experience }) {
  return (
    <article className="flex flex-col items-center justify-center">
        <Image src={experience.icon.src} alt={experience.name} height={experience.icon.height} width={experience.icon.width} />
    </article>
  );
}

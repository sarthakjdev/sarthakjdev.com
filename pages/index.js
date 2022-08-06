import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

import HeroSection from "../src/components/hero/hero";
import AboutSection from "../src/components/about/about";
import TechStackSection from "../src/components/techStack/techStack";
import ProjectSection from "../src/components/projects/project";
import BlogSection from "../src/components/blogs/blog";
import ExperienceSection from "../src/components/experience/index";

export default function Home() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>Sarthak Jain</title>
        <meta name="description" content="sarthak's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <TechStackSection />
        <ProjectSection />
        <BlogSection />
      </main>
    </div>
  );
}

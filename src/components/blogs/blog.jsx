import BlogCard from "./blogCard";
import SectionHead from "../sectionHead";
import { useRouter } from "next/router";

export default function BlogSection({ blogs }) {
  const router = useRouter();
  return (
    <section>
      <SectionHead sectionName={"Blogs"} key={"blogSection"} />
      {blogs.map((blog) => {
        return 
        (<BlogCard blog={blog} />
        )
      })}
    </section>
  );
}

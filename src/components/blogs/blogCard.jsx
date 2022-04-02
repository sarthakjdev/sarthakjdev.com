import Image from "next/image";
import Link from "next/link";
import Button from "../button";

export default function BlogCard({blog}){
    return (
        <Link href={blog.url}>
        <a target="_blank">
            <section>
                <div>
                    <Image src={blog.thumbnail} alt={blog.title} />
                </div>
                <div>
                <h1>{blog.topic}</h1>
                <h2>{blog.title}</h2>
                <Button url={blog.url} name="READ" />
                </div>
            </section>
        </a>
        </Link>
    )
}
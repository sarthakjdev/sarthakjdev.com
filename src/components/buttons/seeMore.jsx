import Link from "next/link"

export default function Button({url, name}){
    return (
        <Link href={url}><a className="uppercase text-white flex items-center justify-center text-center text-md font-bold bg-gradient-to-r from-primary to-primary2 rounded-3xl px-8 py-2 w-fit m-auto border-2 border-mainbg hover:border-white hover:bg-none transition-all duration-500" data-aos="zoom-in-down">{name}</a></Link>
    )
}
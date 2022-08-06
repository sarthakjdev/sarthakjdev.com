import Link from "next/link"

export default function Button({url, name, downloadAllow}){
    return (
        <Link href={url}><a target="_blank" className="uppercase text-white flex items-center justify-center text-center text-md font-bold bg-gradient-to-r from-primary to-primary2 rounded-3xl px-8 py-2 m-auto border-2 border-mainbg hover:border-white hover:bg-none transition-all duration-500 w-fit" data-aos="zoom-in-down" download={downloadAllow? true: false} >{name}</a></Link>
    )
}
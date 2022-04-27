import Link from "next/link"
import Image from "next/image"
import twitterIcon from '../../../public/images/socials/twitter.svg'
import githubIcon from '../../../public/images/socials/github.svg'
import linkedinIcon from '../../../public/images/socials/linkedin.svg'
import path from 'path'

const socials = [
    {
        name: 'twitter',
        path: 'https://twitter.com/sarthakjdev',
        icon: twitterIcon
    },
    {
        name: 'github',
        path: 'https://github.com/sarthakjdev',
        icon: githubIcon
    },
    {
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/sarthakjdev/',
        icon: linkedinIcon
    },
]


const footerMenu = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Blogs',
        path: '/blogs'
    },
    {
        name: 'Recent Tweets',
        path: '/tweets'
    },
    {
        name: 'Contact',
        path: '/contact'
    }
]



export default function Footer(){
    return (
        <footer className="flex flex-col  justify-around items-center text-white mt-6 lg:flex-col lg:my-2 lg:gap-4 w-full bg-mainbg py-4 pb-2 bottom-0 select-none ">
            <div className="flex items-center justify-around w-full md:flex-col md:gap-4 pb-4">
                <h1 className="text-3xl text-center font-bold">Sarthak Jain</h1>
                <div className="flex items-center justify-around">
                {
                    footerMenu.map((menu)=>{
                        return (
                            <Link href={menu.path} key={menu.name} ><a className="pl-4 hover:text-primary2">{menu.name}</a></Link>
                            )
                        })
                }
                </div>
                <div className="flex items-center justify-around gap-8">
                {
                    socials.map((social)=>{
                        return (
                            <Link href={social.path} key={social.name} ><a target="_blank" className="hover:scale-110 transition-all duration-200" ><Image src={social.icon.src} alt={social.name} height={social.icon.height} width={social.icon.width}  /></a></Link>
                            )
                        })
                    }
                </div>
            </div>
            <p className="text-xl text-center">Copyright@2021 | All Rights Reserved </p>
        </footer>
    )
}
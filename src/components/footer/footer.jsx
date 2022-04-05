import Link from "next/link"
import Image from "next/image"
import twitterIcon from '../../../public/images/socials/twitter.svg'
import githubIcon from '../../../public/images/socials/github.svg'
import linkedinIcon from '../../../public/images/socials/linkedin.svg'


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
        <footer className="flex flex-col bottom-0 justify-around items-center text-white my-6 lg:flex-col lg:my-2 lg:gap-4">
            <div className="flex items-center justify-around w-full">
            <h1 className="text-3xl text-center font-bold">Sarthak Jain</h1>
            <div className="flex items-center justify-around">
            {
                    footerMenu.map((menu)=>{
                        return (
                            <Link href={menu.path} key={menu.name} ><a className="pl-4">{menu.name}</a></Link>
                            )
                        })
             }
            </div>
            <div className="flex items-center justify-around gap-8">
                {
                    socials.map((social)=>{
                        return (
                            <Link href={social.path} key={social.name} ><a target="_blank" ><Image src={social.icon.src} alt={social.name} height={social.icon.height} width={social.icon.width} /></a></Link>
                            )
                        })
                    }
            </div>
            </div>
            <p className="text-xl text-center">Copyright@2021 | All Rights Reserved </p>
        </footer>
    )
}
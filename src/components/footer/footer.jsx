import Link from "next/link"
import Image from "next/image"
import twitterIcon from '../../../public/images/socials/twitter.svg'
import githubIcon from '../../../public/images/socials/github.svg'
import linkedinIcon from '../../../public/images/socials/linkedin.svg'


const socials = [
    {
        name: 'twitter',
        url: 'https://twitter.com/sarthakjdev',
        icon: twitterIcon
    },
    {
        name: 'github',
        url: 'https://github.com/sarthakjdev',
        icon: githubIcon
    },
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/sarthakjdev/',
        icon: linkedinIcon
    },
]

export default function Footer(){
    return (
        <footer className="flex justify-around items-center text-white my-6 lg:flex-col lg:my-2 lg:gap-4">
            <h1 className="text-3xl text-center font-bold">Sarthak Jain</h1>
            <p className="text-xl text-center">Copyright@2021 | All Rights Reserved </p>
            <div className="flex items-center justify-around">
                {
                    socials.map((social)=>{
                        return (
                            <Link href={social.url} key={social.name} ><a><Image src={social.icon.src} alt={social.name} height={social.icon.height} width={social.icon.width} /></a></Link>
                        )
                    })
                }
            </div>
        </footer>
    )
}
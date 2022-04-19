/**
 * 
 * header component of the crossknot hackathon website 
 * 
 */

 import Link from "next/link"
 import Image from "next/image"
 import { useRouter } from "next/router"
 import Button from '../button'
 import logo from '../../../public/images/logo.svg'
 import { useState } from "react"

 const pages = [
     {
         name: 'Home',
         link: '/'
     },
     { 
         name: 'About', 
         link: '/about'
     },
     { 
         name: 'Works', 
         link: '/works'
     },
     {
         name: 'Blogs',
         link: '/blogs'
     }
 ]

 
 function toggleNavbar() {
    const navul = document.querySelector('.navbar')
    const body = document.querySelector('body')
    if(navul.style.transform === 'translateX(0%)') {
        navul.style.transform = 'translateX(-100%)'
        body.style.overflowY = 'scroll'
    }else {
        navul.style.transform = 'translateX(0%)'
        body.style.overflowY = 'hidden'
        window.moveTo(0,0)
    }
    
    const nav_lis = Array.from(navul.children)
    nav_lis.map((li)=> {
        li.addEventListener('click', ()=>{
            if(navul.style.transform === 'translateX(0%)' ) {
                navul.style.transform = 'translateX(-100%)'
                body.style.overflowY = 'scroll'
            }else if (navul.style.transform === 'translateX(-100%)' && window.screen.width > 768) {
                navul.style.transform = 'translateX(0%)'
                body.style.overflowY = 'hidden'
            }
        })
    })
}
 export default function Header(){
 const router = useRouter()
 const [navbarColor, setnavbarColor] = useState(false)


 if (typeof window !== "undefined") {
    window.addEventListener('scroll', ()=>{
        if(window.scrollY >=95){
            setnavbarColor(true)
        }else {
            setnavbarColor(false)
        }
    })
  }

 return (
        <header className={`fixed top-0 bg-mainbg w-full flex items-center justify-between px-8 py-5 lg:relative z-100  ${navbarColor? 'backdrop-blur-xl lg:backdrop-filter-none': null}`}>
 
          {/* Logo */}
        <Link href="/"><a><Image src={logo} alt="logo"/></a></Link>
 
         {/* Navbar menu */}
        <nav className="flex items-center justify-evenly ">
        <div className=" navbar flex items-center justify-evenly transition-all duration-200 lg:-translate-x-full lg:flex-col lg:w-full lg:h-90vh lg:absolute lg:top-20 lg:left-0 lg:right-0 bg-mainbg lg:mt-8 lg:z-100">
            {
                pages.map((page)=>{
                 return (
                     <Link href={page.link} key={page.name}><a className={`text-white text-lg font-primary py-2 px-4 hover:rounded-full hover:text-white hover:bg-primary transition-all duration-200 mx-2 lg:my-8 active:bg-primary active:text-white active:rounded-full ${router.route === page.url? 'bg-primary text-white rounded-full' : null }`}>{page.name}</a></Link>
                 )
                })
            }

            <Button url={"/contact"} name='contact' />
       </div>
 
       {/* ham toggle button for responsive view */}
           <div className="flex-col hidden lg:flex" onMouseDown={toggleNavbar}>
               <span className="bg-white h-1 w-10 my-1"></span>
               <span className="bg-white h-1 w-10 my-1"></span>
               <span className="bg-white h-1 w-10 my-1"></span>
           </div>
        </nav>
    </header>
 )
 }
 
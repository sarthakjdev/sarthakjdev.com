import Image from 'next/image'
import Link from 'next/link'

import innerHexa from '../../../public/images/tech/inner_hexa.svg'
import outerHexa from '../../../public/images/tech/outer_hexa.svg'


export default function TechCard({tech}){

    // square card 
    // return (
    // <Link href={tech.url} key={tech.name}><a target='_blank'>
    //     <div  className='py-10 px-8 border-2 border-cardBorder rounded-2xl bg-aboutBg flex flex-col items-center justify-center'>
    //         <div className='rounded-full  bg-gradient-to-b from-primary to-primary2 p-8 flex items-center justify-center'>
    //             <Image src={tech.icon.src} height={tech.icon.height} alt={tech.name} width={tech.icon.width}/>
    //         </div>
    //         <h3 className='text-white text-center uppercase my-4 tracking-wide font-bold text-xl '>{tech.name}</h3>
    //     </div>
    // </a></Link>
    // )


    // heaxagonal card 

    return (
    <Link href={tech.url} key={tech.name}><a target='_blank'>
        <div className='relative flex items-center justify-center group'>
        <Image src={outerHexa} alt="outer hexa"  />
        <div className='absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center'><Image src={innerHexa} alt="inner hexa" /> </div>
        <div className='absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center group-hover:scale-110 transition-all duration-300'><Image src={tech.icon.src} alt={tech.name} height={tech.icon.height} width={tech.icon.width}/> </div>
        </div>
    </a></Link>
    )
}
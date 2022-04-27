import Image from 'next/image'
import Link from 'next/link'

import innerHexa from '../../../public/images/tech/inner_hexa.svg'
import outerHexa from '../../../public/images/tech/outer_hexa.svg'


export default function TechCard({tech}){

    return (
    <Link href={tech.url} key={tech.name}><a target='_blank' data-aos="fade-down" data-aos-duration="600">
        <div className='relative flex items-center justify-center group'>
        <Image src={outerHexa} alt="outer hexa"  />
        <div className='absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center'><Image src={innerHexa} alt="inner hexa" /> </div>
        <div className='absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center group-hover:scale-110 transition-all duration-300'><Image src={tech.icon.src} alt={tech.name} height={tech.icon.height} width={tech.icon.width}/> </div>
        </div>
    </a></Link>
    )
}
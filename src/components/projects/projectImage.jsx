import Image from "next/image"
import heaxagon from '../../../public/images/tech/inner_hexa.svg'

export default function WorkImage({work}){
    return (
        <div className="relative sm:w-half">
            <Image src={heaxagon} alt="hexagon" />
            <div className="absolute top-0 bottom-0 left-0 right-0 m-auto flex items-center justify-center"><Image src={work.icon.src} alt={work.name} height={124} width={124} /></div>
        </div>
    )
}
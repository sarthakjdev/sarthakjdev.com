import SectionHead from "../sectionHead"
import aboutData from '../../data/about'

export default function AboutSection(){
    return (
        <section className="text-white my-14 mx-4 sm:mx-auto mt-32" data-aos="fade-down">
            <SectionHead sectionName={'about'} />
                {
                    aboutData.map((about)=>{
                        return(
                            <p key={about.name} className='text-lg p-6 my-10 leading-8 tracking-wider rounded-lg border-2 border-cardBorder text-center bg-aboutBg'>{about.description}</p>
                        )
                    })
                }
        </section>
    )
}
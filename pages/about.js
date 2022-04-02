import Head from 'next/head'

import AboutSection from '../src/components/about/about'
import TechStackSection from '../src/components/techStack/techStack'
import BgShadeBall from '../src/components/bgShade'

export default function About(){
    return(
            <>
                <Head>
                <title>About | Sarthak Jain</title>
                </Head>
                <section className='mx-20 mt-10 relative md:mx-10'>
                <AboutSection />
                <TechStackSection />
                </section>
            </>
    )
}
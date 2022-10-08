import Head from 'next/head'

import ExperienceSection from '../src/components/experience/index'
import BgShadeBall from '../src/components/bgShade'

export default function About(){
    return(
            <>
                <Head>
                <title>About | Sarthak Jain</title>
                </Head>
                <section className='mx-20 mt-10 relative md:mx-10'>
                <ExperienceSection />
                </section>
            </>
    )
}
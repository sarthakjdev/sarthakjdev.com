import Head from 'next/head'

import AboutSection from '../src/components/pro/about'


export default function About(){
    return(
            <>
                <Head>
                <title>About | CrossKnot Hacks</title>
                </Head>
                <AboutSection />
            </>
    )
}
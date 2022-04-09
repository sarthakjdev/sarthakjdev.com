import Head from 'next/head'

import ProjectSection from '../../src/components/works/work'


export default function Projects(){
    return(
            <>
                <Head>
                <title>Works | CrossKnot Hacks</title>
                </Head>
                <ProjectSection />
            </>
    )
}
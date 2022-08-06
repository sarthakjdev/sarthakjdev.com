import Head from 'next/head'

import ProjectSection from '../../src/components/projects/project'


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
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

export async function getServerSideProps(){
    try {
        const response = await AxiosClient.post('/projects')
        return {
            props: {
                experiences: response.data
            }
        }
    } catch (error) {
        return {
            props: {
                experiences: []
            }
        }
    }
}
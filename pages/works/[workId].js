import Head from 'next/head'
import { useRouter } from 'next/router'
import ProjectSection from '../../src/components/works/workSection'


export default function ProjectDetail({ project }){

    const router = useRouter()
    const { projectId } = router.query
    return(
            <>
                <Head>
                <title> { projectId.toUpperCase() } | Sarthak Jain</title>
                </Head>
                <ProjectSection project={project}/>
            </>
    )
}

export async function getServerSideProps(){
    return {
        props: {
            project: 'we are good to go'
        }
    }
}
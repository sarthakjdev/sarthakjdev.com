import Head from 'next/head'
import { useRouter } from 'next/router'
import ProjectSection from '../../src/components/projects/projectSection'
import projectData from '../../src/data/works'
import { AxiosClient } from '../../src/utils/axiosClient'

export default function ProjectDetail({ project }){

    const router = useRouter()
    const {projectId}  = router.query
    return(
            <>
                <Head>
                <title> { projectId.toUpperCase() } | Sarthak Jain</title>
                </Head>
                <ProjectSection work={project}/>
            </>
    )
}

export async function getServerSideProps(context){

    try {
        const {data} = await AxiosClient.get(`/projects/${context.query.projectId}`)
        return {
            props: {
                project: data
            }
        }
    } catch (error) {
        
    }
}
import Head from 'next/head'
import { useRouter } from 'next/router'
import ProjectSection from '../../src/components/projects/projectSection'
import projectData from '../../src/data/works'

export default function ProjectDetail({ project }){

    const router = useRouter()
    const {workId}  = router.query
    return(
            <>
                <Head>
                <title> { workId.toUpperCase() } | Sarthak Jain</title>
                </Head>
                <ProjectSection work={project}/>
            </>
    )
}

export async function getServerSideProps(context){

    const project = projectData.filter((p)=>{  if(p.query ==context.query.projectId) return p })

    return {
        props: {
            project: project[0]
        }
    }
}
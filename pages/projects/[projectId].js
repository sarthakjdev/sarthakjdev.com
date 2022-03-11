import Head from 'next/head'
import { useRouter } from 'next/router'
import AboutSection from '../src/components/about/about'


export default function ProjectDetail(){

    const router = useRouter({ props })
    const { projectId } = router.query
    return(
            <>
                <Head>
                <title> { projectId } | Sarthak Jain</title>
                </Head>
                <AboutSection />
            </>
    )
}

export async function getServerSideProps(){
    return {
        props: {

        }
    }
}
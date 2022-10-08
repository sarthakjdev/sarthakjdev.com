import Head from 'next/head'

import ExperienceSection from '../src/components/experience/index'
import BgShadeBall from '../src/components/bgShade'
import { AxiosClient } from '../src/utils/axiosClient'

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

export async function getServerSideProps(){
    try {
        const response = await AxiosClient.post('/experience')
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
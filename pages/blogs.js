import Head from 'next/head'
import ContactSection from '../src/components/contact/contact'
import ComingSoon from '../src/components/comingSoon'
export default function Contact(){
    return(
            <>
                <Head>
                <title>Blogs | Sarthak Jain </title>
                </Head>
                <ComingSoon />
                
            </>
    )
}

export async function getServerSideProps(){
    return {
        props: {
            blogs: 'blogs'
        }
    }
}
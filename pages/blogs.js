import Head from 'next/head'
import ContactSection from '../src/components/contact/contact'

export default function Contact(){
    return(
            <>
                <Head>
                <title>Blogs | Sarthak Jain </title>
                </Head>
                
            </>
    )
}

export async function getServerSideProps(){
    return {
        props: {
            blogs: blogs
        }
    }
}
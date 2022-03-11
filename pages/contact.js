import Head from 'next/head'
import ContactSection from '../src/components/contact/contact'

export default function Contact(){
    return(
            <>
                <Head>
                <title>Contact | CrossKnot Hacks</title>
                </Head>
                <ContactSection />
            </>
    )
}
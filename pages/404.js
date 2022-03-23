import Head from 'next/head'

import NotFound from '../src/components/404'


export default function Custom404(){
    return(
            <>
                <Head>
                <title>404 | Sarthak Jain Portfolio</title>
                </Head>
                <NotFound />
            </>
    )
}
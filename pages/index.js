import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useRouter} from 'next/router'

import HeroSection from '../src/components/hero/hero';

export default function Home() {

  const router = useRouter()
  return (
    <div className={styles.container}>
      <Head>
        <title>Sarthak Jain</title>
        <meta name="description" content="sarthak's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

            {/* Hero section */}

            <HeroSection />

       </main>
       </div>
  )
}

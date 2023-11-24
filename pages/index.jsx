import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sarthak Jain</title>
        <meta name="description" content="sarthak's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2 className="text-gray-700 text-5xl font-bold text-center">
          🚧 🚧 Under Maintenance 🚧 🚧
        </h2>
      </main>
    </div>
  );
}

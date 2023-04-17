import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Golf Scorecard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>GolfStats</h1>

        <p className={styles.description}>
          Skráðu þig inn til að byrja.
        </p>

        {/* <Link href="/scorecard/new"> */}
        <Link href="/login">Innskráning
          {/* <a className={styles.button}></a> */}
        </Link>
        <p> eða </p>
        <Link href="/signup">Nýskráning
          {/* <a className={styles.button}></a> */}
        </Link>
      </main>
    </div>
  );
}

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
        <h1 className={styles.title}>Welcome to Golf Scorecard</h1>

        <p className={styles.description}>
          To get started, enter your golf round scores:
        </p>

        <Link href="/scorecard/new">
          <a className={styles.button}>Enter Scores</a>
        </Link>
      </main>
    </div>
  );
}
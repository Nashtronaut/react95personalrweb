import Head from 'next/head'
import styles from '../styles/Home.module.css'
import App from '../App.js'
import { Cursor } from '@react95/core/'

export default function Home() {
  return (
    <div className={styles.container} cursor={Cursor.Text}>
      <Head>
        <title>Nash Boisvert</title>
        <meta name="Nash Boisvert's personal website and information" content="Information about Nash Boisvert including contact, passed projects, and resume. Built with Next.JS and react95." />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <App/>
      </main>
    </div>
  )
}

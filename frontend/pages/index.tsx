import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Services from '../components/Services'
import Image from 'next/image'
import Blog from '../components/Blog'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>tailwind with nextjs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main>
        <Services/>
        <Blog/>
        <Contact/>
        <Footer/>
      </main>
    </div>
  )
}

export default Home

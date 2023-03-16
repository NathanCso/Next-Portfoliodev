import Head from 'next/head'
import About from '../components/About'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'


export default function Home() {
  return (
    <div>
      <Head>
        <title>NC Dev Portfolio</title>
        <meta name="description" content="Je me concentre sur la création d'applications Web front-end réactives intégrant des technologies back-end." />
        <link rel="icon" href="/fav.png" />
      </Head>
    <Main />
    <About />
    <Skills />
    <Projects />
  
    </div>
  )
}

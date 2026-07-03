import Nav from './components/Nav'
import Hero from './components/Hero'
import QuickFacts from './components/QuickFacts'
import Curiosity from './components/Curiosity'
import Projects from './components/Projects'
import Research from './components/Research'
import Surprises from './components/Surprises'
import Thoughts from './components/Thoughts'
import Vision from './components/Vision'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <QuickFacts />
        <Curiosity />
        <Projects />
        <Research />
        <Surprises />
        <Thoughts />
        <Vision />
      </main>
      <Footer />
    </>
  )
}

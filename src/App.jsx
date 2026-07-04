import DotGrid from './components/reactbits/DotGrid'
import ClickSpark from './components/reactbits/ClickSpark'
import Dock from './components/reactbits/Dock'
import Hero from './components/Hero'
import QuickFacts from './components/QuickFacts'
import Curiosity from './components/Curiosity'
import Projects from './components/Projects'
import Research from './components/Research'
import Surprises from './components/Surprises'
import Thoughts from './components/Thoughts'
import Vision from './components/Vision'

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#030303] text-[#F5F5F5] font-sans selection:bg-zinc-800 selection:text-zinc-200 overflow-x-hidden">
      {/* Global Background DotGrid */}
      <DotGrid />

      {/* Global Interaction click sparks */}
      <ClickSpark />

      {/* Navigation Dock */}
      <Dock />

      {/* Page Sections */}
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
    </div>
  )
}

import DotField from './components/reactbits/DotField'
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
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'Projects', onClick: () => scrollToSection('projects') },
    { label: 'Research', onClick: () => scrollToSection('research') },
    { label: 'Resume', onClick: () => window.open('/resume.pdf', '_blank'), isDistinct: true },
    { label: 'Contact', onClick: () => scrollToSection('vision') },
  ];

  return (
    <div className="relative min-h-screen bg-[#030303] text-[#F5F5F5] font-sans selection:bg-zinc-800 selection:text-zinc-200 overflow-x-hidden">
      {/* Global Background DotField — fixed full-screen, below all content */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <DotField
          dotRadius={2.2}
          dotSpacing={18}
          bulgeStrength={55}
          glowRadius={140}
          sparkle={false}
          waveAmplitude={0}
          cursorRadius={420}
          cursorForce={0.1}
          bulgeOnly
          gradientFrom="rgba(245, 245, 245, 0.7)"
          gradientTo="rgba(181, 181, 181, 0.5)"
          glowColor="#030303"
        />
      </div>

      {/* Global Interaction click sparks wrapping the main application container */}
      <ClickSpark sparkColor="#F5F5F5" sparkSize={8} sparkRadius={20} sparkCount={10} duration={400}>
        {/* Navigation Dock */}
        <Dock items={navItems} />

        {/* Page Sections — z-index: 1 sits above fixed DotGrid canvas (z-index: 0) */}
        <main className="relative z-10">
          <Hero />
          <QuickFacts />
          <Curiosity />
          <Projects />
          <Research />
          <Surprises />
          <Thoughts />
          <Vision />
        </main>
      </ClickSpark>
    </div>
  )
}

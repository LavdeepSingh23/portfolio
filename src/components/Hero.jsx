import TextType from './reactbits/TextType';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 py-20 max-w-5xl mx-auto z-10 select-none">
      <div className="space-y-12">
        {/* Name Heading using TextType typing effect */}
        <div className="w-full">
          <TextType
            text={["[NAME]"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="_"
            loop={true}
            className="text-5xl md:text-7xl font-extrabold text-[#F5F5F5] uppercase tracking-tight"
            cursorClassName="text-[#F5F5F5]"
          />
        </div>

        {/* Mindset-First Line & Toolbox (Placeholders for customization) */}
        <div className="max-w-3xl space-y-6">
          <h2 className="text-2xl md:text-3xl font-medium text-[#F5F5F5] tracking-tight leading-snug">
            [MINDSET-FIRST LINE]
          </h2>
          
          <p className="text-base md:text-lg text-[#B5B5B5] font-light leading-relaxed max-w-2xl">
            [TOOLBOX LINE]
          </p>

          <p className="text-sm md:text-base text-zinc-500 font-mono tracking-wider uppercase">
            [OPTIONAL TAGLINE]
          </p>
        </div>

        {/* Direct CTA Row */}
        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#F5F5F5] text-[#030303] text-sm font-semibold tracking-wide rounded-md hover:bg-[#B5B5B5] transition-colors duration-200 shadow-sm"
          >
            Resume
          </a>
          <a
            href="https://github.com/LavdeepSingh23"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-zinc-700 hover:border-zinc-500 text-[#F5F5F5] text-sm font-medium tracking-wide rounded-md transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/[LINKEDIN-USERNAME]"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-zinc-700 hover:border-zinc-500 text-[#F5F5F5] text-sm font-medium tracking-wide rounded-md transition-colors duration-200"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

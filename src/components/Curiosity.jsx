import { useRef } from 'react';
import VariableProximity from './reactbits/VariableProximity';
import { questions } from '../data/questions';

export default function Curiosity() {
  const containerRef = useRef(null);

  return (
    <section
      id="curiosity"
      ref={containerRef}
      className="relative py-24 px-6 max-w-5xl mx-auto z-10 select-none bg-transparent"
    >
      <div className="space-y-12">
        {/* Section coordinate header using VariableProximity */}
        <div className="border-b border-zinc-800 pb-4">
          <VariableProximity
            label="II. CURIOSITY — QUESTIONS WORTH CHASING"
            className="text-xs font-mono uppercase tracking-wider text-[#B5B5B5] hover:text-[#F5F5F5] transition-colors duration-300 cursor-default"
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 800, 'opsz' 40"
            containerRef={containerRef}
            radius={180}
            falloff="linear"
          />
        </div>

        {/* 4 question cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {questions.map((q) => (
            <div
              key={q.id}
              className="group border border-zinc-800 hover:border-zinc-700 bg-[#030303]/40 backdrop-blur-sm rounded-lg p-6 transition-all duration-300 shadow-sm flex flex-col justify-between"
            >
              <p className="text-lg text-[#B5B5B5] group-hover:text-[#F5F5F5] font-light leading-relaxed transition-colors duration-250">
                {q.text}
              </p>
              <div className="mt-4 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-zinc-400 transition-colors duration-250" />
                <span className="text-xs text-zinc-500 font-mono tracking-wider uppercase">
                  Question 0{q.id}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

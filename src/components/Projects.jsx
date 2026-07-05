import { useRef } from 'react';
import VariableProximity from './reactbits/VariableProximity';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  const containerRef = useRef(null);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative py-24 px-6 max-w-5xl mx-auto z-10 select-none bg-transparent"
    >
      <div className="space-y-12">
        {/* Section coordinate header using VariableProximity */}
        <div className="border-b border-zinc-800 pb-4">
          <VariableProximity
            label="III. PROJECTS — WORKED EVIDENCE"
            className="text-xs font-mono uppercase tracking-wider text-[#B5B5B5] hover:text-[#F5F5F5] transition-colors duration-300 cursor-default"
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 800, 'opsz' 40"
            containerRef={containerRef}
            radius={180}
            falloff="linear"
          />
        </div>

        {/* Projects cards list */}
        <div className="space-y-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

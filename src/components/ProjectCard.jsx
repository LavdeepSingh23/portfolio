import CountUp from './reactbits/CountUp';

export default function ProjectCard({ project }) {
  return (
    <div className="border border-zinc-800 bg-[#030303]/40 backdrop-blur-sm rounded-lg p-6 md:p-8 space-y-6 hover:border-zinc-700 transition-all duration-300 shadow-sm flex flex-col justify-between">
      
      {/* Title & Metadata */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-900 pb-4">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-[#F5F5F5] tracking-tight">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-0.5 bg-zinc-900 text-zinc-400 border border-zinc-800 rounded-md text-xs font-mono tracking-wide"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <span className="text-xs text-zinc-500 font-mono tracking-widest uppercase md:self-start">
          {project.year}
        </span>
      </div>

      {/* Narrative grid columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[#B5B5B5] font-light leading-relaxed">
        <div className="space-y-4">
          <div>
            <h4 className="text-xs text-zinc-500 font-mono tracking-wider uppercase mb-1">Problem</h4>
            <p>{project.problem}</p>
          </div>
          <div>
            <h4 className="text-xs text-zinc-500 font-mono tracking-wider uppercase mb-1">Why It Mattered</h4>
            <p>{project.whyItMattered}</p>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <h4 className="text-xs text-zinc-500 font-mono tracking-wider uppercase mb-1">What I Built</h4>
            <p>{project.whatIBuilt}</p>
          </div>
          <div>
            <h4 className="text-xs text-zinc-500 font-mono tracking-wider uppercase mb-1">What I Learned</h4>
            <p>{project.whatILearned}</p>
          </div>
        </div>
      </div>

      {/* Numeric Stats */}
      {project.stats && project.stats.length > 0 && (
        <div className="border-t border-zinc-900 pt-6">
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            {project.stats.map((stat, i) => (
              <div key={i} className="flex flex-col min-w-[100px] space-y-1">
                <span className="text-2xl md:text-3xl font-semibold text-[#F5F5F5] tracking-tight">
                  {stat.prefix}
                  <CountUp
                    from={0}
                    to={stat.value}
                    duration={1.5}
                    decimals={stat.decimals || 0}
                    separator=","
                  />
                  {stat.suffix}
                </span>
                <span className="text-[10px] text-zinc-500 font-mono tracking-wider uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
      
    </div>
  );
}

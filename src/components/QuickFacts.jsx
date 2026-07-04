import CountUp from './reactbits/CountUp';

export default function QuickFacts() {
  return (
    <section id="quick-facts" className="border-y border-zinc-800 bg-transparent py-12 px-6 max-w-5xl mx-auto z-10 relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-zinc-800">
        
        {/* Row 1: Program */}
        <div className="pt-6 md:pt-0 md:px-6 first:pt-0 first:px-0 flex flex-col space-y-2">
          <span className="text-xs text-zinc-500 font-mono uppercase tracking-wider">Program</span>
          <p className="text-base text-[#F5F5F5] font-light leading-relaxed">
            B.E. Computer Engineering, Thapar,{' '}
            <span className="whitespace-nowrap font-medium text-[#F5F5F5]">
              <CountUp from={2000} to={2024} duration={1.2} separator="" />
              –
              <CountUp from={2000} to={2028} duration={1.2} separator="" />
            </span>
          </p>
        </div>

        {/* Row 2: Publication */}
        <div className="pt-6 md:pt-0 md:px-6 flex flex-col space-y-2">
          <span className="text-xs text-zinc-500 font-mono uppercase tracking-wider">Publication</span>
          <p className="text-base text-[#F5F5F5] font-light leading-relaxed">
            IEEE ComputingCon{' '}
            <span className="font-medium text-[#F5F5F5]">
              <CountUp from={2000} to={2025} duration={1.2} separator="" />
            </span>
          </p>
        </div>

        {/* Row 3: Fellowship */}
        <div className="pt-6 md:pt-0 md:px-6 flex flex-col space-y-2">
          <span className="text-xs text-zinc-500 font-mono uppercase tracking-wider">Fellowship</span>
          <p className="text-base text-[#F5F5F5] font-light leading-relaxed">
            Undergraduate Research Fellowship (URF){' '}
            <span className="font-medium text-[#F5F5F5]">
              <CountUp from={2000} to={2026} duration={1.2} separator="" />
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}

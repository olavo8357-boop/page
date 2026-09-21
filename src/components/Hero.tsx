import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onSubscribeClick?: () => void;
  onPlansClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSubscribeClick, onPlansClick }) => {
  return (
    <section className="relative z-10 pt-8 pb-12 sm:pt-16 sm:pb-20 px-4 text-center flex flex-col items-center">
      {/* Ambient background neon orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[350px] pointer-events-none -z-10">
        <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-violet-600/18 blur-[110px] animate-neon-glow" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-cyan-500/12 blur-[100px] animate-neon-glow" />
        <div className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full bg-fuchsia-500/10 blur-[100px]" />
      </div>

      {/* Brand Mini Badge */}
      <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-[#0f0d1a]/90 border border-[#2b2149] shadow-[0_0_20px_rgba(124,58,237,0.2)] mb-8 select-none">
        <div className="w-7 h-7 rounded-lg bg-[#19142b] border border-[#3f316b] flex items-center justify-center">
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-violet-300 to-cyan-300 text-sm leading-none">F</span>
        </div>
        <div className="flex items-baseline font-bold text-base tracking-tight">
          <span className="text-white">ForneceHub</span>
          <span className="text-violet-400 font-semibold">.io</span>
        </div>
      </div>

      {/* Main Headline */}
      <h1 className="text-4xl sm:text-6xl md:text-[68px] font-extrabold tracking-[-0.03em] leading-[1.08] max-w-4xl mx-auto mb-9">
        <span className="block text-white">Melhores fornecedores</span>
        <span className="block">
          <span className="text-white">e </span>
          <span className="bg-gradient-to-r from-[#c084fc] via-[#818cf8] to-[#38bdf8] bg-clip-text text-transparent">
            marketplaces do Brasil
          </span>
        </span>
      </h1>

      {/* Call to Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3.5">
        <button
          onClick={onSubscribeClick}
          className="group bg-gradient-to-r from-[#6d28d9] via-[#7c3aed] to-[#6366f1] hover:brightness-110 text-white transition-all duration-200 font-semibold text-sm sm:text-base px-7 py-3 rounded-xl shadow-[0_0_28px_rgba(124,58,237,0.5)] flex items-center gap-2 cursor-pointer active:scale-[0.98]"
        >
          <span>Assinar agora</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </button>

        <button
          onClick={onPlansClick}
          className="bg-[#0e0c18]/90 hover:bg-[#18152a] text-neutral-200 hover:text-white border border-[#2b2447] hover:border-[#6366f1]/60 transition-all duration-200 font-medium text-sm sm:text-base px-6 py-3 rounded-xl cursor-pointer active:scale-[0.98] shadow-sm"
        >
          Ver planos
        </button>
      </div>
    </section>
  );
};

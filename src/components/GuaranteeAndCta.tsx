import React from 'react';
import { ShieldCheck, Star, Headphones, ArrowRight } from 'lucide-react';

interface GuaranteeAndCtaProps {
  onSubscribeClick?: () => void;
}

export const GuaranteeAndCta: React.FC<GuaranteeAndCtaProps> = ({ onSubscribeClick }) => {
  return (
    <div className="w-full relative z-10">
      {/* SECTION 1: Sua compra está protegida */}
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 pt-12 pb-24 sm:pb-32 flex flex-col items-center text-center">
        {/* Badge: • RISCO ZERO */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#372863] bg-[#120e24] text-violet-300 text-xs font-semibold tracking-wider uppercase mb-5 select-none shadow-[0_0_15px_rgba(124,58,237,0.2)]">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(6,182,212,0.8)]" />
          <span>RISCO ZERO</span>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-16 sm:mb-20">
          Sua compra está protegida
        </h2>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 max-w-4xl mx-auto w-full">
          {/* Garantia de 7 dias */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-2xl bg-[#140e2b] border border-[#352561] flex items-center justify-center text-violet-300 mb-6 shadow-inner group-hover:scale-105 group-hover:border-[#6366f1] group-hover:shadow-[0_0_20px_rgba(124,58,237,0.35)] transition-all duration-300">
              <ShieldCheck className="w-7 h-7 stroke-[1.8]" />
            </div>
            <h3 className="text-white text-base sm:text-lg font-bold mb-2">
              Garantia de 7 dias
            </h3>
            <p className="text-[#8c88a8] text-xs sm:text-sm leading-relaxed max-w-xs">
              Não gostou? Devolvemos 100% do seu dinheiro, sem perguntas.
            </p>
          </div>

          {/* Satisfação garantida */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-2xl bg-[#140e2b] border border-[#352561] flex items-center justify-center text-violet-300 mb-6 shadow-inner group-hover:scale-105 group-hover:border-[#6366f1] group-hover:shadow-[0_0_20px_rgba(124,58,237,0.35)] transition-all duration-300">
              <Star className="w-7 h-7 stroke-[1.8]" />
            </div>
            <h3 className="text-white text-base sm:text-lg font-bold mb-2">
              Satisfação garantida
            </h3>
            <p className="text-[#8c88a8] text-xs sm:text-sm leading-relaxed max-w-xs">
              Milhares de vendedores já usam a ForneceHub para escalar suas operações.
            </p>
          </div>

          {/* Suporte dedicado */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-2xl bg-[#140e2b] border border-[#352561] flex items-center justify-center text-violet-300 mb-6 shadow-inner group-hover:scale-105 group-hover:border-[#6366f1] group-hover:shadow-[0_0_20px_rgba(124,58,237,0.35)] transition-all duration-300">
              <Headphones className="w-7 h-7 stroke-[1.8]" />
            </div>
            <h3 className="text-white text-base sm:text-lg font-bold mb-2">
              Suporte dedicado
            </h3>
            <p className="text-[#8c88a8] text-xs sm:text-sm leading-relaxed max-w-xs">
              Atendimento prioritário e direto para resolver qualquer dúvida.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: Final CTA - Pronto para vender mais? with grid texture */}
      <section className="w-full border-t border-[#1f1738] relative overflow-hidden py-24 sm:py-32 flex flex-col items-center justify-center text-center px-4">
        {/* Cyber grid pattern background */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(139, 92, 246, 0.12) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(139, 92, 246, 0.12) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
          }}
          aria-hidden="true" 
        />

        {/* Ambient radial glow */}
        <div 
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-600/15 via-cyan-500/5 to-transparent z-0 blur-2xl"
          aria-hidden="true" 
        />

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
            Pronto para vender mais?
          </h2>

          <p className="text-[#9a95b8] text-sm sm:text-base max-w-xl mx-auto mb-9 font-normal">
            Junte-se aos vendedores que já encontraram seus melhores fornecedores na ForneceHub.
          </p>

          <button
            onClick={onSubscribeClick}
            className="group bg-gradient-to-r from-[#6d28d9] via-[#7c3aed] to-[#6366f1] text-white hover:brightness-110 transition-all duration-200 font-bold text-sm sm:text-base px-8 py-4 rounded-xl shadow-[0_0_30px_rgba(124,58,237,0.5)] flex items-center gap-2 cursor-pointer active:scale-[0.98]"
          >
            <span>Assinar agora</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full border-t border-[#1a142c] py-8 text-center text-xs text-[#6e688f] select-none">
        <p>© 2026 ForneceHub.io — Todos os direitos reservados</p>
      </footer>
    </div>
  );
};

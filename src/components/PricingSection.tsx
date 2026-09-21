import React from 'react';
import { Check, X, ArrowRight, Star } from 'lucide-react';

export const PricingSection: React.FC = () => {
  return (
    <section id="planos" className="w-full max-w-5xl mx-auto px-4 sm:px-6 pb-28 sm:pb-36 flex flex-col items-center relative z-10">
      {/* Badge: • PLANOS */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#372863] bg-[#120e24] text-violet-300 text-xs font-semibold tracking-wider uppercase mb-5 select-none shadow-[0_0_15px_rgba(124,58,237,0.2)]">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(6,182,212,0.8)]" />
        <span>PLANOS</span>
      </div>

      {/* Section Title */}
      <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight text-center mb-3">
        Escolha o plano ideal para você
      </h2>

      {/* Subtitle */}
      <p className="text-[#8c88a8] text-sm sm:text-base text-center mb-14">
        Comece com a liberdade de crescer.
      </p>

      {/* 2 Plans Grid */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
        {/* PLANO BÁSICO */}
        <div className="bg-[#090812] border border-[#241a3f] hover:border-[#382663] transition-colors rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
          <div>
            <span className="text-xs font-bold text-violet-400/80 tracking-wider uppercase block mb-6">
              PLANO BÁSICO
            </span>

            {/* Price */}
            <div className="flex items-baseline gap-1.5 mb-8">
              <span className="text-neutral-400 font-bold text-lg">R$</span>
              <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                169,00
              </span>
              <span className="text-neutral-400 text-sm font-medium">/mês</span>
            </div>

            {/* Features List */}
            <ul className="space-y-4 text-sm text-neutral-300">
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-cyan-400 stroke-[2.5] shrink-0" />
                <span>Acesso aos fornecedores</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-cyan-400 stroke-[2.5] shrink-0" />
                <span>Mercado Livre</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-cyan-400 stroke-[2.5] shrink-0" />
                <span>Shopee</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-cyan-400 stroke-[2.5] shrink-0" />
                <span>Suporte</span>
              </li>
              <li className="flex items-center gap-3 text-[#585966]">
                <X className="w-4 h-4 text-[#585966] stroke-[2] shrink-0" />
                <span>Magalu e Bling</span>
              </li>
              <li className="flex items-center gap-3 text-[#585966]">
                <X className="w-4 h-4 text-[#585966] stroke-[2] shrink-0" />
                <span>Curso completo</span>
              </li>
            </ul>
          </div>

          {/* Action Button */}
          <div className="pt-10">
            <a
              id="btn-plano-basico"
              href="https://go.perfectpay.com.br/PPU38CQGALO"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl border border-[#2b2046] bg-[#120e22] hover:bg-[#1b1433] hover:border-[#4d2f8c] text-white text-sm font-semibold transition-all duration-200 cursor-pointer active:scale-[0.98] flex items-center justify-center text-center"
            >
              Escolher este plano
            </a>
          </div>
        </div>

        {/* PLANO PREMIUM */}
        <div className="bg-[#0b0918] border-2 border-[#6d28d9] rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative shadow-[0_0_50px_rgba(124,58,237,0.25)]">
          {/* Mais Popular Pill Badge on top border */}
          <div className="absolute -top-3.5 right-8 sm:right-10">
            <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#7c3aed] to-[#38bdf8] text-white text-xs font-bold px-3.5 py-1 rounded-full shadow-[0_0_15px_rgba(124,58,237,0.5)] uppercase tracking-wider">
              <Star className="w-3 h-3 fill-white" />
              <span>MAIS POPULAR</span>
            </span>
          </div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-violet-300 tracking-wider uppercase block">
                PLANO PREMIUM
              </span>
            </div>

            {/* Vitalício Tag */}
            <div className="mb-4">
              <span className="inline-block bg-[#1a1236] border border-[#3f2b6e] text-violet-200 text-xs font-semibold px-3 py-1 rounded-lg uppercase tracking-wider shadow-[0_0_10px_rgba(124,58,237,0.15)]">
                VITALÍCIO
              </span>
            </div>

            {/* De / Por & Discount Badge */}
            <div className="flex items-center gap-2.5 mb-2">
              <span className="text-xs text-neutral-400">
                de <span className="line-through text-rose-400/80">R$ 597</span> por
              </span>
              <span className="bg-gradient-to-r from-[#7c3aed] to-[#38bdf8] text-white font-bold text-xs px-2 py-0.5 rounded-md">
                -58%
              </span>
            </div>

            {/* Price */}
            <div className="mb-8">
              <div className="flex items-baseline gap-1.5 mb-1.5">
                <span className="text-neutral-400 font-bold text-lg">R$</span>
                <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                  249,00
                </span>
                <span className="text-neutral-400 text-xs sm:text-sm font-medium">
                  à vista ou pagamento único
                </span>
              </div>
              <p className="text-neutral-400 text-xs font-semibold flex items-center gap-2">
                <span>ou em até</span>
                <span className="text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-lg text-xs font-bold shadow-[0_0_10px_rgba(16,185,129,0.05)]">
                  12x de R$ 24,90
                </span>
              </p>
            </div>

            {/* Features List */}
            <ul className="space-y-4 text-sm text-neutral-300">
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-cyan-400 stroke-[2.5] shrink-0" />
                <span>Acesso aos fornecedores</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-cyan-400 stroke-[2.5] shrink-0" />
                <span>Mercado Livre</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-cyan-400 stroke-[2.5] shrink-0" />
                <span>Shopee, Magalu e Bling</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-cyan-400 stroke-[2.5] shrink-0" />
                <span>Suporte e curso completo</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-cyan-400 stroke-[2.5] shrink-0" />
                <span>Acesso vitalício</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-cyan-400 stroke-[2.5] shrink-0" />
                <span>Atualizações futuras incluídas</span>
              </li>
            </ul>
          </div>

          {/* Action Button */}
          <div className="pt-10">
            <a
              id="btn-plano-premium"
              href="https://go.perfectpay.com.br/PPU38CQGALN"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#6d28d9] via-[#7c3aed] to-[#6366f1] hover:brightness-110 text-white text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_28px_rgba(124,58,237,0.55)] active:scale-[0.98] text-center"
            >
              <span>Escolher este plano</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

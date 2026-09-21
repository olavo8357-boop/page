import React from 'react';
import { CreditCard, Zap, ShieldCheck } from 'lucide-react';

export const FeatureCards: React.FC = () => {
  const features = [
    {
      id: 'feature-fornecedores',
      icon: CreditCard,
      title: 'Fornecedores verificados',
      description: 'Catálogo auditado e atualizado',
    },
    {
      id: 'feature-facil-acesso',
      icon: Zap,
      title: 'Fácil acesso',
      description: 'Sem complicação, direto ao ponto',
    },
    {
      id: 'feature-compra-segura',
      icon: ShieldCheck,
      title: 'Compra 100% segura',
      description: 'Pagamento protegido e garantia',
    },
  ];

  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 my-16 sm:my-24 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        {features.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              id={item.id}
              className="bg-[#090812]/90 border border-[#241a3f] rounded-3xl p-8 sm:p-10 flex flex-col items-center justify-center text-center group hover:border-[#6366f1]/60 hover:shadow-[0_0_35px_rgba(124,58,237,0.22)] transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle top glow line */}
              <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-violet-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-[#140f28] border border-[#3b2866] flex items-center justify-center text-violet-300 mb-6 group-hover:scale-105 group-hover:text-cyan-300 group-hover:border-[#6366f1] group-hover:shadow-[0_0_20px_rgba(124,58,237,0.35)] transition-all duration-300 shadow-inner">
                <Icon className="w-6 h-6 stroke-[1.75]" />
              </div>

              {/* Title */}
              <h3 className="text-white text-lg sm:text-xl font-bold tracking-tight mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[#8c88a8] text-sm leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

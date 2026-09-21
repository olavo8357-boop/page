import React from 'react';
import { X, Check } from 'lucide-react';

interface PlansModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPlan: (planName: string) => void;
}

export const PlansModal: React.FC<PlansModalProps> = ({ isOpen, onClose, onSelectPlan }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#0c0919] border border-[#2d1e4e] rounded-2xl p-6 sm:p-8 shadow-[0_0_60px_rgba(124,58,237,0.3)] text-neutral-100">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-neutral-400 hover:text-white p-1 rounded-lg hover:bg-neutral-800 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white tracking-tight">Planos ForneceHub</h3>
          <p className="text-sm text-violet-300/70 mt-1">
            Escolha o plano ideal para alavancar a sua operação de vendas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Plano Básico */}
          <div className="bg-[#110d24] border border-[#291b48] rounded-xl p-5 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase font-semibold text-violet-400/80 tracking-wider">
                Iniciante
              </span>
              <h4 className="text-xl font-bold text-white mt-1">Plano Básico</h4>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-white">R$ 169,00</span>
                <span className="text-xs text-neutral-400">/mês</span>
              </div>
              <ul className="mt-5 space-y-2.5 text-xs text-neutral-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Acesso aos fornecedores</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Mercado Livre</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Shopee</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Suporte</span>
                </li>
              </ul>
            </div>
            <a
              href="https://go.perfectpay.com.br/PPU38CQGALO"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onClose()}
              className="mt-6 w-full py-2.5 rounded-lg bg-[#1a1336] hover:bg-[#251a4d] border border-[#3b2769] text-white text-xs font-semibold transition-colors cursor-pointer text-center block"
            >
              Escolher este plano
            </a>
          </div>

          {/* Plano Premium */}
          <div className="bg-[#120d26] border-2 border-[#7c3aed] rounded-xl p-5 flex flex-col justify-between relative shadow-[0_0_30px_rgba(124,58,237,0.3)]">
            <span className="absolute -top-3 right-4 bg-gradient-to-r from-[#7c3aed] to-[#38bdf8] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-[0_0_10px_rgba(124,58,237,0.5)]">
              Mais Popular
            </span>
            <div>
              <span className="text-xs uppercase font-semibold text-violet-300 tracking-wider">
                Vitalício
              </span>
              <h4 className="text-xl font-bold text-white mt-1">Plano Premium</h4>
              <div className="mt-3 flex flex-col gap-1.5">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-white">R$ 249,00</span>
                  <span className="text-xs text-neutral-400">à vista</span>
                </div>
                <div className="text-neutral-400 text-[11px] font-semibold flex items-center gap-1.5">
                  <span>ou em até</span>
                  <span className="bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded text-[11px] font-bold text-emerald-400">
                    12x de R$ 24,90
                  </span>
                </div>
              </div>
              <ul className="mt-5 space-y-2.5 text-xs text-neutral-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Acesso aos fornecedores</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Mercado Livre, Shopee, Magalu e Bling</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Suporte e curso completo</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Acesso vitalício + atualizações futuras</span>
                </li>
              </ul>
            </div>
            <a
              href="https://go.perfectpay.com.br/PPU38CQGALN"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onClose()}
              className="mt-6 w-full py-2.5 rounded-lg bg-gradient-to-r from-[#6d28d9] via-[#7c3aed] to-[#6366f1] hover:brightness-110 text-white text-xs font-bold transition-all cursor-pointer text-center block shadow-[0_0_20px_rgba(124,58,237,0.45)]"
            >
              Escolher este plano
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { X, Lock, Mail, ArrowRight } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-[#0e0f13] border border-[#23242e] rounded-2xl p-6 sm:p-8 shadow-2xl text-neutral-100">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-neutral-400 hover:text-white p-1 rounded-lg hover:bg-neutral-800 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-10 h-10 rounded-xl bg-[#181920] border border-[#292a37] flex items-center justify-center mx-auto mb-3">
            <span className="font-extrabold text-white text-lg">F</span>
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight">Entrar na ForneceHub</h3>
          <p className="text-xs text-neutral-400 mt-1">
            Acesse o painel com os melhores fornecedores
          </p>
        </div>

        {submitted ? (
          <div className="bg-emerald-950/40 border border-emerald-800/60 rounded-xl p-4 text-center">
            <p className="text-emerald-400 text-sm font-semibold">Autenticando sessão...</p>
            <p className="text-xs text-neutral-400 mt-1">Redirecionando para seu dashboard.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                E-mail
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="lojista@exemplo.com.br"
                  className="w-full bg-[#15161d] border border-[#262734] rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-400 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                Senha
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-[#15161d] border border-[#262734] rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-400 transition-colors"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] text-neutral-400 pt-1">
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input type="checkbox" className="rounded border-neutral-700 bg-neutral-900" />
                <span>Lembrar de mim</span>
              </label>
              <a href="#esqueceu" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">
                Esqueceu a senha?
              </a>
            </div>

            <button
              type="submit"
              className="w-full mt-2 py-2.5 rounded-xl bg-white hover:bg-neutral-200 text-neutral-950 text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Acessar Painel</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

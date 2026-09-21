import React from 'react';

interface NavbarProps {
  onLoginClick?: () => void;
  onSubscribeClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onLoginClick, onSubscribeClick }) => {
  return (
    <header className="w-full max-w-7xl mx-auto px-6 sm:px-10 py-6 flex items-center justify-between relative z-20">
      {/* Brand Logo */}
      <div className="flex items-center gap-2.5 cursor-pointer select-none">
        <div className="w-8 h-8 rounded-lg bg-[#0e0c18] border border-[#3b2d63] flex items-center justify-center shadow-[0_0_15px_rgba(124,58,237,0.25)]">
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-violet-300 to-cyan-300 text-base leading-none">F</span>
        </div>
        <div className="flex items-baseline font-bold text-lg tracking-tight">
          <span className="text-white">ForneceHub</span>
          <span className="text-violet-400 font-semibold">.io</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-5">
        <button
          onClick={onLoginClick}
          className="text-sm font-medium text-neutral-300 hover:text-white transition-colors cursor-pointer"
        >
          Login
        </button>

        <button
          onClick={onSubscribeClick}
          className="bg-gradient-to-r from-[#6d28d9] via-[#7c3aed] to-[#6366f1] text-white hover:brightness-110 transition-all font-semibold text-sm px-5 py-2 rounded-xl shadow-[0_0_20px_rgba(124,58,237,0.4)] cursor-pointer active:scale-95"
        >
          Assinar agora
        </button>
      </div>
    </header>
  );
};

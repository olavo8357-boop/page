import React, { useState } from 'react';
import { RotateCw, LayoutGrid } from 'lucide-react';
import type { TimeRange } from '../types';

export const DashboardMockup: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState('Dashboard');
  const [timeRange, setTimeRange] = useState<TimeRange>('7d');
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Dynamic values depending on selected time range
  const metricsData = {
    '7d': {
      pedidos: '47',
      pedidosSub: '+32% vs ontem',
      faturamento: 'R$ 28.450',
      faturamentoSub: '+18% · 7d',
      ticket: 'R$ 182,40',
      ticketSub: '156 pedidos · 7d',
      itens: '312',
      itensSub: '+24% · 7d',
      faturamentoTotal: 'R$ 28.450,90',
      totalPedidos: '156 pedidos',
      status: [
        { label: 'Aguardando pagamento', count: 3, dotColor: 'bg-amber-400' },
        { label: 'Pago', count: 58, dotColor: 'bg-emerald-400' },
        { label: 'Processando', count: 12, dotColor: 'bg-sky-400' },
        { label: 'Enviado', count: 41, dotColor: 'bg-indigo-400' },
        { label: 'Entregue', count: 39, dotColor: 'bg-teal-400' },
        { label: 'Cancelado', count: 2, dotColor: 'bg-rose-400' },
      ],
    },
    '30d': {
      pedidos: '214',
      pedidosSub: '+19% vs mês ant.',
      faturamento: 'R$ 114.820',
      faturamentoSub: '+22% · 30d',
      ticket: 'R$ 188,60',
      ticketSub: '608 pedidos · 30d',
      itens: '1.240',
      itensSub: '+28% · 30d',
      faturamentoTotal: 'R$ 114.820,50',
      totalPedidos: '608 pedidos',
      status: [
        { label: 'Aguardando pagamento', count: 8, dotColor: 'bg-amber-400' },
        { label: 'Pago', count: 245, dotColor: 'bg-emerald-400' },
        { label: 'Processando', count: 34, dotColor: 'bg-sky-400' },
        { label: 'Enviado', count: 162, dotColor: 'bg-indigo-400' },
        { label: 'Entregue', count: 151, dotColor: 'bg-teal-400' },
        { label: 'Cancelado', count: 8, dotColor: 'bg-rose-400' },
      ],
    },
    '12m': {
      pedidos: '2.480',
      pedidosSub: '+64% vs ano ant.',
      faturamento: 'R$ 1.340.900',
      faturamentoSub: '+45% · 12m',
      ticket: 'R$ 194,10',
      ticketSub: '6.908 pedidos · 12m',
      itens: '14.890',
      itensSub: '+52% · 12m',
      faturamentoTotal: 'R$ 1.340.900,00',
      totalPedidos: '6.908 pedidos',
      status: [
        { label: 'Aguardando pagamento', count: 45, dotColor: 'bg-amber-400' },
        { label: 'Pago', count: 3200, dotColor: 'bg-emerald-400' },
        { label: 'Processando', count: 82, dotColor: 'bg-sky-400' },
        { label: 'Enviado', count: 1850, dotColor: 'bg-indigo-400' },
        { label: 'Entregue', count: 1680, dotColor: 'bg-teal-400' },
        { label: 'Cancelado', count: 51, dotColor: 'bg-rose-400' },
      ],
    },
  };

  const currentData = metricsData[timeRange];

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 600);
  };

  const menuItems = [
    'Dashboard',
    'Catálogo',
    'Meus Produtos',
    'Pedidos',
    'Financeiro',
    'Integrações',
    'Assinatura',
    'Chamados',
    'Ferramentas',
    'Tutoriais',
    'Configurações',
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
      <div className="rounded-2xl md:rounded-3xl border border-[#2b2046] bg-[#090810] shadow-[0_15px_60px_rgba(124,58,237,0.18),0_0_1px_rgba(139,92,246,0.3)] overflow-hidden">
        {/* Mockup Top Window Bar */}
        <div className="h-11 border-b border-[#1f1733] bg-[#0d0a17] px-4 flex items-center justify-between relative select-none">
          {/* 3 window controls */}
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/80" />
          </div>

          {/* Browser Address Bar */}
          <div className="flex-1 max-w-sm mx-auto">
            <div className="bg-[#151024] border border-[#2c204c] text-violet-300/80 text-[11px] font-mono py-1 px-4 rounded-md text-center truncate">
              app.fornecehub.io/dashboard
            </div>
          </div>

          <div className="w-14" />
        </div>

        {/* Dashboard Body with Sidebar and Content */}
        <div className="flex flex-col md:flex-row min-h-[460px] bg-[#07060d]">
          {/* Sidebar */}
          <aside className="w-full md:w-52 border-b md:border-b-0 md:border-r border-[#1c152e] p-3.5 shrink-0 flex flex-row md:flex-col gap-1 overflow-x-auto md:overflow-x-visible">
            {menuItems.map((item) => {
              const isActive = activeMenu === item;
              return (
                <button
                  key={item}
                  onClick={() => setActiveMenu(item)}
                  className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all text-left whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#241749] to-[#1a1236] text-violet-200 border border-[#482d8a] shadow-[0_0_15px_rgba(124,58,237,0.2)]'
                      : 'text-[#7d7994] hover:text-[#bbb6d6] hover:bg-[#120d22]'
                  }`}
                >
                  {item === 'Dashboard' ? (
                    <LayoutGrid className="w-3.5 h-3.5 text-violet-400" />
                  ) : (
                    <span className="w-3.5 h-3.5 flex items-center justify-center opacity-0">•</span>
                  )}
                  <span>{item}</span>
                </button>
              );
            })}
          </aside>

          {/* Main View */}
          <main className="flex-1 p-5 md:p-6 overflow-hidden">
            {/* Top Bar inside View */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
              <div>
                <h2 className="text-white text-base font-semibold tracking-tight">Bom dia, Lojista</h2>
                <p className="text-violet-300/60 text-xs mt-0.5">Resumo da operação</p>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-auto">
                {/* Time Range Pills */}
                <div className="bg-[#100d1c] border border-[#261b42] p-0.5 rounded-lg flex items-center">
                  {(['7d', '30d', '12m'] as TimeRange[]).map((range) => (
                    <button
                      key={range}
                      onClick={() => setTimeRange(range)}
                      className={`text-xs px-2.5 py-1 rounded-md transition-colors font-medium cursor-pointer ${
                        timeRange === range
                          ? 'bg-[#291b50] text-violet-100 border border-[#4e3294]'
                          : 'text-[#7c7895] hover:text-neutral-200'
                      }`}
                    >
                      {range}
                    </button>
                  ))}
                </div>

                {/* Atualizar Button */}
                <button
                  onClick={handleRefresh}
                  className="bg-[#100d1c] border border-[#261b42] hover:border-[#4e3294] text-[#8e8aab] hover:text-white text-xs px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <RotateCw className={`w-3 h-3 ${isRefreshing ? 'animate-spin text-violet-300' : ''}`} />
                  <span>Atualizar</span>
                </button>
              </div>
            </div>

            {/* 4 Metric Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
              {/* Pedidos Hoje */}
              <div className="bg-[#0f0c1c] border border-[#23183d] hover:border-[#3d276b] transition-colors rounded-xl p-3.5">
                <span className="text-[10px] font-semibold tracking-wider text-violet-400/70 uppercase block">
                  PEDIDOS HOJE
                </span>
                <span className="text-white text-xl font-bold mt-1.5 block">
                  {currentData.pedidos}
                </span>
                <span className="text-[11px] text-emerald-400 mt-1 block">
                  {currentData.pedidosSub}
                </span>
              </div>

              {/* Faturamento */}
              <div className="bg-[#0f0c1c] border border-[#23183d] hover:border-[#3d276b] transition-colors rounded-xl p-3.5">
                <span className="text-[10px] font-semibold tracking-wider text-violet-400/70 uppercase block">
                  FATURAMENTO
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-200 to-cyan-200 text-xl font-bold mt-1.5 block">
                  {currentData.faturamento}
                </span>
                <span className="text-[11px] text-cyan-300/80 mt-1 block">
                  {currentData.faturamentoSub}
                </span>
              </div>

              {/* Ticket Médio */}
              <div className="bg-[#0f0c1c] border border-[#23183d] hover:border-[#3d276b] transition-colors rounded-xl p-3.5">
                <span className="text-[10px] font-semibold tracking-wider text-violet-400/70 uppercase block">
                  TICKET MÉDIO
                </span>
                <span className="text-white text-xl font-bold mt-1.5 block">
                  {currentData.ticket}
                </span>
                <span className="text-[11px] text-violet-300/70 mt-1 block">
                  {currentData.ticketSub}
                </span>
              </div>

              {/* Itens Vendidos */}
              <div className="bg-[#0f0c1c] border border-[#23183d] hover:border-[#3d276b] transition-colors rounded-xl p-3.5">
                <span className="text-[10px] font-semibold tracking-wider text-violet-400/70 uppercase block">
                  ITENS VENDIDOS
                </span>
                <span className="text-white text-xl font-bold mt-1.5 block">
                  {currentData.itens}
                </span>
                <span className="text-[11px] text-emerald-400 mt-1 block">
                  {currentData.itensSub}
                </span>
              </div>
            </div>

            {/* Bottom Section: Chart + Status */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
              {/* Faturamento Chart Card */}
              <div className="lg:col-span-7 bg-[#0f0c1c] border border-[#23183d] rounded-xl p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white text-xs font-medium">Faturamento</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-cyan-300 text-xs font-semibold">{currentData.faturamentoTotal}</span>
                </div>

                {/* SVG Line Chart */}
                <div className="relative w-full h-36 mt-1 flex items-end">
                  <svg
                    className="w-full h-full overflow-visible"
                    viewBox="0 0 400 130"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="neonChartGlow" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(168, 85, 247, 0.35)" />
                        <stop offset="50%" stopColor="rgba(56, 189, 248, 0.15)" />
                        <stop offset="100%" stopColor="rgba(124, 58, 237, 0.0)" />
                      </linearGradient>
                      <linearGradient id="neonLineStroke" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#c084fc" />
                        <stop offset="60%" stopColor="#818cf8" />
                        <stop offset="100%" stopColor="#38bdf8" />
                      </linearGradient>
                    </defs>

                    {/* Dotted Grid Lines */}
                    <line
                      x1="0"
                      y1="25"
                      x2="400"
                      y2="25"
                      stroke="#271d42"
                      strokeDasharray="3 3"
                      strokeWidth="1"
                    />
                    <line
                      x1="0"
                      y1="65"
                      x2="400"
                      y2="65"
                      stroke="#271d42"
                      strokeDasharray="3 3"
                      strokeWidth="1"
                    />
                    <line
                      x1="0"
                      y1="105"
                      x2="400"
                      y2="105"
                      stroke="#271d42"
                      strokeDasharray="3 3"
                      strokeWidth="1"
                    />

                    {/* Area under curve */}
                    <path
                      d="M 5,100 C 120,95 240,75 395,25 L 395,120 L 5,120 Z"
                      fill="url(#neonChartGlow)"
                    />

                    {/* Rising Gradient Line */}
                    <path
                      d="M 5,100 C 120,95 240,75 395,25"
                      fill="none"
                      stroke="url(#neonLineStroke)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Status da Operação */}
              <div className="lg:col-span-5 bg-[#0f0c1c] border border-[#23183d] rounded-xl p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between border-b border-[#201738] pb-2.5 mb-2">
                  <span className="text-white text-xs font-medium">Status da operação</span>
                  <span className="text-violet-300/60 text-[11px]">{currentData.totalPedidos}</span>
                </div>

                <div className="space-y-2">
                  {currentData.status.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between text-xs py-0.5"
                    >
                      <div className="flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${item.dotColor}`} />
                        <span className="text-[#9e9ab8]">{item.label}</span>
                      </div>
                      <span className="text-white font-medium">{item.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

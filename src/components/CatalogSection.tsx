import React, { useState } from 'react';
import { ChevronDown, Check, Sparkles } from 'lucide-react';

interface ProductItem {
  id: string;
  name: string;
  image: string;
  stock: string;
  inStock: boolean;
  price: string;
}

export const CatalogSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [sortOrder, setSortOrder] = useState('Mais recentes');
  const [registeredIds, setRegisteredIds] = useState<Record<string, boolean>>({});
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleRegister = (product: ProductItem) => {
    setRegisteredIds((prev) => ({
      ...prev,
      [product.id]: !prev[product.id],
    }));

    if (!registeredIds[product.id]) {
      setToastMessage(`"${product.name}" adicionado aos seus produtos!`);
      setTimeout(() => setToastMessage(null), 2500);
    }
  };

  // The exact products shown in the catalog reference
  const row1Products: ProductItem[] = [
    {
      id: 'p-afiador-eletrico',
      name: 'Afiador de Facas Elétrico Multiuso',
      image: 'https://images.unsplash.com/photo-1593618998160-e34014e67546?w=400&auto=format&fit=crop&q=80',
      stock: 'Em estoque',
      inStock: true,
      price: 'R$ 29,90',
    },
    {
      id: 'p-anel-yoga',
      name: 'Anel de Alongamento Yoga Pilates',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&auto=format&fit=crop&q=80',
      stock: 'Em estoque',
      inStock: true,
      price: 'R$ 18,90',
    },
    {
      id: 'p-antena-moto',
      name: 'Antena Corta Linha Para Moto',
      image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=400&auto=format&fit=crop&q=80',
      stock: 'Em estoque',
      inStock: true,
      price: 'R$ 14,90',
    },
    {
      id: 'p-balanca',
      name: 'Balança Digital De Cozinha 10kg',
      image: 'https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?w=400&auto=format&fit=crop&q=80',
      stock: 'Em estoque',
      inStock: true,
      price: 'R$ 21,90',
    },
    {
      id: 'p-bracadeira',
      name: 'Braçadeira de Celular Para Corrida',
      image: 'https://images.unsplash.com/photo-1510519138161-5364d8cd5bbbc?w=400&auto=format&fit=crop&q=80',
      stock: 'Em estoque',
      inStock: true,
      price: 'R$ 12,90',
    },
    {
      id: 'p-kit-utensilios',
      name: 'Kit Utensílios de Cozinha',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=400&auto=format&fit=crop&q=80',
      stock: 'Em estoque',
      inStock: true,
      price: 'R$ 39,90',
    },
  ];

  const row2Products: ProductItem[] = [
    {
      id: 'p-adesivos',
      name: 'Adesivos de Parede / Suporte Multiuso',
      image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=400&auto=format&fit=crop&q=80',
      stock: 'Em estoque',
      inStock: true,
      price: 'R$ 9,90',
    },
    {
      id: 'p-extensor',
      name: 'Extensor Adaptador De Torneira 1080°',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&auto=format&fit=crop&q=80',
      stock: '428 em estoque',
      inStock: true,
      price: 'R$ 11,00',
    },
    {
      id: 'p-limpa-vidros',
      name: 'Limpa Vidros Magnético Dupla Face',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&auto=format&fit=crop&q=80',
      stock: 'Em estoque',
      inStock: true,
      price: 'R$ 34,90',
    },
    {
      id: 'p-meia-futebol',
      name: 'Meia Futebol Antiderrapante Pro',
      image: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=400&auto=format&fit=crop&q=80',
      stock: 'Em estoque',
      inStock: true,
      price: 'R$ 11,90',
    },
    {
      id: 'p-mini-seladora',
      name: 'Mini Seladora Portátil de Embalagens',
      image: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?w=400&auto=format&fit=crop&q=80',
      stock: 'Em estoque',
      inStock: true,
      price: 'R$ 9,90',
    },
    {
      id: 'p-ralador',
      name: 'Ralador Fatiador Multifuncional 7 em 1',
      image: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?w=400&auto=format&fit=crop&q=80',
      stock: 'Em estoque',
      inStock: true,
      price: 'R$ 19,90',
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 pb-24 sm:pb-32 flex flex-col items-center relative z-10">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#161720] border border-[#2f3140] text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-fade-in text-xs font-medium">
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Pill Badge: • CATÁLOGO */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#372863] bg-[#120e24] text-violet-300 text-xs font-semibold tracking-wider uppercase mb-5 select-none shadow-[0_0_15px_rgba(124,58,237,0.2)]">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(6,182,212,0.8)]" />
        <span>CATÁLOGO</span>
      </div>

      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight text-center max-w-3xl mb-12 sm:mb-14">
        Centenas de produtos prontos para vender
      </h2>

      {/* Mockup Window */}
      <div className="w-full rounded-2xl md:rounded-3xl border border-[#2b2046] bg-[#090810] shadow-[0_15px_60px_rgba(124,58,237,0.18),0_0_1px_rgba(139,92,246,0.3)] overflow-hidden">
        {/* Browser Top Bar */}
        <div className="h-11 border-b border-[#1f1733] bg-[#0d0a17] px-4 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/80" />
          </div>

          <div className="flex-1 max-w-sm mx-auto">
            <div className="bg-[#151024] border border-[#2c204c] text-violet-300/80 text-[11px] font-mono py-1 px-4 rounded-md text-center truncate">
              app.fornecehub.io/catalogo
            </div>
          </div>

          <div className="w-14" />
        </div>

        {/* Catalog Content Area */}
        <div className="p-0 bg-[#07060d]">
          {/* Catalog Reference Image */}
          <div className="w-full overflow-hidden bg-[#07060d]">
            <img
              src="https://i.imgur.com/i3oeU48.png"
              alt="Catálogo de Produtos"
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

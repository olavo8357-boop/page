import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DashboardMockup } from './components/DashboardMockup';
import { FeatureCards } from './components/FeatureCards';
import { CatalogSection } from './components/CatalogSection';
import { PricingSection } from './components/PricingSection';
import { GuaranteeAndCta } from './components/GuaranteeAndCta';
import { PlansModal } from './components/PlansModal';
import { LoginModal } from './components/LoginModal';

export default function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isPlansOpen, setIsPlansOpen] = useState(false);

  const scrollToPlans = () => {
    const plansEl = document.getElementById('planos');
    if (plansEl) {
      plansEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsPlansOpen(true);
    }
  };

  const handleSelectPlan = (_planName: string) => {
    setIsPlansOpen(false);
  };

  return (
    <div className="min-h-screen bg-stripes-pattern text-neutral-100 flex flex-col relative overflow-x-hidden antialiased selection:bg-neutral-800 selection:text-white">
      {/* Subtle radial ambient lighting behind the hero section */}
      <div 
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[580px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/[0.04] via-transparent to-transparent z-0"
        aria-hidden="true" 
      />

      {/* Top Navbar */}
      <Navbar
        onLoginClick={() => setIsLoginOpen(true)}
        onSubscribeClick={scrollToPlans}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-start relative z-10">
        {/* Hero Section */}
        <Hero
          onSubscribeClick={scrollToPlans}
          onPlansClick={scrollToPlans}
        />

        {/* Dashboard Mockup Component */}
        <div className="w-full">
          <DashboardMockup />
        </div>

        {/* 3 Highlights Cards: Fornecedores verificados, Fácil acesso, Compra 100% segura */}
        <FeatureCards />

        {/* Catalog Section with Products Mockup */}
        <CatalogSection />

        {/* Pricing Section ("Escolha o plano ideal para você") */}
        <PricingSection />

        {/* Guarantee, Final CTA and Footer */}
        <GuaranteeAndCta onSubscribeClick={scrollToPlans} />
      </main>

      {/* Interactive Modals */}
      <PlansModal
        isOpen={isPlansOpen}
        onClose={() => setIsPlansOpen(false)}
        onSelectPlan={handleSelectPlan}
      />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />
    </div>
  );
}


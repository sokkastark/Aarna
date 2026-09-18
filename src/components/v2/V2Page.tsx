import React from 'react';
import { V2Header } from './V2Header';
import { V2Hero } from './V2Hero';
import { V2ProductGrid } from './V2ProductGrid';
import { V2ComboBuilder } from './V2ComboBuilder';
import { V2Testimonials } from './V2Testimonials';
import { V2CraftJourney } from './V2CraftJourney';
import { USASamplesBanner } from '../USASamplesBanner';
import { MysuruHeritageArtBanner } from '../MysuruHeritageArtBanner';
import { HowItWorks } from '../HowItWorks';
import { BrandStory } from '../BrandStory';
import { Footer } from '../Footer';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';

interface V2PageProps {
  currentRoute: 'v1' | 'v2';
  onSwitchRoute: (route: 'v1' | 'v2') => void;
  onOpenDetailModal: (product: Product) => void;
}

export const V2Page: React.FC<V2PageProps> = ({
  currentRoute,
  onSwitchRoute,
  onOpenDetailModal,
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2C2420]">
      {/* V2 Header with Mode Switcher */}
      <V2Header currentRoute={currentRoute} onSwitchRoute={onSwitchRoute} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <V2Hero />
        <V2ProductGrid onOpenDetailModal={onOpenDetailModal} />
        <V2ComboBuilder />
        <USASamplesBanner />
        <V2CraftJourney />
        <V2Testimonials />
        <MysuruHeritageArtBanner />
        <HowItWorks />
        <BrandStory />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

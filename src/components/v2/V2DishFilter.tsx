import React from 'react';
import { Sparkles, Utensils, Flame, Heart, Coffee, ChevronRight } from 'lucide-react';

export interface DishFilterOption {
  id: string;
  label: string;
  kannadaLabel: string;
  icon: React.ReactNode;
  description: string;
  matchedProductIds: string[];
}

export const DISH_FILTERS: DishFilterOption[] = [
  {
    id: 'all',
    label: 'All Products',
    kannadaLabel: 'ಎಲ್ಲಾ ಉತ್ಪನ್ನಗಳು',
    icon: <Sparkles className="w-4 h-4" />,
    description: 'Complete authentic Mysuru spice & paste collection',
    matchedProductIds: ['puliyogare-paste', 'bisi-bele-bath-powder', 'vangi-bath-powder', 'chatni-pudi', 'sambar-powder', 'rasam-powder']
  },
  {
    id: 'tiffin',
    label: 'Idli, Dosa & Rotti',
    kannadaLabel: 'ಇಡ್ಲಿ, ದೋಸೆ ಮತ್ತು ರೊಟ್ಟಿ',
    icon: <Utensils className="w-4 h-4" />,
    description: 'Everyday crunchy gunpowder & chutneys for tiffin meals',
    matchedProductIds: ['chatni-pudi']
  },
  {
    id: 'rice-feast',
    label: 'Royal Rice Feasts',
    kannadaLabel: 'ವಿಶೇಷ ಬಾತ್‌ಗಳು',
    icon: <Flame className="w-4 h-4" />,
    description: 'Karnataka aromatic spice blends for Bisi Bele Bath & Puliyogre',
    matchedProductIds: ['puliyogare-paste', 'bisi-bele-bath-powder', 'vangi-bath-powder']
  },
  {
    id: 'daily-curry',
    label: 'Everyday Saaru & Huli',
    kannadaLabel: 'ದೈನಂದಿನ ಸಾರು ಮತ್ತು ಹುಳಿ',
    icon: <Coffee className="w-4 h-4" />,
    description: 'Homestyle drumstick sambar & digestive pepper saaru powders',
    matchedProductIds: ['sambar-powder', 'rasam-powder']
  },
  {
    id: 'temple-special',
    label: 'Mysuru Heritage Specials',
    kannadaLabel: 'ಮೈಸೂರು ಪರಂಪರೆ',
    icon: <Heart className="w-4 h-4" />,
    description: 'Traditional Melukote & Brahmin household festive recipes',
    matchedProductIds: ['puliyogare-paste', 'bisi-bele-bath-powder']
  }
];

interface V2DishFilterProps {
  activeFilterId: string;
  onSelectFilter: (filterId: string) => void;
}

export const V2DishFilter: React.FC<V2DishFilterProps> = ({
  activeFilterId,
  onSelectFilter
}) => {
  const currentFilter = DISH_FILTERS.find((f) => f.id === activeFilterId) || DISH_FILTERS[0];

  return (
    <div className="w-full bg-gradient-to-r from-[#4A121A] via-[#8B2635] to-[#4A121A] py-8 border-y-2 border-[#D4AF37]/40 shadow-xl text-[#FAF7F2] relative overflow-hidden">
      
      {/* Background Subtle Shimmer Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.15),transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Title */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FAF7F2]/10 border border-[#D4AF37]/40 text-[#F4E1A4] text-xs font-bold uppercase tracking-wider mb-2 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
            <span>Interactive Meal Selector</span>
          </div>
          <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#FAF7F2] tracking-tight">
            What Are You Cooking Today?
          </h3>
          <p className="text-xs sm:text-sm text-[#F5EBE6] mt-1 font-light max-w-lg mx-auto">
            Click your dish type to view its authentic Mysuru spice pairings
          </p>
        </div>

        {/* Filter Chips Container */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 sm:gap-3">
          {DISH_FILTERS.map((filter) => {
            const isActive = filter.id === activeFilterId;
            return (
              <button
                key={filter.id}
                onClick={() => onSelectFilter(filter.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer border ${
                  isActive
                    ? 'bg-[#FAF7F2] text-[#4A121A] border-[#D4AF37] shadow-xl shadow-[#D4AF37]/20 scale-105 ring-2 ring-[#D4AF37]'
                    : 'bg-[#FAF7F2]/10 text-[#F5EBE6] border-[#FAF7F2]/20 hover:bg-[#FAF7F2]/20 hover:border-[#D4AF37]/50'
                }`}
              >
                <span className={isActive ? 'text-[#8B2635]' : 'text-[#D4AF37]'}>
                  {filter.icon}
                </span>
                <span>{filter.label}</span>
                <span className={`text-[10px] hidden sm:inline ${isActive ? 'text-[#8C4320]' : 'text-[#E5D7CE]'}`}>
                  ({filter.kannadaLabel})
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Filter Hint Banner */}
        <div className="mt-5 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#F4E1A4] bg-[#FAF7F2]/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#D4AF37]/40 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Showing: <strong className="font-bold text-[#FAF7F2]">{currentFilter.description}</strong></span>
          </span>
        </div>

      </div>
    </div>
  );
};

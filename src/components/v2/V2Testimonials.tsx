import React from 'react';
import { Star, Quote, MapPin, Sparkles } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  location: string;
  flag: string;
  rating: number;
  review: string;
  favoriteProduct: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sharadha R.',
    location: 'Mysuru, Karnataka',
    flag: '🇮🇳',
    rating: 5,
    review: 'Tastes exactly like my grandmother’s traditional recipe! The Puliyogre Gojju has that rich tamarind tang and sesame oil aroma that is impossible to find in store-bought pastes.',
    favoriteProduct: 'Puliyogre Paste',
  },
  {
    id: '2',
    name: 'Venkatesh Rao',
    location: 'California, USA',
    flag: '🇺🇸',
    rating: 5,
    review: 'Living in the US, we truly missed authentic Bisi Bele Bath. Aarna’s masala powder has the exact Marathi Moggu aroma of home feasts. Ordering sample packs for our friends too!',
    favoriteProduct: 'Bisibelebath Powder',
  },
  {
    id: '3',
    name: 'Anupama Hegde',
    location: 'Bengaluru, Karnataka',
    flag: '🇮🇳',
    rating: 5,
    review: 'Their Chatni Pudi mixed with hot rice and ghee is pure comfort food. The coarse texture of roasted lentils and dry coconut is spot on!',
    favoriteProduct: 'Chatni Pudi',
  },
];

export const V2Testimonials: React.FC = () => {
  return (
    <section className="py-14 bg-[#FAF7F2] relative border-t border-[#E8DFD5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#8B2635]/10 text-[#8B2635] text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Customer Love & Reviews</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#4A121A]">
            Loved by Mysuru Kitchens <br className="hidden sm:inline" /> & NRIs Worldwide
          </h2>
          <p className="text-xs sm:text-sm text-[#6B5E55] mt-2 font-light">
            Real feedback from families enjoying authentic small-batch Mysuru flavors
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#FAF7F2] rounded-3xl p-6 border border-[#EAE2D8] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group hover:border-[#D4AF37]/60"
            >
              <Quote className="w-8 h-8 text-[#D4AF37]/30 absolute top-5 right-5 pointer-events-none group-hover:text-[#D4AF37]/50 transition-colors" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>

                {/* Review Quote */}
                <p className="text-xs sm:text-sm text-[#4A3B32] italic leading-relaxed mb-6 font-light">
                  "{t.review}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-[#EAE2D8] flex items-center justify-between">
                <div>
                  <div className="font-serif-title font-bold text-sm text-[#4A121A]">
                    {t.name}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-[#6B5E55]">
                    <span className="text-sm">{t.flag}</span>
                    <MapPin className="w-3 h-3 text-[#8B2635]" />
                    <span>{t.location}</span>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full bg-[#F4EBE3] text-[#8C4320] text-[10px] font-semibold border border-[#E2D8CC]">
                  {t.favoriteProduct}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
